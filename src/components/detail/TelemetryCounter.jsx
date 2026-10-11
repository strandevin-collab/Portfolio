import React, { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

export default function TelemetryCounter({
  value = 0,
  prefix = '',
  suffix = '',
  precision = 0,
  label = '',
  duration = 1.4,
  accentColor = '#f59e0b'
}) {
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 75,
    damping: 18,
    duration: duration * 1000
  })

  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(latest.toFixed(precision))
    })
    return () => unsubscribe()
  }, [spring, precision])

  return (
    <div className="flex flex-col p-4 rounded-xl bg-dark-900/90 border border-metallic-copper/20 shadow-bas-relief relative overflow-hidden group">
      {/* Decorative accent top line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-80"
        style={{ backgroundColor: accentColor }}
      />

      <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-1 flex items-center justify-between">
        <span>{label}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
      </span>

      <div className="flex items-baseline gap-0.5">
        {prefix && (
          <span className="text-lg font-mono font-bold text-metallic-copper">
            {prefix}
          </span>
        )}
        <span className="text-3xl font-mono font-extrabold text-slate-100 tracking-tight">
          {displayValue}
        </span>
        {suffix && (
          <span className="text-sm font-mono font-semibold text-metallic-amber ml-1">
            {suffix}
          </span>
        )}
      </div>

      {/* Micro-telemetry bar */}
      <div className="w-full bg-dark-950 h-1 rounded-full mt-3 overflow-hidden border border-white/5">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: accentColor }}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, Math.max(15, (value / (value > 100 ? value * 1.2 : 100)) * 100))}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
