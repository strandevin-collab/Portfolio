import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function StaticRainForestBackground() {
  const { scrollY } = useScroll()

  // Gentle, high-depth multi-layer parallax transforms (low displacement to remain subtle & serene)
  const treesParallaxY = useTransform(scrollY, [0, 2000], [0, -65])
  const mistParallaxY = useTransform(scrollY, [0, 2000], [0, -25])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden no-print">
      {/* Deep Navy Base Background */}
      <div className="absolute inset-0 bg-navy-950" />

      {/* Layer 1: Atmospheric Misty Rain Forest (Gentle Parallax Depth Shift) */}
      <motion.img
        style={{ y: treesParallaxY }}
        src="./assets/forest_rain_bg.jpg"
        alt="Misty Rain Forest Background"
        className="absolute -top-[6%] inset-x-0 w-full h-[116%] object-cover object-center opacity-60 filter contrast-[1.08] brightness-[0.85] will-change-transform pointer-events-none select-none"
      />

      {/* Layer 2: Subtle Navy Atmospheric Radial Vignette (Secondary Parallax Depth) */}
      <motion.div
        style={{ y: mistParallaxY }}
        className="absolute inset-0 bg-gradient-radial from-transparent via-navy-950/40 to-navy-950/85 will-change-transform"
      />

      {/* Layer 3: Top/Bottom Atmospheric Edge Falloff */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/45 via-transparent to-navy-950/80" />
    </div>
  )
}
