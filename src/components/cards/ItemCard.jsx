import React from 'react'
import { ArrowUpRight, GitBranch, Calendar, Building2, FileText, BookOpen } from 'lucide-react'
import BasReliefWrapper from './BasReliefWrapper'

export default function ItemCard({ item, onClick }) {
  return (
    <BasReliefWrapper
      onClick={onClick}
      className="h-full flex flex-col justify-between overflow-hidden p-0"
    >
      <div>
        {/* Card Header Badges (Above image, eliminating any overlap with graphic headers) */}
        <div className="pt-4 px-5 pb-3 flex items-center justify-between border-b border-white/5 bg-navy-950/40">
          <span
            className="text-[11px] font-mono uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-navy-900/90 border border-white/10 text-ivory shadow-sm"
          >
            {item.categoryBadge}
          </span>

          {(item.diagram || item.mindMap) && (
            <span className="flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full bg-sapphire/20 border border-sapphire-light/30 text-sapphire-light">
              <GitBranch className="w-3 h-3 text-sapphire-glow" />
              <span>Interactive Map</span>
            </span>
          )}

          {item.itemType === 'document' && (
            <span className="flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-ivory">
              <FileText className="w-3 h-3 text-sapphire-light" />
              <span>Full Record</span>
            </span>
          )}

          {item.itemType === 'story' && (
            <span className="flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full bg-sapphire/20 border border-sapphire-light/30 text-sapphire-light font-medium">
              <BookOpen className="w-3 h-3 text-sapphire-glow" />
              <span>Official Story</span>
            </span>
          )}
        </div>

        {/* Card Visual Header / Image Graphic (Cinematic Full-Bleed Framing) */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-navy-950/90 flex items-center justify-center shadow-inner border-b border-white/5">
          {/* Subtle Ambient Radial Backlight */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500 z-10"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${item.accentColor || '#38bdf8'}40 0%, transparent 70%)`
            }}
          />
          {/* Subtle Bottom Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-70 z-10 pointer-events-none" />
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 relative"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        {/* Content Body */}
        <div className="p-6">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300 mb-2">
            <span className="flex items-center gap-1 text-sapphire-glow truncate max-w-[200px]">
              <Building2 className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{item.organization}</span>
            </span>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <Calendar className="w-3.5 h-3.5 shrink-0 text-slate-400" />
              {item.timeline}
            </span>
          </div>

          {/* Title in Serif font & Ivory */}
          <h4 className="font-serif text-xl font-bold text-ivory group-hover:text-white transition-colors mb-2 leading-snug">
            {item.title}
          </h4>

          {/* Role Subtitle */}
          <p className="text-xs font-mono font-medium text-sapphire-glow mb-3">
            {item.role}
          </p>

          {/* Teaser narrative */}
          <p className="text-ivory-200 text-sm leading-relaxed mb-4 line-clamp-3 font-sans font-light">
            {item.teaser}
          </p>

          {/* Single Tasteful Key Impact Badge for Stories */}
          {item.keyMetric && (
            <div className="mb-4 py-2 px-3 rounded-xl bg-sapphire/15 border border-sapphire-light/30 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300 text-[10px] uppercase tracking-wider font-medium">Verified Impact</span>
              <span className="font-bold text-sapphire-light text-xs truncate max-w-[200px]">{item.keyMetric}</span>
            </div>
          )}

          {/* Project Telemetry pills (Borderless) */}
          {item.telemetry && item.telemetry.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-2xl bg-navy-950/40 border border-white/5 shadow-inner">
              {item.telemetry.slice(0, 2).map((tel, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                    {tel.label}
                  </span>
                  <span className="text-sm font-mono font-bold text-ivory">
                    {tel.prefix}{tel.value}{tel.suffix}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Hobby Technical Specs pills (Borderless) */}
          {item.specs && item.specs.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-2xl bg-navy-950/40 border border-white/5 shadow-inner">
              {item.specs.slice(0, 2).map((sp, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                    {sp.label}
                  </span>
                  <span className="text-xs font-mono font-bold text-sapphire-light truncate">
                    {sp.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {item.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-navy-950/70 text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer (Borderless, Clean Spacing) */}
      <div className="p-6 pt-0">
        <div className="pt-3 flex items-center justify-between text-xs font-mono font-semibold text-ivory group-hover:text-sapphire-light">
          <span>View Detailed Dossier [L3]</span>
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 text-sapphire-glow transition-transform" />
        </div>
      </div>
    </BasReliefWrapper>
  )
}
