import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, Download, FileText } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import HoverLightButton from '../ui/HoverLightButton'
import BasReliefWrapper from '../cards/BasReliefWrapper'

export default function HeroSection() {
  const { profile, setContactModalOpen, goToCategory, goToItem } = usePortfolio()

  return (
    <section className="pt-4 sm:pt-6 pb-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Deep Blue & Ivory Cinematic Hero Card (Borderless) */}
      <div className="relative rounded-[2.5rem] bg-navy-900/90 shadow-2xl backdrop-blur-md overflow-hidden p-6 sm:p-10 lg:p-12 text-ivory">
        
        {/* Soft Ambient Sapphire & Deep Blue Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-sapphire/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-sapphire-glow/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Internal Integrated Navigation Bar */}
        <div className="flex items-center justify-between gap-4 pb-8 sm:pb-10 relative z-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <span className="font-sans font-bold text-lg tracking-tight text-ivory-50">
              {profile.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-sapphire-glow animate-pulse" />
          </div>

          {/* Center Navigation Links in Ivory with Blue & White Glow on hover */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-mono text-ivory-200">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-3.5 py-1.5 rounded-full hover:bg-navy-950/60 hover:text-white transition-all duration-200 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
            >
              Home
            </button>
            <button
              onClick={() => goToCategory('resume-docs')}
              className="px-3.5 py-1.5 rounded-full hover:bg-navy-950/60 hover:text-white transition-all duration-200 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
            >
              Resume
            </button>
            <button
              onClick={() => goToCategory('stories')}
              className="px-3.5 py-1.5 rounded-full hover:bg-navy-950/60 hover:text-white transition-all duration-200 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
            >
              Stories
            </button>
            <button
              onClick={() => goToCategory('ai-projects')}
              className="px-3.5 py-1.5 rounded-full hover:bg-navy-950/60 hover:text-white transition-all duration-200 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
            >
              AI Projects
            </button>
            <button
              onClick={() => goToCategory('hobbies')}
              className="px-3.5 py-1.5 rounded-full hover:bg-navy-950/60 hover:text-white transition-all duration-200 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
            >
              Hobbies
            </button>
          </nav>

          {/* Right Action: HoverLightButton with Ivory / Deep Blue Switch */}
          <HoverLightButton
            onClick={() => setContactModalOpen(true)}
            variant="navy"
            className="px-4 py-2"
          >
            <span>Get in touch</span>
            <span className="w-5 h-5 rounded-full bg-ivory text-navy-950 flex items-center justify-center transition-colors shadow-sm group-hover:scale-105">
              <Mail className="w-3 h-3 text-navy-950" />
            </span>
          </HoverLightButton>
        </div>

        {/* Soft Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* 2. Main Hero Content Grid (3 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6 sm:py-10 relative z-10">
          
          {/* Left Column: Greeting & Big Bold Title in Crisp Ivory */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs sm:text-sm font-mono font-semibold text-sapphire-glow tracking-wide">
                Hey, I'm Evin.
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-50 leading-[1.08] font-sans">
              Product<br />
              Information<br />
              Analyst
            </h1>

            <p className="text-xs font-mono uppercase tracking-widest text-slate-300 pt-1">
              Data Analytics • AI Integration • Continuous Improvement
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <HoverLightButton
                onClick={() => goToItem('curriculum-vitae')}
                variant="navy"
                className="px-3.5 py-1.5 text-[11px]"
              >
                <FileText className="w-3 h-3 text-sapphire-light" />
                <span>Resume Dossier</span>
              </HoverLightButton>
              <HoverLightButton
                onClick={() => goToItem('executive-cover-letter')}
                variant="navy"
                className="px-3.5 py-1.5 text-[11px]"
              >
                <FileText className="w-3 h-3 text-sapphire-light" />
                <span>Cover Letter</span>
              </HoverLightButton>
            </div>
          </div>

          {/* Center Column: Dramatic Cinematic Portrait with Blue & White Hover Sheen */}
          <div className="lg:col-span-5 flex justify-center">
            <BasReliefWrapper
              className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl p-0"
              interactive={true}
            >
              <div className="relative w-full h-full">
                <img
                  src={profile.portrait || './assets/profile_pic.jpg'}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                />
                {/* Soft bottom vignette gradient into deep navy */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent opacity-80" />
              </div>
            </BasReliefWrapper>
          </div>

          {/* Right Column: Clean Philosophy Quote (Borderless) */}
          <div className="lg:col-span-3 space-y-4 lg:pl-4">
            <div className="p-5 rounded-2xl bg-navy-950/70 backdrop-blur-sm shadow-xl">
              <p className="text-sm font-sans text-ivory-100 leading-relaxed italic font-light">
                "{profile.quote || 'Great data systems should feel effortless. Precision engineering meets operational stewardship.'}"
              </p>
              <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                <span>Hutchinson Island, FL</span>
                <span className="text-sapphire-light font-semibold">SHRM-CP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* 3. Bottom Row: 4 Focus Numbered Items & Explore Pill Button */}
        <div className="pt-8 sm:pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full md:w-auto">
            {profile.heroFocus?.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[11px] font-mono text-sapphire-glow font-semibold mb-0.5">
                  /{item.number}
                </span>
                <span className="text-xs sm:text-sm font-sans font-medium text-ivory-100">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action button in bottom right (HoverLightButton with Ivory variant & cursor tracking) */}
          <HoverLightButton
            onClick={() => {
              const el = document.getElementById('core-domains-section')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            variant="ivory"
            className="px-5 py-2.5 shrink-0"
          >
            <span>Explore Dossiers</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </HoverLightButton>
        </div>
      </div>
    </section>
  )
}
