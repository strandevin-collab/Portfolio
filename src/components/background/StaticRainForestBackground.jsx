import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { usePortfolio } from '../../context/PortfolioContext'

export default function StaticRainForestBackground() {
  const { activeSceneIndex, selectedCategoryId } = usePortfolio()
  const { scrollY } = useScroll()

  // Gentle, high-depth multi-layer parallax transforms for Level 2 scroll
  const treesScrollY = useTransform(scrollY, [0, 2000], [0, -65])
  const mistScrollY = useTransform(scrollY, [0, 2000], [0, -25])

  // On Level 1 (locked 3-scene stage), shift background layers smoothly per active scene index
  const isHubStage = !selectedCategoryId
  const sceneTreesOffset = isHubStage ? activeSceneIndex * -32 : 0
  const sceneMistOffset = isHubStage ? activeSceneIndex * -14 : 0
  const sceneScale = isHubStage ? 1 + activeSceneIndex * 0.018 : 1.02

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden no-print">
      {/* Deep Navy Base Background */}
      <div className="absolute inset-0 bg-navy-950" />

      {/* Layer 1: Atmospheric Misty Rain Forest (Multi-Plane Scene + Scroll Parallax) */}
      <motion.img
        style={{ y: isHubStage ? undefined : treesScrollY }}
        animate={{
          y: isHubStage ? sceneTreesOffset : 0,
          scale: sceneScale
        }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        src="./assets/forest_rain_bg.jpg"
        alt="Misty Rain Forest Background"
        className="absolute -top-[6%] inset-x-0 w-full h-[118%] object-cover object-center opacity-60 filter contrast-[1.08] brightness-[0.85] will-change-transform pointer-events-none select-none"
      />

      {/* Layer 2: Subtle Navy Atmospheric Radial Vignette (Secondary Parallax Depth) */}
      <motion.div
        style={{ y: isHubStage ? undefined : mistScrollY }}
        animate={{ y: isHubStage ? sceneMistOffset : 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-gradient-radial from-transparent via-navy-950/40 to-navy-950/85 will-change-transform"
      />

      {/* Layer 3: Top/Bottom Atmospheric Edge Falloff */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/45 via-transparent to-navy-950/80" />
    </div>
  )
}
