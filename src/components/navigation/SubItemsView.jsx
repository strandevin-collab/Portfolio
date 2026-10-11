import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Sparkles, Filter } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import ItemCard from '../cards/ItemCard'
import HoverLightButton from '../ui/HoverLightButton'

export default function SubItemsView() {
  const {
    selectedCategory,
    categoryItems,
    goToItem,
    goBackToHub
  } = usePortfolio()

  const [activeFilter, setActiveFilter] = useState('all')

  // Reset filter when navigating to another category
  useEffect(() => {
    setActiveFilter('all')
  }, [selectedCategory?.id])

  if (!selectedCategory) return null

  // Project Domain Filters
  const isProjects = selectedCategory.id === 'projects'
  const filterTabs = isProjects ? [
    { id: 'all', label: 'All Projects', count: categoryItems.length },
    { id: 'data-ai', label: 'Data & AI', count: categoryItems.filter(i => i.domain === 'data-ai').length },
    { id: 'talent-retention', label: 'Talent & Retention', count: categoryItems.filter(i => i.domain === 'talent-retention').length },
    { id: 'operations', label: 'Operations & Leadership', count: categoryItems.filter(i => i.domain === 'operations').length }
  ] : []

  const displayedItems = isProjects && activeFilter !== 'all'
    ? categoryItems.filter(i => i.domain === activeFilter)
    : categoryItems

  return (
    <motion.section
      key={selectedCategory.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10 relative"
    >
      {/* Category Dossier Header in Deep Navy & Ivory (Borderless) */}
      <div className="mb-8 p-6 sm:p-8 rounded-[2.5rem] bg-navy-900/90 shadow-2xl backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-mono font-semibold px-3 py-1 rounded-full bg-sapphire/20 text-ivory shadow-sm">
              Level 2 // {selectedCategory.badge}
            </span>
            <span className="text-xs font-mono text-slate-300">
              {displayedItems.length} of {categoryItems.length} {selectedCategory.id === 'resume-docs' ? 'Official Records' : selectedCategory.id === 'hobbies' ? 'Crafts & Interests' : 'Case Studies'}
            </span>
          </div>

          <HoverLightButton
            onClick={goBackToHub}
            variant="navy"
            className="px-4 py-2"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-sapphire-light" />
            <span>Return to Hub</span>
          </HoverLightButton>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory mb-2">
          {selectedCategory.title}
        </h2>

        <p className="font-mono text-sm text-sapphire-glow mb-4">
          {selectedCategory.subtitle}
        </p>

        <p className="font-sans text-ivory-200 text-base max-w-3xl leading-relaxed font-light">
          {selectedCategory.description}
        </p>
      </div>

      {/* Filter Tabs for Projects (Borderless Frosted Pills) */}
      {isProjects && (
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-navy-950/70 backdrop-blur-md border border-white/5 shadow-xl w-fit">
          {filterTabs.map(tab => {
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 flex items-center gap-2 select-none ${
                  isActive
                    ? 'text-ivory bg-sapphire/25 shadow-[0_0_20px_rgba(56,189,248,0.3)] border border-sapphire-light/40'
                    : 'text-slate-400 hover:text-ivory hover:bg-white/5'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                    isActive
                      ? 'bg-sapphire-light text-navy-950 shadow-sm'
                      : 'bg-navy-900 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>
      )}

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
    </motion.section>
  )
}
