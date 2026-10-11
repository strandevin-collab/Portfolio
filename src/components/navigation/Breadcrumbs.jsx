import React from 'react'
import { ChevronRight, Home, ArrowLeft } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import HoverLightButton from '../ui/HoverLightButton'

export default function Breadcrumbs() {
  const {
    activeLevel,
    selectedCategory,
    selectedItem,
    goBackToHub,
    closeItemModal
  } = usePortfolio()

  if (activeLevel === 1) return null

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 z-20 relative no-print">
      <div className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-navy-900/85 backdrop-blur-md shadow-xl">
        {/* Navigation Breadcrumb Path */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={goBackToHub}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-slate-300 hover:text-white hover:bg-navy-950/60 transition-all hover:shadow-[0_0_12px_rgba(56,189,248,0.25)]"
          >
            <Home className="w-3.5 h-3.5 text-sapphire-light" />
            <span>Main Hub</span>
          </button>

          {selectedCategory && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <button
                onClick={() => {
                  closeItemModal()
                }}
                className={`px-2.5 py-1 rounded-full transition-all hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] ${
                  activeLevel === 2
                    ? 'text-ivory font-bold bg-navy-950/40'
                    : 'text-slate-300 hover:text-white hover:bg-navy-950/60'
                }`}
              >
                {selectedCategory.title}
              </button>
            </>
          )}

          {selectedItem && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-sapphire-glow font-semibold truncate max-w-[200px] sm:max-w-md px-2.5 py-1">
                {selectedItem.title}
              </span>
            </>
          )}
        </div>

        {/* Back Action Button */}
        <HoverLightButton
          onClick={() => {
            if (activeLevel === 3) {
              closeItemModal()
            } else {
              goBackToHub()
            }
          }}
          variant="navy"
          className="px-3.5 py-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-sapphire-light" />
          <span>{activeLevel === 3 ? 'Back to Sub-Items' : 'Back to Hub'}</span>
        </HoverLightButton>
      </div>
    </div>
  )
}
