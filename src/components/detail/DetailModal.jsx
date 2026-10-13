import React, { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Printer, ChevronLeft, ChevronRight } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import DocumentDetailView from './DocumentDetailView'
import StoryDetailView from './StoryDetailView'
import HoverLightButton from '../ui/HoverLightButton'

export default function DetailModal({ item, onClose }) {
  const {
    categoryItems,
    currentItemIndex,
    goToNextItem,
    goToPrevItem
  } = usePortfolio()

  // ESC and Arrow keys listener
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowRight') {
      goToNextItem()
    } else if (e.key === 'ArrowLeft') {
      goToPrevItem()
    }
  }, [onClose, goToNextItem, goToPrevItem])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden' // Lock background scroll
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = prevOverflow || 'unset'
    }
  }, [handleKeyDown])

  if (!item) return null

  const isDocument = item.itemType === 'document'

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop in Soft Transparent Navy (Allows Rich Misty Forest & Trees to Bleed Through) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy-950/25 backdrop-blur-[2px] transition-opacity"
        />

        {/* Modal Window Container (Luminous Crystal Frosted Glass with Direct Tree Visibility) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative w-full max-w-[1550px] 2xl:max-w-[1650px] h-[92vh] max-h-[960px] bg-slate-950/30 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.22),0_0_80px_rgba(56,189,248,0.08)] flex flex-col overflow-hidden z-10 text-ivory"
        >
          {/* Top Editorial Status Bar (Luminous Frosted Glass with Seamless Pager) */}
          <div className="px-5 sm:px-8 py-3.5 bg-slate-950/20 backdrop-blur-md flex items-center justify-between select-none">
            {/* Left: Breadcrumb / Category indicator */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-sapphire-glow shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              <span className="font-mono text-xs uppercase tracking-wider text-ivory font-semibold">
                {item.categoryBadge || 'Archive Record'}
              </span>
              <span className="hidden sm:inline-block text-slate-500 font-mono text-xs">/</span>
              <span className="hidden md:inline-block font-sans text-xs text-sapphire-light font-light truncate max-w-[240px]">
                {item.title}
              </span>
            </div>

            {/* Center: In-Modal Carousel / Pager Controls (Prev / Next Item) */}
            {categoryItems && categoryItems.length > 1 && (
              <div className="flex items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 rounded-full px-2 sm:px-3 py-1 text-xs font-mono shadow-sm">
                <button
                  onClick={goToPrevItem}
                  title="Previous record (Arrow Left)"
                  className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4 text-sapphire-light" />
                  <span className="hidden lg:inline text-[11px] text-slate-400">Prev</span>
                </button>

                <span className="text-[11px] text-ivory-100 font-medium px-1">
                  <span className="text-sapphire-light font-bold">{currentItemIndex + 1}</span>
                  <span className="text-slate-500"> / </span>
                  <span>{categoryItems.length}</span>
                </span>

                <button
                  onClick={goToNextItem}
                  title="Next record (Arrow Right)"
                  className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span className="hidden lg:inline text-[11px] text-slate-400">Next</span>
                  <ChevronRight className="w-4 h-4 text-sapphire-light" />
                </button>
              </div>
            )}

            {/* Right: Print & Close Buttons */}
            <div className="flex items-center gap-2">
              <HoverLightButton
                onClick={() => window.print()}
                variant="ghost"
                className="hidden md:flex px-3 py-1.5 text-xs"
                title="Print this Dossier"
              >
                <Printer className="w-3.5 h-3.5 text-sapphire-light" />
                <span>Print</span>
              </HoverLightButton>

              <HoverLightButton
                onClick={onClose}
                variant="ghost"
                className="p-2"
                aria-label="Close dossier"
              >
                <X className="w-5 h-5" />
              </HoverLightButton>
            </div>
          </div>

          {/* Soft Floating Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Modal Main Content Area (Silky Smooth GPU Scrolling, Borderless Floating Glass) */}
          <div className="flex-1 p-4 sm:p-6 lg:p-8 custom-scrollbar overflow-y-auto overscroll-contain transform-gpu will-change-scroll scroll-smooth">
            {isDocument ? (
              /* Dedicated Document / History Viewer for Resume, Cover Letter, & Defense Service */
              <div className="w-full h-full">
                <DocumentDetailView item={item} />
              </div>
            ) : (
              /* Unified Elevated Panoramic Spread for Stories, AI Systems, and Engineering Crafts */
              <div className="w-full min-h-full flex flex-col justify-start">
                <StoryDetailView item={item} />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
