import React, { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Printer } from 'lucide-react'
import NarrativeView from './NarrativeView'
import TacticalDiagram from './TacticalDiagram'
import DocumentDetailView from './DocumentDetailView'
import HoverLightButton from '../ui/HoverLightButton'

export default function DetailModal({ item, onClose }) {
  // ESC key listener to dismiss
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }, [onClose])

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

  const hasDiagram = Boolean((item.diagram && item.diagram.nodes && item.diagram.edges) || item.mindMap)
  const isDocument = item.itemType === 'document'

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop in Deep Navy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy-950/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window Container (Borderless) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative w-full max-w-7xl h-[92vh] max-h-[950px] bg-navy-900 rounded-[2.5rem] shadow-[0_25px_60px_rgba(2,6,17,0.95)] flex flex-col overflow-hidden z-10 text-ivory"
        >
          {/* Top Tactical Status Bar */}
          <div className="px-6 py-3.5 bg-navy-950/95 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-sapphire-glow animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-ivory font-semibold">
                Level 3 // {item.categoryBadge}
              </span>
              <span className="hidden sm:inline-block text-slate-500 font-mono text-xs">|</span>
              <span className="hidden sm:inline-block font-mono text-xs text-sapphire-light">
                ID: {item.id}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <HoverLightButton
                onClick={() => window.print()}
                variant="ghost"
                className="hidden md:flex px-3.5 py-1.5"
                title="Print this Dossier"
              >
                <Printer className="w-3.5 h-3.5 text-sapphire-light" />
                <span>Print Dossier</span>
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

          {/* Soft Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Modal Main Content Area (Scrollable on small screens, split-screen on desktop) */}
          <div className="flex-1 overflow-y-auto lg:overflow-hidden p-4 sm:p-6 lg:p-8 custom-scrollbar">
            {isDocument ? (
              /* Dedicated Document / History Viewer for Resume & Cover Letter */
              <div className="max-w-5xl mx-auto h-full overflow-hidden">
                <DocumentDetailView item={item} />
              </div>
            ) : hasDiagram ? (
              /* Split-Screen Dashboard: Left (Narrative) | Right (Interactive React Flow) */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-full lg:h-full">
                {/* Left Side: The Narrative (5 cols on lg) */}
                <div className="lg:col-span-5 max-h-[55vh] lg:max-h-none lg:h-full overflow-y-auto custom-scrollbar">
                  <NarrativeView item={item} isSingleColumn={false} />
                </div>

                {/* Right Side: The Tactical Diagram (7 cols on lg) */}
                <div className="lg:col-span-7 h-[380px] sm:h-[450px] lg:h-full overflow-hidden flex flex-col">
                  <TacticalDiagram diagramData={item.diagram} mindMap={item.mindMap} item={item} />
                </div>
              </div>
            ) : (
              /* Single-Column Editorial View for Crafts/Hobbies without Diagrams */
              <div className="max-w-4xl mx-auto h-full overflow-hidden flex flex-col justify-start">
                <div className="mb-6 flex justify-center">
                  <div className="h-44 w-full max-w-md rounded-2xl overflow-hidden bg-navy-950 flex items-center justify-center p-4 shadow-inner">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full object-contain filter drop-shadow-xl"
                    />
                  </div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <NarrativeView item={item} isSingleColumn={true} />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
