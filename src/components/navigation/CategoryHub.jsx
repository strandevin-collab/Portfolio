import React from 'react'
import { motion } from 'framer-motion'
import { usePortfolio } from '../../context/PortfolioContext'
import CinematicCover from '../hero/CinematicCover'
import HeroSection from '../hero/HeroSection'
import CategoryCard from '../cards/CategoryCard'
import HoverLightButton from '../ui/HoverLightButton'
import { Sparkles, ArrowRight, ShieldCheck, Database, Zap, Clock } from 'lucide-react'

export default function CategoryHub() {
  const { categories, goToCategory } = usePortfolio()

  const tickerPills = [
    { icon: Database, label: "$148M Enterprise Scope" },
    { icon: ShieldCheck, label: "100% Tactical Precision" },
    { icon: Clock, label: "60-Day Onboarding Gain" },
    { icon: Zap, label: "40% AI Task Compression" }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full relative z-10 space-y-8"
    >
      {/* 1. Cinematic Architectural Cover Screen (100vh Entrance, Full-Bleed) */}
      <section className="w-full">
        <CinematicCover />
      </section>

      {/* 2. Portfolio Overview & Deeper Briefing (Smooth Scroll Target) */}
      <div id="portfolio-overview" className="scroll-mt-8 space-y-8">
        
        {/* Transition Ticker Strip in Deep Navy & Ivory (Borderless) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3 px-6 rounded-full bg-navy-900/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-ivory-200 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-2 text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-sapphire-glow" />
              <span className="uppercase tracking-wider text-[10px]">Verified Operational Telemetry:</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              {tickerPills.map((pill, idx) => {
                const Icon = pill.icon
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5 text-sapphire-light" />
                    <span className="text-ivory-100">{pill.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Executive Portrait, Bio & Credentials Hero Section */}
        <HeroSection />

        {/* 3. "Behind the Systems" Split Header & 3 Detailed Domain Gallery Cards */}
        <section id="core-domains-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
          
          {/* Split Header matching the editorial reference image (Borderless) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 pb-8">
            {/* Left Column: Kicker & Headline in Ivory */}
            <div className="lg:col-span-6 space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sapphire-glow block">
                Behind the Systems
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ivory-50 font-sans leading-tight">
                Shaping Systems That Make Scale Simpler
              </h2>
            </div>

            {/* Right Column: Statement & Action Pill in Ivory */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <p className="text-sm font-sans text-ivory-200 leading-relaxed font-light max-w-md">
                A Product Information Analyst and systems orchestrator focused on eliminating operational friction, automating supplier taxonomy, and building resilient team architectures.
              </p>

              <HoverLightButton
                onClick={() => goToCategory('projects')}
                variant="navy"
                className="px-4 py-2 shrink-0"
              >
                <span>Explore Projects</span>
                <span className="w-5 h-5 rounded-full bg-ivory text-navy-950 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3 h-3 text-navy-950" />
                </span>
              </HoverLightButton>
            </div>
          </div>

          {/* Soft Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

          {/* The 3 Major Tiles in a 3-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
        </section>
      </div>
    </motion.div>
  )
}
