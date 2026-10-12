import React from 'react'
import {
  Calendar,
  Building2,
  Tag,
  CheckCircle2,
  Quote,
  ArrowRight,
  TrendingUp,
  Target,
  Sparkles,
  Layers,
  Award
} from 'lucide-react'
import TelemetryCounter from './TelemetryCounter'

export default function StoryDetailView({ item }) {
  const {
    title,
    role,
    organization,
    timeline,
    teaser,
    storyNarrative,
    roadmap,
    beforeAfter,
    pullQuote,
    telemetry,
    tags
  } = item

  return (
    <div className="w-full h-full overflow-y-auto pr-2 sm:pr-4 custom-scrollbar space-y-8 text-ivory">
      {/* 1. Header: Instant Clean Editorial Serif (No Matrix Decoder) */}
      <div className="pb-4">
        {/* Meta badges row */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-300 mb-4">
          <span className="flex items-center gap-1.5 text-ivory font-semibold px-3 py-1 rounded-full bg-sapphire/20 border border-sapphire-light/30 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-sapphire-light" />
            {organization}
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-950/70 border border-white/5 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {timeline}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-sapphire-glow font-medium">
            {role}
          </span>
        </div>

        {/* Big, Crisp, Instant Editorial Headline */}
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-ivory-50 tracking-tight leading-[1.15] mb-3">
          {title}
        </h2>

        {/* Narrative Teaser */}
        <p className="text-sm sm:text-base font-sans text-ivory-200 leading-relaxed font-light max-w-3xl">
          {teaser}
        </p>
      </div>

      {/* Soft Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* 2. Visual Aid: Impact Telemetry Scorecards (Frosted Glass) */}
      {telemetry && telemetry.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
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

      {/* 3. Visual Aid: Stepped Project Roadmap (Milestone Flow) */}
      {roadmap && roadmap.length > 0 && (
        <div className="p-6 sm:p-7 rounded-3xl bg-navy-950/80 border border-white/10 backdrop-blur-xl shadow-2xl space-y-4">
          <div className="flex items-center justify-between gap-3 pb-2 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sapphire-glow animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sapphire-light">
                Project Execution Roadmap
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              {roadmap.length} Sequential Milestones
            </span>
          </div>

          {/* Stepped sequence grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {roadmap.map((step, idx) => (
              <div
                key={idx}
                className="relative p-4 rounded-2xl bg-navy-900/90 border border-white/5 hover:border-sapphire-light/30 transition-all duration-200 shadow-md group"
              >
                {/* Phase Number Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-sapphire-light px-2 py-0.5 rounded-full bg-sapphire/20 border border-sapphire-light/30">
                    Phase {step.phase}
                  </span>
                  {idx < roadmap.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden lg:block" />
                  )}
                </div>

                {/* Milestone Title */}
                <h4 className="font-mono text-xs font-bold text-ivory mb-1.5 leading-snug group-hover:text-white transition-colors">
                  {step.title}
                </h4>

                {/* Milestone 1-sentence explanation */}
                <p className="font-sans text-[11px] font-light text-ivory-300 leading-relaxed">
                  {step.sentence}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Visual Aid: Before vs. After Workflow Snapshot */}
      {beforeAfter && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Before */}
          <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 backdrop-blur-md shadow-lg space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-rose-300 font-semibold block">
              Legacy Baseline (Before)
            </span>
            <p className="font-sans text-xs text-rose-100 font-light leading-relaxed">
              {beforeAfter.before.value}
            </p>
          </div>

          {/* After */}
          <div className="p-5 rounded-2xl bg-emerald-950/25 border border-emerald-500/30 backdrop-blur-md shadow-lg space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Optimized State (After)</span>
            </div>
            <p className="font-sans text-xs text-emerald-100 font-light leading-relaxed">
              {beforeAfter.after.value}
            </p>
          </div>
        </div>
      )}

      {/* 5. The Covert STAR Narrative (Journalistic, Natural, Authoritative) */}
      {storyNarrative && (
        <div className="space-y-6">
          {/* Situation: Context & Institutional Scale */}
          {storyNarrative.context && (
            <div className="p-6 sm:p-7 rounded-3xl bg-navy-950/70 border border-white/5 backdrop-blur-lg shadow-xl space-y-2">
              <h3 className="font-serif text-lg font-bold text-ivory-100 flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-sapphire-light" />
                The Institutional Landscape & Friction
              </h3>
              <p className="font-sans text-sm text-ivory-200 leading-relaxed font-light pl-3.5">
                {storyNarrative.context}
              </p>
            </div>
          )}

          {/* Task: The Strategic Mandate */}
          {storyNarrative.mandate && (
            <div className="p-6 sm:p-7 rounded-3xl bg-navy-950/70 border border-white/5 backdrop-blur-lg shadow-xl space-y-2">
              <h3 className="font-serif text-lg font-bold text-ivory-100 flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-sky-400" />
                The Strategic Mandate
              </h3>
              <p className="font-sans text-sm text-ivory-200 leading-relaxed font-light pl-3.5">
                {storyNarrative.mandate}
              </p>
            </div>
          )}

          {/* Action: Systems Intervention & Execution Blueprint */}
          {storyNarrative.execution && (
            <div className="p-6 sm:p-7 rounded-3xl bg-navy-950/70 border border-white/5 backdrop-blur-lg shadow-xl space-y-2">
              <h3 className="font-serif text-lg font-bold text-ivory-100 flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-blue-500" />
                The Systems Intervention & Execution
              </h3>
              <p className="font-sans text-sm text-ivory-200 leading-relaxed font-light pl-3.5">
                {storyNarrative.execution}
              </p>
            </div>
          )}

          {/* Result: Commercial Impact & Lasting Value */}
          {storyNarrative.impact && (
            <div className="p-6 sm:p-7 rounded-3xl bg-navy-950/70 border border-white/5 backdrop-blur-lg shadow-xl space-y-2">
              <h3 className="font-serif text-lg font-bold text-ivory-100 flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-emerald-400" />
                Commercial Impact & Lasting Value
              </h3>
              <p className="font-sans text-sm text-ivory-200 leading-relaxed font-light pl-3.5">
                {storyNarrative.impact}
              </p>
            </div>
          )}
        </div>
      )}

      {/* 6. Visual Aid: Executive Pull Quote */}
      {pullQuote && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sapphire/15 via-navy-900/90 to-sapphire/10 border border-sapphire-light/30 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-2xl bg-sapphire/20 text-sapphire-light shrink-0">
              <Quote className="w-5 h-5 text-sapphire-glow" />
            </div>
            <div>
              <p className="font-serif text-base sm:text-lg italic text-ivory-100 leading-relaxed font-normal">
                "{pullQuote}"
              </p>
              <p className="mt-3 font-mono text-xs text-sapphire-light uppercase tracking-wider font-semibold">
                — Evin Strand • Strategic Operations Philosophy
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 7. Tags Footer */}
      {tags && tags.length > 0 && (
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
            <Tag className="w-3.5 h-3.5" />
            Core Disciplines:
          </span>
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-3 py-1 rounded-full bg-navy-950/80 border border-white/5 text-ivory-200 shadow-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
