import React from 'react'

export default function StaticRainForestBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden no-print">
      {/* Deep Navy Base Background */}
      <div className="absolute inset-0 bg-navy-950" />

      {/* Atmospheric Misty Rain Forest Picture (Almost Faded Out) */}
      <img
        src="./assets/forest_rain_bg.jpg"
        alt="Misty Rain Forest Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-25 filter blur-[0.5px] scale-105"
      />

      {/* Soft Vignette & Deep Navy Atmospheric Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-navy-900/60 via-navy-950/85 to-navy-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-transparent to-navy-950/90" />
    </div>
  )
}
