import React, { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

/**
 * BasReliefWrapper / HoverLightWrapper provides a borderless, luxury surface
 * with a dynamic Blue & White mouse-tracking light beam and subtle 3D tilt.
 */
export default function BasReliefWrapper({
  children,
  className = '',
  onClick,
  interactive = true,
  ...props
}) {
  const cardRef = useRef(null)
  const [styleVars, setStyleVars] = useState({
    '--mouse-rel-x': '50%',
    '--mouse-rel-y': '50%',
    '--sheen-opacity': '0',
    rotateX: 0,
    rotateY: 0
  })

  const handleMouseMove = useCallback((e) => {
    if (!interactive || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Normalized center coordinates (-1 to 1)
    const normX = (x / rect.width) * 2 - 1
    const normY = (y / rect.height) * 2 - 1

    // Subtle 3D tilt angles (soft and smooth)
    const rotX = -normY * 2.5
    const rotY = normX * 2.5

    setStyleVars({
      '--mouse-rel-x': `${(x / rect.width) * 100}%`,
      '--mouse-rel-y': `${(y / rect.height) * 100}%`,
      '--sheen-opacity': '1',
      rotateX: rotX,
      rotateY: rotY
    })
  }, [interactive])

  const handleMouseLeave = useCallback(() => {
    setStyleVars({
      '--mouse-rel-x': '50%',
      '--mouse-rel-y': '50%',
      '--sheen-opacity': '0',
      rotateX: 0,
      rotateY: 0
    })
  }, [])

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        ...styleVars
      }}
      animate={{
        rotateX: styleVars.rotateX,
        rotateY: styleVars.rotateY
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      className={`rounded-[2rem] bg-navy-900/80 backdrop-blur-md relative overflow-hidden group cursor-pointer shadow-2xl transition-all duration-300 hover:shadow-[0_25px_60px_rgba(2,6,17,0.9),0_0_30px_rgba(56,189,248,0.15)] ${className}`}
      {...props}
    >
      {/* Dynamic Blue & White Hover Light Beam (Pure Light, Zero Outlines) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[2rem]"
        style={{
          opacity: styleVars['--sheen-opacity'],
          background: `radial-gradient(circle 420px at var(--mouse-rel-x) var(--mouse-rel-y), rgba(255, 255, 255, 0.22) 0%, rgba(56, 189, 248, 0.22) 28%, rgba(37, 99, 235, 0.10) 55%, transparent 75%)`,
        }}
      />

      {/* Internal Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  )
}
