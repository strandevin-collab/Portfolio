import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePortfolio } from './context/PortfolioContext'
import StaticRainForestBackground from './components/background/StaticRainForestBackground'
import Breadcrumbs from './components/navigation/Breadcrumbs'
import CategoryHub from './components/navigation/CategoryHub'
import SubItemsView from './components/navigation/SubItemsView'
import DetailModal from './components/detail/DetailModal'
import ContactModal from './components/navigation/ContactModal'
import PrintDossier from './components/print/PrintDossier'
import HoverLightButton from './components/ui/HoverLightButton'
import { Printer, Mail } from 'lucide-react'

export default function App() {
  const {
    activeLevel,
    selectedItem,
    closeItemModal,
    setContactModalOpen,
    goBackToHub,
    profile,
    goToItem
  } = usePortfolio()

  return (
    <div className="min-h-screen bg-navy-950 text-ivory flex flex-col relative selection:bg-sapphire selection:text-white">
      {/* Serene Static Misty Rain Forest Background (Faded Out Atmosphere) */}
      <StaticRainForestBackground />

      {/* Screen view content */}
      <div className="no-print relative z-10 flex flex-col min-h-screen">
        {/* Sleek Top Navigation Bar (Visible on Level 2/3, Borderless) */}
        {activeLevel >= 2 && (
          <header className="sticky top-0 z-30 w-full backdrop-blur-xl bg-navy-950/85 shadow-lg transition-all duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              {/* Logo / Brand Header */}
              <button
                onClick={goBackToHub}
                className="flex items-center gap-3 text-left group transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-navy-900 flex items-center justify-center text-ivory font-mono font-bold text-xs shadow-md group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all">
                  ES
                </div>
                <div>
                  <span className="font-serif font-bold text-base sm:text-lg text-ivory group-hover:text-sapphire-light transition-colors">
                    {profile.name}
                  </span>
                  <span className="hidden sm:inline-block font-mono text-[10px] text-sapphire-glow ml-2 uppercase tracking-widest">
                    Portfolio Dossier
                  </span>
                </div>
              </button>

              {/* Level Indicator & Quick Actions */}
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 text-xs font-mono shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-sapphire-glow animate-pulse" />
                  <span className="text-slate-400">Status:</span>
                  <span className="text-ivory font-semibold">
                    {activeLevel === 2 ? 'Sub-Grid [L2]' : 'Detail Modal [L3]'}
                  </span>
                </div>

                <HoverLightButton
                  onClick={() => window.print()}
                  variant="ghost"
                  className="hidden sm:inline-flex px-3.5 py-1.5"
                  title="Print Executive 1-Pager Dossier"
                >
                  <Printer className="w-3.5 h-3.5 text-sapphire-light" />
                  <span>1-Pager (PDF)</span>
                </HoverLightButton>

                <HoverLightButton
                  onClick={() => setContactModalOpen(true)}
                  variant="navy"
                  className="px-3.5 py-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-sapphire-glow" />
                  <span>Contact</span>
                </HoverLightButton>
              </div>
            </div>
            {/* Soft borderless divider line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </header>
        )}

        {/* Level 2 Breadcrumb Trail */}
        <Breadcrumbs />

        {/* Main 3-Tier SPA View Container */}
        <main className="flex-1 w-full relative">
          {activeLevel === 1 && (
            <CategoryHub key="level-1-hub" />
          )}

          {activeLevel >= 2 && (
            <SubItemsView key="level-2-subitems" />
          )}
        </main>

        {/* Level 3: Detail Modal (Mounted when an item is selected) */}
        <AnimatePresence>
          {selectedItem && (
            <DetailModal
              key={selectedItem.id}
              item={selectedItem}
              onClose={closeItemModal}
            />
          )}
        </AnimatePresence>

        {/* Direct Contact Modal */}
        <ContactModal />

        {/* Site Footer (Borderless) */}
        <footer className="mt-auto bg-navy-950/90 py-8 px-4 sm:px-6 lg:px-8 text-center text-xs font-mono text-slate-400 relative z-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 max-w-7xl mx-auto" />
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              © {new Date().getFullYear()} {profile.name} • Portfolio Dossier in Deep Blue & Ivory
            </p>
            <div className="flex items-center gap-4 text-slate-300">
              <button
                onClick={() => goToItem('curriculum-vitae')}
                className="hover:text-ivory transition-colors"
              >
                Resume Dossier
              </button>
              <span>•</span>
              <button
                onClick={() => goToItem('executive-cover-letter')}
                className="hover:text-ivory transition-colors"
              >
                Cover Letter
              </button>
              <span>•</span>
              <button
                onClick={() => setContactModalOpen(true)}
                className="hover:text-ivory transition-colors"
              >
                Contact Info
              </button>
            </div>
          </div>
        </footer>
      </div>

      {/* Clean Document Print Dossier (Visible ONLY during print/PDF export) */}
      <PrintDossier />
    </div>
  )
}
