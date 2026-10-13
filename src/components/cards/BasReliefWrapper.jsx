import React, { useRef, useState, useCallback } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

/**
 * BasReliefWrapper provides an Apple-style 3D Specular Tilt surface:
 * - Dynamic 3D perspective tilt reacting to cursor coordinates (-8° to +8°)
 * - Specular glass glare reflection across frosted glass
 * - Subtle Z-axis layer pop
 * - Eased organic spring physics on enter and reset
 */
export default function BasReliefWrapper({
  children,
  className = '',
  onClick,
  interactive = true,
  ...props
}) {
  const cardRef = useRef(null)

  // Spring physics for buttery-smooth Apple-style tilt
  const springConfig = { stiffness: 300, damping: 25, mass: 0.5 }
  const xNorm = useSpring(0, springConfig)
  const yNorm = useSpring(0, springConfig)

  // 3D Tilt angles derived from normalized cursor position (-1 to 1)
  const rotateX = useTransform(yNorm, [-1, 1], [7.5, -7.5])
  const rotateY = useTransform(xNorm, [-1, 1], [-7.5, 7.5])
  const scale = useTransform(xNorm, [-1, 0, 1], [1.02, 1, 1.02])

  // Specular glare position and intensity
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = useCallback((e) => {
    if (!interactive || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Normalized coordinates (-1 to 1)
    const normX = (x / rect.width) * 2 - 1
    const normY = (y / rect.height) * 2 - 1

    xNorm.set(normX)
    yNorm.set(normY)

    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1
    })
  }, [interactive, xNorm, yNorm])

  const handleMouseLeave = useCallback(() => {
    xNorm.set(0)
    yNorm.set(0)
    setGlare(prev => ({ ...prev, opacity: 0 }))
  }, [xNorm, yNorm])

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
          willChange: 'transform'
        }}
        className={`rounded-[2.2rem] bg-navy-950/50 backdrop-blur-2xl border border-white/10 relative overflow-hidden group cursor-pointer shadow-[0_20px_50px_rgba(2,6,17,0.75)] transition-colors duration-300 hover:border-sapphire-light/50 hover:shadow-[0_30px_70px_rgba(2,6,17,0.95),0_0_35px_rgba(56,189,248,0.22)] ${className}`}
        {...props}
      >
        {/* Dynamic Specular Glass Glare (Apple TV style light sheen) */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[2.2rem] z-20 mix-blend-overlay"
          style={{
            opacity: glare.opacity * 0.75,
            background: `radial-gradient(circle 380px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(56, 189, 248, 0.25) 30%, transparent 70%)`
          }}
        />

        {/* Ambient Corner Ambient Sheen */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 rounded-[2.2rem] z-20"
          style={{
            opacity: glare.opacity * 0.35,
            background: `radial-gradient(circle 500px at ${glare.x}% ${glare.y}%, rgba(56, 189, 248, 0.25) 0%, rgba(37, 99, 235, 0.1) 45%, transparent 75%)`
          }}
        />

        {/* Internal Content with Z-axis Pop */}
        <div
          className="relative z-10 w-full h-full"
          style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  )
}
