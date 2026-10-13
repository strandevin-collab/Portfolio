import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { usePortfolio } from '../../context/PortfolioContext'
import CinematicCover from '../hero/CinematicCover'
import HeroSection from '../hero/HeroSection'
import CategoryCard from '../cards/CategoryCard'
import HoverLightButton from '../ui/HoverLightButton'
import { Sparkles, ArrowRight, ArrowUp, Database, Zap, Clock, Users } from 'lucide-react'

export default function CategoryHub() {
  const { categories, goToCategory } = usePortfolio()
  const [activeTooltip, setActiveTooltip] = useState(null)
  const [activeSceneIndex, setActiveSceneIndex] = useState(0)
  const isTransitioningRef = useRef(false)

  const scenes = [
    { id: 'scene-cover', number: '01', label: 'COVER' },
    { id: 'scene-profile', number: '02', label: 'PROFILE' },
    { id: 'scene-domains', number: '03', label: 'DOMAINS' }
  ]

  const goToScene = (index) => {
    if (index >= 0 && index < scenes.length) {
      setActiveSceneIndex(index)
    }
  }

  // Intercept wheel and touch gestures to enforce strict, discrete 1-scene transitions (NO free scrolling!)
  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) < 18) return
      if (isTransitioningRef.current) {
        e.preventDefault()
        return
      }

      if (e.deltaY > 0) {
        // Rolling down -> Next scene
        if (activeSceneIndex < scenes.length - 1) {
          e.preventDefault()
          isTransitioningRef.current = true
          setActiveSceneIndex(prev => Math.min(prev + 1, scenes.length - 1))
          setTimeout(() => { isTransitioningRef.current = false }, 800)
        }
      } else {
        // Rolling up -> Previous scene
        if (activeSceneIndex > 0) {
          e.preventDefault()
          isTransitioningRef.current = true
          setActiveSceneIndex(prev => Math.max(prev - 1, 0))
          setTimeout(() => { isTransitioningRef.current = false }, 800)
        }
      }
    }

    // Touch swipe support (discrete swipe to next/prev scene)
    let touchStartY = 0
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY
    }
    const handleTouchEnd = (e) => {
      if (isTransitioningRef.current) return
      const deltaY = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(deltaY) > 40) {
        if (deltaY > 0 && activeSceneIndex < scenes.length - 1) {
          isTransitioningRef.current = true
          setActiveSceneIndex(prev => prev + 1)
          setTimeout(() => { isTransitioningRef.current = false }, 800)
        } else if (deltaY < 0 && activeSceneIndex > 0) {
          isTransitioningRef.current = true
          setActiveSceneIndex(prev => prev - 1)
          setTimeout(() => { isTransitioningRef.current = false }, 800)
        }
      }
    }

    // Keyboard ArrowDown / ArrowUp / PageDown / PageUp
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        if (activeSceneIndex < scenes.length - 1) {
          e.preventDefault()
          goToScene(activeSceneIndex + 1)
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (activeSceneIndex > 0) {
          e.preventDefault()
          goToScene(activeSceneIndex - 1)
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    // Lock page body overflow so native scrollbar is hidden and free scrolling is completely disabled
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [activeSceneIndex])

  const tickerPills = [
    {
      id: "leadership",
      icon: Users,
      label: "Resilient Team Leadership",
      badge: "Culture & Retention",
      context: "Cultivating high-trust, autonomous operational units with psychological safety, structured mentorship, and cross-functional alignment."
    },
    {
      id: "catalog",
      icon: Database,
      label: "$148M Catalog Scope",
      badge: "Enterprise Scale",
      context: "Stewarding enterprise product master data, governance rules, and taxonomies across high-velocity multi-million dollar distribution portfolios."
    },
    {
      id: "onboarding",
      icon: Clock,
      label: "60-Day Onboarding Gain",
      badge: "Process Velocity",
      context: "Compressed traditional 90-day analyst ramp-up to under 30 days by engineering structured standard operating playbooks and automated job aids."
    },
    {
      id: "efficiency",
      icon: Zap,
      label: "40% AI Efficiency Gain",
      badge: "Continuous Improvement",
      context: "Automating repetitive data reconciliation and catalog taxonomy research using modern LLM prompt engineering, eliminating hours of manual triage."
    }
  ]

  return (
    <div className="h-screen w-full overflow-hidden relative z-10 select-none">
      {/* Floating Vertical Scene Indicator on Right Edge (Minimalist Hairline Track) */}
      <nav
        aria-label="Scene Navigation"
        className="fixed right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-5 select-none"
      >
        {/* Hairline connecting track */}
        <div className="absolute right-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent -z-10" />

        {scenes.map((scene, idx) => {
          const isActive = activeSceneIndex === idx
          return (
            <button
              key={scene.id}
              onClick={() => goToScene(idx)}
              className="flex items-center gap-3 group text-right focus:outline-none cursor-pointer"
              title={`Glide to ${scene.label}`}
            >
              {/* Text label: always visible when active, revealed on hover when inactive */}
              <span
                className={`font-mono text-[10px] tracking-[0.25em] transition-all duration-300 ${
                  isActive
                    ? 'text-sapphire-light font-bold opacity-100 translate-x-0'
                    : 'text-slate-400 opacity-40 group-hover:opacity-100 group-hover:text-ivory-100 translate-x-1 group-hover:translate-x-0'
                }`}
              >
                {scene.number} // {scene.label}
              </span>

              {/* Indicator Dot / Radiant Sapphire Pill */}
              <div className="relative flex items-center justify-center w-3 h-3">
                {isActive ? (
                  <>
                    <span className="absolute inset-0 rounded-full bg-sapphire-glow/40 animate-ping" />
                    <span className="w-2.5 h-2.5 rounded-full bg-sapphire-glow shadow-[0_0_12px_rgba(56,189,248,1),0_0_4px_#fff] ring-2 ring-sapphire-light/50" />
                  </>
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500/60 group-hover:bg-ivory-100 group-hover:scale-125 transition-all duration-200" />
                )}
              </div>
            </button>
          )
        })}
      </nav>

      {/* Kinetic 3-Scene Viewport Slider (Zero Free Scrolling, 100% Centered) */}
      <motion.div
        animate={{ y: `-${activeSceneIndex * 100}vh` }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full will-change-transform"
      >
        {/* Scene 1: Cinematic Cover (100% Centered) */}
        <section id="scene-cover" className="w-full h-screen overflow-hidden flex flex-col justify-between">
          <CinematicCover onExplore={() => goToScene(1)} />
        </section>

        {/* Scene 2: Executive Profile & Dossier (100% Centered) */}
        <section id="scene-profile" className="w-full h-screen overflow-hidden flex flex-col justify-center items-center py-4 sm:py-6 space-y-3">
          {/* Transition Ticker Strip in Deep Navy & Ivory with Interactive Telemetry Tooltips */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="py-2.5 px-6 rounded-full bg-navy-900/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-ivory-200 backdrop-blur-md shadow-xl relative">
              <div className="flex items-center gap-2 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-sapphire-glow" />
                <span className="uppercase tracking-wider text-[10px]">Verified Operational Telemetry:</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                {tickerPills.map((pill, idx) => {
                  const Icon = pill.icon
                  const isActive = activeTooltip === idx

                  return (
                    <div
                      key={pill.id}
                      className="relative"
                      onMouseEnter={() => setActiveTooltip(idx)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      onClick={() => setActiveTooltip(isActive ? null : idx)}
                    >
                      <div className="flex items-center gap-2 cursor-pointer group py-1">
                        <Icon className="w-3.5 h-3.5 text-sapphire-light group-hover:text-sapphire-glow group-hover:scale-110 transition-all duration-200" />
                        <span className="text-ivory-100 group-hover:text-white group-hover:underline underline-offset-4 decoration-sapphire-light/50 transition-colors">
                          {pill.label}
                        </span>
                      </div>

                      {/* Interactive Telemetry Tooltip Popover */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 sm:w-80 p-3.5 rounded-2xl bg-navy-950/95 backdrop-blur-xl border border-sapphire-light/30 shadow-[0_15px_35px_rgba(2,6,17,0.95),0_0_20px_rgba(56,189,248,0.2)] text-left z-50 pointer-events-none"
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5 pb-1.5 border-b border-white/10">
                            <div className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-sapphire-glow animate-pulse" />
                              <span className="text-[10px] font-mono uppercase tracking-widest text-sapphire-light font-semibold">
                                {pill.badge}
                              </span>
                            </div>
                            <span className="text-[9px] font-mono text-slate-400">Telemetry Context</span>
                          </div>

                          <p className="text-[11px] font-sans text-ivory-100 leading-relaxed font-light">
                            {pill.context}
                          </p>

                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-2.5 h-2.5 bg-navy-950 border-r border-b border-sapphire-light/30 transform rotate-45" />
                        </motion.div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Executive Portrait, Bio & Credentials Hero Section */}
          <HeroSection onExplore={() => goToScene(2)} />
        </section>

        {/* Scene 3: "Behind the Systems" 4 Detailed Domain Gallery Cards (100% Centered) */}
        <section id="scene-domains" className="w-full h-screen overflow-hidden flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Split Header matching the editorial reference image (Borderless) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-6 pb-4">
            {/* Left Column: Kicker & Headline in Ivory */}
            <div className="lg:col-span-6 space-y-1.5">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sapphire-glow block">
                Leadership, People & Systems
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ivory-50 font-sans leading-tight">
                Empowering Teams Through Resilient Process & Modern Tools
              </h2>
            </div>

            {/* Right Column: Statement & Action Pill in Ivory */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <p className="text-xs sm:text-sm font-sans text-ivory-200 leading-relaxed font-light max-w-md">
                Dedicated to developing people, creating supportive team cultures, and discovering new tools and resilient processes that eliminate operational friction and unleash team potential.
              </p>

              <HoverLightButton
                onClick={() => goToCategory('stories')}
                variant="navy"
                className="px-4 py-2 shrink-0"
              >
                <span>Explore Stories</span>
                <span className="w-5 h-5 rounded-full bg-ivory text-navy-950 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3 h-3 text-navy-950" />
                </span>
              </HoverLightButton>
            </div>
          </div>

          {/* Soft Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          {/* The 4 Major Domain Tiles in a 4-Column Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.35 }}
              >
                <CategoryCard
                  category={category}
                  onClick={() => goToCategory(category.id)}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom Return to Cover Smooth Action */}
          <div className="mt-6 flex justify-center">
            <HoverLightButton
              onClick={() => goToScene(0)}
              variant="ghost"
              className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-ivory border border-white/10 hover:border-sapphire-light/40"
            >
              <ArrowUp className="w-3.5 h-3.5 text-sapphire-light" />
              <span>Return to Cover</span>
            </HoverLightButton>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
