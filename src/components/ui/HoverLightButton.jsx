import React, { useRef, useState, useCallback } from 'react'

/**
 * HoverLightButton provides a borderless interactive button or link
 * featuring a cursor-following Blue & White light beam and ambient bloom.
 */
export default function HoverLightButton({
  children,
  onClick,
  href,
  download,
  target,
  rel,
  as = 'button',
  variant = 'navy', // 'navy' | 'ivory' | 'ghost' | 'sapphire'
  className = '',
  ...props
}) {
  const btnRef = useRef(null)
  const [coords, setCoords] = useState({ x: '50%', y: '50%', opacity: 0 })

  const handleMouseMove = useCallback((e) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setCoords({
      x: `${x}px`,
      y: `${y}px`,
      opacity: 1
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setCoords(prev => ({ ...prev, opacity: 0 }))
  }, [])

  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 rounded-full font-mono text-xs font-medium cursor-pointer shadow-md select-none group"

  const variantStyles = {
    navy: "bg-navy-950/90 hover:bg-navy-850 text-ivory hover:shadow-[0_0_24px_rgba(56,189,248,0.32),0_0_8px_rgba(255,255,255,0.2)]",
    ivory: "bg-ivory hover:bg-white text-navy-950 font-bold hover:shadow-[0_0_25px_rgba(255,255,255,0.45),0_0_15px_rgba(56,189,248,0.35)]",
    ghost: "bg-navy-900/60 hover:bg-navy-850/90 text-ivory-200 hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]",
    sapphire: "bg-sapphire hover:bg-sapphire-light text-white font-semibold hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
  }

  const Component = href ? 'a' : as

  return (
    <Component
      ref={btnRef}
      href={href}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.navy} ${className}`}
      {...props}
    >
      {/* Dynamic Blue & White Specular Beam following the cursor */}
      <span
        className="pointer-events-none absolute inset-0 transition-opacity duration-200 rounded-full"
        style={{
          opacity: coords.opacity,
          background: `radial-gradient(circle 95px at ${coords.x} ${coords.y}, rgba(255, 255, 255, 0.35) 0%, rgba(56, 189, 248, 0.30) 40%, rgba(37, 99, 235, 0.12) 75%, transparent 100%)`
        }}
      />

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  )
}
