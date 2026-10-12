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
        {/* Card Visual Header / Image Graphic (Borderless) */}
        <div className="relative h-44 w-full overflow-hidden bg-navy-950 flex items-center justify-center p-4 shadow-inner">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(2,6,17,0.8)] transform group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />

          {/* Top badges overlay (Borderless Glassmorphism) */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
            <span
              className="text-[11px] font-mono uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-ivory shadow-md"
            >
              {item.categoryBadge}
            </span>

            {(item.diagram || item.mindMap) && (
              <span className="flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-sapphire-light">
                <GitBranch className="w-3 h-3 text-sapphire-glow" />
                <span>Interactive Map</span>
              </span>
            )}

            {item.itemType === 'document' && (
              <span className="flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-ivory">
                <FileText className="w-3 h-3 text-sapphire-light" />
                <span>Full Record</span>
              </span>
            )}

            {item.itemType === 'story' && (
              <span className="flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-sapphire-light">
                <BookOpen className="w-3 h-3 text-sapphire-glow" />
                <span>Executive Story</span>
              </span>
            )}
          </div>
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

          {/* Project Telemetry pills (Borderless) */}
          {item.telemetry && item.telemetry.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-2xl bg-navy-950/60 shadow-inner">
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
            <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-2xl bg-navy-950/60 shadow-inner">
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
