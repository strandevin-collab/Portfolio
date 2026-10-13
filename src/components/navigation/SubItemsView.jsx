import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import ItemCard from '../cards/ItemCard'
import HoverLightButton from '../ui/HoverLightButton'

export default function SubItemsView() {
  const {
    selectedCategory,
    categoryItems,
    goToItem,
    goBackToHub,
    nextCategory,
    goToNextCategory
  } = usePortfolio()

  if (!selectedCategory) return null

  const displayedItems = categoryItems

  return (
    <motion.section
      key={selectedCategory.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10 relative"
    >
      {/* Category Dossier Header in Frosted Glass (Luminous & Translucent) */}
      <div className="mb-8 p-6 sm:p-8 rounded-[2.5rem] bg-slate-950/35 border border-white/20 shadow-[0_20px_50px_rgba(2,6,17,0.6),inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-mono font-semibold px-3 py-1 rounded-full bg-sapphire/20 border border-sapphire-light/30 text-ivory shadow-sm">
              Archive // {selectedCategory.badge}
            </span>
            <span className="text-xs font-mono text-slate-300">
              {displayedItems.length} of {categoryItems.length} {
                selectedCategory.id === 'resume-docs'
                  ? 'Official Records'
                  : selectedCategory.id === 'hobbies'
                  ? 'Crafts & Interests'
                  : selectedCategory.id === 'ai-projects'
                  ? 'Interactive Systems'
                  : 'Official Stories'
              }
            </span>
          </div>

          <HoverLightButton
            onClick={goBackToHub}
            variant="navy"
            className="px-4 py-2 border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-sapphire-light" />
            <span>Return to Hub</span>
          </HoverLightButton>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory-50 mb-2">
          {selectedCategory.title}
        </h2>

        <p className="font-mono text-sm text-sapphire-glow mb-4">
          {selectedCategory.subtitle}
        </p>

        <p className="font-sans text-ivory-200 text-base max-w-3xl leading-relaxed font-light">
          {selectedCategory.description}
        </p>

        {/* Prominent Under Construction / Active In-Progress Callout Banner */}
        {selectedCategory.id === 'ai-projects' && (
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-400/30 backdrop-blur-md flex items-start gap-3.5 shadow-lg">
            <span className="w-3 h-3 rounded-full bg-amber-400 animate-ping mt-1 shrink-0 shadow-[0_0_10px_#f59e0b]" />
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
                  Active In-Progress Multi-Agent Engineering // Under Continuous Construction
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-200 border border-amber-300/30">
                  Sprint Cadence Live
                </span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-ivory-100 font-light leading-relaxed">
                These engineering systems are actively under continuous development and not final static releases. Orchestrated by autonomous multi-agent engineering swarms, each project is receiving ongoing sprint commits, mathematical solver calibration, and real-time interactive topology refinements.
              </p>
            </div>
          </div>
        )}
      </div>



      {/* Grid of Item Cards (Borderless with Blue & White hover beam) */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displayedItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
            >
              <ItemCard
                item={item}
                onClick={() => goToItem(item.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Category-to-Category Navigation Progression Bar */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 select-none">
        <HoverLightButton
          onClick={goBackToHub}
          variant="ghost"
          className="px-4 py-2 border border-white/10 text-xs font-mono"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-sapphire-light" />
          <span>Return to Executive Overview</span>
        </HoverLightButton>

        {nextCategory && (
          <button
            onClick={goToNextCategory}
            className="group flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-900/40 hover:bg-slate-900/70 backdrop-blur-xl border border-white/15 hover:border-sapphire-light/50 transition-all duration-300 shadow-xl cursor-pointer"
          >
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest group-hover:text-sapphire-light transition-colors">
                Explore Next Domain
              </span>
              <span className="text-sm font-sans font-bold text-ivory group-hover:text-white transition-colors">
                {nextCategory.title} — {nextCategory.badge}
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-sapphire/20 border border-sapphire-light/40 flex items-center justify-center text-sapphire-light group-hover:bg-sapphire group-hover:text-white transition-all shadow-sm">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        )}
      </div>
    </motion.section>
  )
}
