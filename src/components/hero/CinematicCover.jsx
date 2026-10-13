import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Mail } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import HoverLightButton from '../ui/HoverLightButton'

export default function CinematicCover({ onExplore }) {
  const { profile, goToCategory, setContactModalOpen } = usePortfolio()

  const pillars = [
    {
      id: 'resume-docs',
      number: '01',
      title: 'Resume',
      subtitle: 'Leadership & Dossier'
    },
    {
      id: 'stories',
      number: '02',
      title: 'Stories',
      subtitle: 'Team Enablement'
    },
    {
      id: 'ai-projects',
      number: '03',
      title: 'AI Projects',
      subtitle: 'Autonomous Swarms'
    },
    {
      id: 'hobbies',
      number: '04',
      title: 'Hobbies',
      subtitle: 'Discipline & Craft'
    }
  ]

  const scrollToOverview = () => {
    if (onExplore) {
      onExplore()
      return
    }
    const el = document.getElementById('scene-profile') || document.getElementById('portfolio-overview')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Framer Motion: Mist Condensation Stagger Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.4
      }
    }
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 16,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-8 sm:py-12 text-ivory select-none overflow-hidden">
      
      {/* 1. Top Minimalist Baseline */}
      <div className="flex items-center justify-between relative z-20 w-full pt-2">
        {/* Left: Minimal Monogram & Name */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.25em] font-semibold text-ivory-50">
            EVIN STRAND
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          <span className="hidden sm:inline-block font-mono text-[10px] text-slate-400 tracking-widest uppercase">
            // PORTFOLIO DOSSIER
          </span>
        </div>

        {/* Right: Contact Info Button (Replaced Liaison) */}
        <div className="flex items-center gap-3">
          <HoverLightButton
            onClick={() => setContactModalOpen(true)}
            variant="ghost"
            className="px-4 py-2"
          >
            <span>Contact Info</span>
            <span className="w-4 h-4 rounded-full bg-ivory text-navy-950 flex items-center justify-center shadow-sm">
              <Mail className="w-2.5 h-2.5 text-navy-950" />
            </span>
          </HoverLightButton>
        </div>
      </div>

      {/* 2. Centerpiece: The Mist Reveal & Word Contrast Headline */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4 max-w-5xl mx-auto py-12">
        
        {/* Kicker Label in Quiet Ivory / Slate (NOT Blue) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="text-[11px] sm:text-xs font-mono font-medium uppercase tracking-[0.32em] text-ivory-300">
            Resilient Teams • Continuous Improvement • Modern AI Tools
          </span>
        </motion.div>

        {/* The Headline: "Great ideas start with people." with Stagger Mist Reveal & Word Accent */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-sans font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory-50 tracking-tight leading-[1.08] drop-shadow-[0_15px_35px_rgba(2,6,17,0.95)] max-w-4xl flex flex-wrap justify-center gap-x-3 sm:gap-x-5 gap-y-1"
        >
          {['Great', 'ideas', 'start', 'with'].map((word, i) => (
            <motion.span key={i} variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          ))}
          {/* "people." with vivid luminous electric sky/sapphire glow */}
          <motion.span
            variants={wordVariants}
            className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-sky-100 via-sky-300 to-sapphire-light drop-shadow-[0_0_28px_rgba(56,189,248,0.7)] font-extrabold"
          >
            people.
          </motion.span>
        </motion.h1>

        {/* Credentials & Location: SHRM-CP is the ONLY blue element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-sans font-light text-ivory-200"
        >
          <span>Evin Strand</span>
          <span className="text-slate-500">•</span>
          {/* SHRM-CP: High-contrast deliberate sapphire blue focal point */}
          <span className="font-mono text-sapphire-light font-semibold tracking-wide">
            SHRM-CP Certified
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300">Hutchinson Island, FL</span>
        </motion.div>

        {/* Prominent Frosted Glass "Explore Overview" Action with Radiant Sapphire Sheen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10"
        >
          <button
            onClick={scrollToOverview}
            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-white/10 via-sapphire/20 to-white/10 hover:from-sapphire/35 hover:via-sapphire/50 hover:to-sapphire/35 border border-sapphire-light/40 hover:border-sapphire-light text-ivory-50 hover:text-white backdrop-blur-xl transition-all duration-300 text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:shadow-[0_0_40px_rgba(56,189,248,0.65)] hover:scale-105 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-sapphire-glow animate-ping" />
            <span>Explore Overview</span>
            <ChevronDown className="w-4 h-4 text-sapphire-light group-hover:text-white transition-all transform group-hover:translate-y-1 group-hover:scale-110" />
          </button>
        </motion.div>
      </div>

      {/* 3. Bottom Row: Telemetry Coordinates on Left, 4 Perfectly Aligned Pillars on Right */}
      <div className="relative z-20 w-full flex flex-col md:flex-row items-end md:items-center justify-between gap-6 pt-4 pb-2 border-t border-white/5">
        
        {/* Bottom Left: Quiet Dossier Badge & Scope */}
        <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span className="uppercase tracking-widest text-[11px] text-ivory-200">
              Dossier No. 0426
            </span>
          </div>
          <span className="text-slate-600 hidden sm:inline-block">•</span>
          <span className="text-[11px] text-slate-400 hidden sm:inline-block">
            $148M Scope Verified
          </span>
        </div>

        {/* Bottom Right: 4 Numbered Architectural Domain Indices (Static Telemetry) */}
        <div className="flex items-center gap-6 sm:gap-10 w-full md:w-auto justify-end">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="relative text-left select-none py-1"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-semibold text-slate-400">
                  /{pillar.number}
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide text-ivory-100">
                  {pillar.title}
                </span>
              </div>
              <span className="block text-[10px] font-mono text-slate-400 truncate max-w-[130px] mt-0.5 font-light">
                {pillar.subtitle}
              </span>
              <div className="w-full h-0.5 bg-white/10 rounded-full mt-1.5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
