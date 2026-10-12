import React from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  Building2,
  Tag,
  Target,
  AlertTriangle,
  Lightbulb,
  Award
} from 'lucide-react'
import TelemetryCounter from './TelemetryCounter'

export default function NarrativeView({ item, isSingleColumn = false }) {
  const { story, telemetry, specs, tags } = item

  return (
    <div className="w-full h-full overflow-y-auto pr-2 custom-scrollbar space-y-6 text-ivory">
      {/* Tactical Header with Instant Serif Typography (No Decoder) */}
      <div className="pb-5">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300 mb-3">
          <span className="flex items-center gap-1.5 text-ivory font-semibold px-3 py-1 rounded-full bg-navy-950/80 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-sapphire-light" />
            {item.organization}
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-950/80 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {item.timeline}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-sapphire-glow font-medium">
            {item.role}
          </span>
        </div>

        {/* Clean, Instant Editorial Headline */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ivory-50 leading-tight">
          {item.title}
        </h2>

        <p className="mt-3 text-sm font-sans text-ivory-200 leading-relaxed font-light">
          {item.teaser}
        </p>
      </div>

      {/* Soft Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 1. Project Telemetry Counter Strip (Borderless) */}
      {telemetry && telemetry.length > 0 && (
        <div className={`grid gap-3 ${isSingleColumn ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
          {telemetry.map((tel, idx) => (
            <TelemetryCounter
              key={idx}
              label={tel.label}
              value={tel.value}
              prefix={tel.prefix}
              suffix={tel.suffix}
              precision={tel.precision}
              duration={1.2 + idx * 0.2}
              accentColor="#38bdf8"
            />
          ))}
        </div>
      )}

      {/* 2. Hobby Technical Specifications Strip in Deep Navy & Ivory (Borderless) */}
      {specs && specs.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {specs.map((sp, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-navy-950/80 shadow-xl relative"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                {sp.label}
              </span>
              <span className="text-sm font-mono font-bold text-ivory block mb-1">
                {sp.value}
              </span>
              <span className="text-xs font-sans text-ivory-300 block font-light">
                {sp.note}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* 4-Phase Narrative Breakdown (Borderless) */}
      {story && (
        <div className="space-y-4">
          {/* Phase 1: Inception */}
          {story.inception && (
            <div className="p-5 rounded-2xl bg-navy-950/70 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded-lg bg-navy-850 text-sapphire-light">
                  <Target className="w-4 h-4" />
                </span>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ivory-100">
                  01 // Context & Inception
                </h4>
              </div>
              <p className="text-sm font-sans text-ivory-200 leading-relaxed pl-6 border-l-2 border-slate-600 font-light">
                {story.inception}
              </p>
            </div>
          )}

          {/* Phase 2: Challenge */}
          {story.challenge && (
            <div className="p-5 rounded-2xl bg-navy-950/70 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded-lg bg-navy-850 text-sapphire-glow">
                  <AlertTriangle className="w-4 h-4" />
                </span>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ivory-100">
                  02 // The Technical / Craft Challenge
                </h4>
              </div>
              <p className="text-sm font-sans text-ivory-200 leading-relaxed pl-6 border-l-2 border-sapphire/60 font-light">
                {story.challenge}
              </p>
            </div>
          )}

          {/* Phase 3: Strategy */}
          {story.strategy && (
            <div className="p-5 rounded-2xl bg-navy-950/70 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded-lg bg-navy-850 text-white">
                  <Lightbulb className="w-4 h-4" />
                </span>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ivory-100">
                  03 // Architecture & Solution
                </h4>
              </div>
              <p className="text-sm font-sans text-ivory-200 leading-relaxed pl-6 border-l-2 border-sapphire-glow font-light">
                {story.strategy}
              </p>
            </div>
          )}

          {/* Phase 4: Outcome */}
          {story.outcome && (
            <div className="p-5 rounded-2xl bg-navy-950/70 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded-lg bg-navy-850 text-emerald-400">
                  <Award className="w-4 h-4" />
                </span>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ivory-100">
                  04 // Quantified Result & Long-Term Value
                </h4>
              </div>
              <p className="text-sm font-sans text-ivory-200 leading-relaxed pl-6 border-l-2 border-emerald-500/70 font-light">
                {story.outcome}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tags footer */}
      {tags && tags.length > 0 && (
        <div className="pt-3 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
            <Tag className="w-3.5 h-3.5" />
            Core Disciplines:
          </span>
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-3 py-1 rounded-full bg-navy-950/80 text-ivory-200 shadow-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
