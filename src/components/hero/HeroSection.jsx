import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, Download, FileText, Printer } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import HoverLightButton from '../ui/HoverLightButton'
import BasReliefWrapper from '../cards/BasReliefWrapper'

export default function HeroSection({ onExplore }) {
  const { profile, setContactModalOpen, goToCategory, goToItem } = usePortfolio()

  return (
    <section className="py-1 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Deep Blue & Ivory Cinematic Hero Card (Borderless) */}
      <div className="relative rounded-[2.2rem] bg-navy-900/90 shadow-2xl backdrop-blur-md overflow-hidden p-5 sm:p-7 lg:p-8 text-ivory">
        
        {/* Soft Ambient Sapphire & Deep Blue Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-sapphire/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-sapphire-glow/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Internal Integrated Navigation Bar */}
        <div className="flex items-center justify-between gap-4 pb-5 sm:pb-6 relative z-20">
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

        {/* 2. Main Hero Content Grid (3 Columns, Vertically Centered) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-5 sm:py-7 relative z-10">
          
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
              Resilient Teams • Continuous Improvement • Modern AI Tools
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
              <HoverLightButton
                onClick={() => window.print()}
                variant="ghost"
                className="px-3.5 py-1.5 text-[11px] border border-white/10 hover:border-sapphire-light/40"
                title="Print or save Executive 1-Pager as PDF"
              >
                <Printer className="w-3 h-3 text-sapphire-glow" />
                <span>Executive 1-Pager (PDF)</span>
              </HoverLightButton>
            </div>
          </div>

          {/* Center Column: Dramatic Cinematic Portrait with Subtle Ambient Aura */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group/portrait">
              {/* 1. Ambient Moving Aurora Backlight Glow (Slow Breathing Sapphire & Sky) */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-sapphire-glow/20 via-sky-400/15 to-sapphire/30 rounded-[3rem] blur-2xl opacity-60 group-hover/portrait:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* 2. Soft Corner Telemetry Glow Orbs */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-sky-300/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sapphire/20 rounded-full blur-2xl pointer-events-none" />

              {/* 3. The Portrait Frame with Subtle Organic Lift */}
              <BasReliefWrapper
                className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(2,6,17,0.9),0_0_35px_rgba(56,189,248,0.12)] border border-white/10 group-hover/portrait:border-sapphire-light/40 group-hover/portrait:-translate-y-1 p-0 transition-all duration-500"
                interactive={true}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={profile.portrait || './assets/profile_pic.jpg'}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 ease-out group-hover/portrait:scale-[1.03]"
                  />
                  {/* Soft bottom vignette gradient into deep navy */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Gentle moving diagonal glass sheen reflection on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </BasReliefWrapper>
            </div>
          </div>

          {/* Right Column: Clean Editorial Philosophy Quote (Unboxed, Pure Typography, Vertically Centered) */}
          <div className="lg:col-span-4 flex flex-col justify-center lg:pl-6 space-y-4 relative my-auto">
            {/* Subtle editorial watermark quotation mark */}
            <span className="text-7xl font-serif text-sapphire-glow/15 select-none absolute -top-8 -left-1 pointer-events-none leading-none">
              “
            </span>

            {/* Pure unboxed italic quote text */}
            <blockquote className="space-y-3 relative z-10 pl-2">
              <p className="text-base sm:text-lg font-serif text-ivory-50 leading-relaxed italic font-normal tracking-wide">
                "{profile.quote || 'Never tell people how to do things. Tell them what to do and they will surprise you with their ingenuity.'}"
              </p>
              
              <div className="pt-1.5 flex items-center gap-2">
                <div className="w-8 h-px bg-sapphire-light/60" />
                <cite className="font-mono text-xs text-sapphire-light uppercase tracking-widest font-semibold not-italic">
                  {profile.quoteAuthor || 'General George S. Patton'}
                </cite>
              </div>
            </blockquote>

            {/* Quiet Credential Pill / Baseline Metadata */}
            <div className="pl-2 pt-1 flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sapphire-glow" />
                <span>Hutchinson Island, FL</span>
              </span>
              <span>•</span>
              <span className="text-ivory-200 font-semibold tracking-wider">SHRM-CP</span>
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
              if (onExplore) {
                onExplore()
                return
              }
              const el = document.getElementById('scene-domains') || document.getElementById('core-domains-section')
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
