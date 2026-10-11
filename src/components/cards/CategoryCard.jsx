import React from 'react'
import { ArrowRight, Layers, FileText, Cpu } from 'lucide-react'
import BasReliefWrapper from './BasReliefWrapper'

const iconMap = {
  FileText: FileText,
  Layers: Layers,
  Cpu: Cpu
}

export default function CategoryCard({ category, onClick }) {
  const IconComponent = iconMap[category.icon] || Layers

  return (
    <BasReliefWrapper
      onClick={onClick}
      className="p-6 h-full flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Card Visual Thumbnail (Borderless) */}
        <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-navy-950 mb-5 shadow-inner">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover filter brightness-[0.96] contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />

          {/* Badges Overlay (Soft Glassmorphic, No Outlines) */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-navy-950/75 backdrop-blur-md text-ivory-50 shadow-md">
              {category.badge}
            </span>
            <span className="text-[11px] font-mono text-ivory-300 px-2.5 py-1 rounded-full bg-navy-950/75 backdrop-blur-md">
              {category.itemCount} Items
            </span>
          </div>
        </div>

        {/* Title & Description in Ivory */}
        <div className="px-1">
          <h3 className="text-xl sm:text-2xl font-bold font-sans text-ivory-50 group-hover:text-white transition-colors mb-1.5 leading-snug">
            {category.title}
          </h3>

          <p className="text-xs font-mono text-sapphire-glow mb-3">
            {category.subtitle}
          </p>

          <p className="text-ivory-200 text-sm font-sans font-light leading-relaxed mb-4 line-clamp-3">
            {category.description}
          </p>
        </div>
      </div>

      {/* Action Footer (Borderless, Clean Whitespace) */}
      <div className="px-1 pt-3 flex items-center justify-between text-xs font-mono text-ivory-300 group-hover:text-white transition-colors">
        <span className="text-slate-400">
          {category.featuredTag}
        </span>
        <div className="flex items-center gap-1.5 font-semibold text-ivory group-hover:text-sapphire-light">
          <span>View Dossier</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 text-sapphire-glow transition-transform" />
        </div>
      </div>
    </BasReliefWrapper>
  )
}
