import React, { useState, useEffect } from 'react'
import {
  Calendar,
  Building2,
  Quote,
  Maximize2,
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  GitBranch,
  Eye,
  Cpu,
  ShieldCheck,
  Milestone,
  Compass,
  CheckCircle2,
  Smartphone,
  ExternalLink
} from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import TacticalDiagram from './TacticalDiagram'

export default function StoryDetailView({ item }) {
  const {
    title,
    role,
    organization,
    timeline,
    teaser,
    storyText,
    story,
    specs,
    telemetry,
    keyMetric,
    exhibit,
    pullQuote,
    image,
    categoryId,
    projectOverview,
    mindMap,
    liveUrl,
    githubUrl,
    qrCode
  } = item

  const hasMindMap = Boolean(mindMap)
  const [isZoomed, setIsZoomed] = useState(false)
  const [activeRightTab, setActiveRightTab] = useState(hasMindMap ? 'mindmap' : 'exhibit')
  const { prevItem, nextItem, goToPrevItem, goToNextItem } = usePortfolio()

  const crystalSlab = "bg-white/[0.03] border border-white/10 shadow-[0_15px_35px_rgba(2,6,17,0.45),inset_0_1px_1px_rgba(255,255,255,0.18)]"

  useEffect(() => {
    setActiveRightTab(hasMindMap ? 'mindmap' : 'exhibit')
  }, [item?.id, hasMindMap])

  // Narrative Paragraphs: Supports continuous storyText, 4-phase structured story, or teaser
  const narrativeParagraphs = storyText
    ? storyText.split('\n\n')
    : story
      ? [story.inception, story.challenge, story.strategy, story.outcome].filter(Boolean)
      : teaser
        ? [teaser]
        : []

  // Effective key metric badge
  const effectiveKeyMetric = keyMetric || (
    telemetry && telemetry[0]
      ? `${telemetry[0].prefix || ''}${telemetry[0].value}${telemetry[0].suffix || ''} ${telemetry[0].label}`
      : specs && specs[0]
        ? `${specs[0].value}`
        : null
  )

  // Pull Quote & Attribution
  const quoteText = typeof pullQuote === 'string'
    ? pullQuote
    : pullQuote?.quote || (story?.outcome ? story.outcome : null)
  const quoteAuthor = pullQuote?.attribution || (role ? `${role} Archive Brief` : "Executive Leadership Review")

  // Companion visual: real-world exhibit first, fallback to visual architecture / craft card
  const visualImage = exhibit?.image || image
  const visualTitle = exhibit?.title || title
  const visualCaption = exhibit?.caption || (
    categoryId === 'ai-projects'
      ? "Autonomous agentic knowledge fabric architecture & verified execution pipeline."
      : categoryId === 'hobbies'
        ? "Bespoke engineering craftsmanship & calculated physical tolerances."
        : "Operational workflow architecture and verified telemetry."
  )
  const visualTag = exhibit?.tag || (
    exhibit
      ? "Executive Curriculum Exhibit"
      : categoryId === 'ai-projects'
        ? "AI Systems Architecture"
        : categoryId === 'hobbies'
          ? "Engineering & Craft Artifact"
          : "Verified Systems Architecture"
  )

  return (
    <div className="w-full min-h-full flex flex-col justify-start">
      {/* Panoramic Two-Column Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start w-full">
        
        {/* Left Column: The Elevated Story Narrative or Deep Project Overview */}
        <div className={`${hasMindMap ? "lg:col-span-6 xl:col-span-6" : "lg:col-span-7"} flex flex-col space-y-5 text-ivory`}>
          
          {/* Metadata Row with Clean Badges & Verified Impact Metric */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-300">
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 text-ivory-50 font-semibold px-3 py-1 rounded-full bg-sapphire/20 border border-sapphire-light/30 shadow-sm">
                <Building2 className="w-3.5 h-3.5 text-sapphire-light" />
                {organization}
              </span>
              <span className="text-slate-500">•</span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {timeline}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-sapphire-glow font-medium">
                {role}
              </span>
            </div>

            {effectiveKeyMetric && (
              <span className="px-3.5 py-1 rounded-full bg-sapphire-glow/15 border border-sapphire-light/40 text-sapphire-light font-bold text-xs tracking-wide shadow-sm">
                {effectiveKeyMetric}
              </span>
            )}
          </div>

          {/* Big Editorial Headline in Crisp Playfair Serif */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-serif font-bold text-ivory-50 tracking-tight leading-[1.14]">
            {title}
          </h1>

          {/* Executive Teaser Statement */}
          {teaser && (
            <p className="text-sm sm:text-base lg:text-lg font-sans text-ivory-200 leading-relaxed font-light">
              {teaser}
            </p>
          )}

          {/* Soft Luminous Divider */}
          <div className="h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent" />

          {/* Narrative Prose (for Stories and Hobbies without projectOverview) */}
          {!projectOverview && narrativeParagraphs.length > 0 && (
            <div className="text-ivory-100 font-sans text-[15px] sm:text-[16px] xl:text-[17px] leading-[1.85] font-light space-y-4 selection:bg-sapphire/30">
              {narrativeParagraphs.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className={pIdx === 0 ? "first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-sapphire-light first-letter:mr-2 first-letter:float-left first-letter:leading-none" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Comprehensive Project Overview (For Multi-Agent AI Projects) */}
          {projectOverview && (
            <div className="space-y-4 pt-2">
              
              {/* 1. System Vision & Core Goal */}
              {projectOverview.goal && (
                <div className={`p-4 rounded-2xl ${crystalSlab} space-y-1.5`}>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-sapphire-light uppercase tracking-wider">
                    <Compass className="w-4 h-4 text-sapphire-glow" />
                    <span>System Vision & Operational Goal</span>
                  </div>
                  <p className="text-sm font-sans text-ivory-200 leading-relaxed font-light">
                    {projectOverview.goal}
                  </p>
                </div>
              )}

              {/* 2. Multi-Agent Governance Core & Ownership */}
              {projectOverview.agentsUsed && projectOverview.agentsUsed.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-sapphire-light uppercase tracking-wider">
                    <Cpu className="w-4 h-4 text-sapphire-glow" />
                    <span>Multi-Agent Organization & Domain Ownership</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {projectOverview.agentsUsed.map((agent, aIdx) => (
                      <div key={aIdx} className={`p-3 rounded-xl ${crystalSlab} space-y-1 hover:border-sapphire-light/35 transition-colors`}>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-ivory-50 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-sapphire-glow" />
                            {agent.agent}
                          </span>
                          <span className="text-[10px] font-mono text-sapphire-glow font-medium">{agent.role}</span>
                        </div>
                        <p className="text-[11px] font-sans text-slate-300 font-light leading-snug">
                          {agent.mandate}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Key Architectural Decisions Made */}
              {projectOverview.decisionsMade && projectOverview.decisionsMade.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-sapphire-light uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-sapphire-glow" />
                    <span>Architectural Decisions & Technical Rationale</span>
                  </div>
                  <div className="space-y-2">
                    {projectOverview.decisionsMade.map((dec, dIdx) => (
                      <div key={dIdx} className={`p-3 rounded-xl ${crystalSlab} flex items-start gap-2.5`}>
                        <CheckCircle2 className="w-4 h-4 text-sapphire-light shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm font-sans text-ivory-200 font-light leading-relaxed">
                          {dec}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. End-to-End Sprint Ledger */}
              {projectOverview.sprints && projectOverview.sprints.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-sapphire-light uppercase tracking-wider">
                    <Milestone className="w-4 h-4 text-sapphire-glow" />
                    <span>End-to-End Sprint Ledger & Milestone Progress</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {projectOverview.sprints.map((sp, sIdx) => (
                      <div key={sIdx} className={`p-2.5 rounded-xl ${crystalSlab} space-y-1`}>
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="font-bold text-sapphire-light">{sp.sprint}</span>
                          <span className="text-slate-400 text-[10px] truncate max-w-[120px]">{sp.title}</span>
                        </div>
                        <p className="text-[10px] font-sans text-slate-300 font-light leading-snug">
                          {sp.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Active In-Progress Status Callout */}
              {projectOverview.currentStatus && (
                <div className="p-3.5 rounded-2xl bg-sapphire/15 border border-sapphire-light/30 flex items-start gap-3 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sapphire-light font-bold block mb-0.5">
                      Active In-Progress State // Next Horizon
                    </span>
                    <p className="text-xs sm:text-sm font-sans text-ivory-100 font-light leading-relaxed">
                      {projectOverview.currentStatus}
                    </p>
                  </div>
                </div>
              )}

              {/* 6. Live Mobile Flight Simulator & Interactive QR Code */}
              {(liveUrl || qrCode) && (
                <div className={`p-4 sm:p-5 rounded-2xl ${crystalSlab} border-sapphire-light/35 space-y-3`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-sapphire-light uppercase tracking-wider">
                      <Smartphone className="w-4 h-4 text-sapphire-glow" />
                      <span>Live Mobile Simulator // Touch & Browser Build</span>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Live on GitHub Pages
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
                    {qrCode && (
                      <div className="p-2.5 bg-white rounded-xl shadow-lg shrink-0 flex flex-col items-center">
                        <img
                          src={qrCode}
                          alt="Scan QR code to launch mobile version"
                          className="w-28 h-28 object-contain"
                        />
                        <span className="text-[9px] font-mono font-bold text-slate-800 uppercase tracking-wider mt-1">
                          Scan to Play
                        </span>
                      </div>
                    )}

                    <div className="space-y-2 text-xs font-sans text-ivory-200 font-light flex-1">
                      <p className="leading-relaxed">
                        Playable directly on your smartphone (iOS Safari or Android Chrome) with dual virtual touch joysticks, full canon warp speed bursts, and zero app installs required.
                      </p>
                      <div className="flex flex-wrap items-center gap-2.5 pt-1 font-mono">
                        {liveUrl && (
                          <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sapphire hover:bg-sapphire-dark text-white font-medium shadow-md transition-all text-xs"
                          >
                            <span>Launch Live Simulator</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {githubUrl && (
                          <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-ivory transition-all text-xs"
                          >
                            <span>GitHub Repository</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Sleek Technical Specifications Grid (Floating Crystal Glass, No Nested Blurs) */}
          {specs && specs.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {specs.map((sp, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-2xl ${crystalSlab} space-y-1`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block truncate">
                    {sp.label}
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-sapphire-light block truncate">
                    {sp.value}
                  </span>
                  {sp.note && (
                    <span className="text-[11px] font-sans text-ivory-300 block truncate font-light">
                      {sp.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Sleek Project Telemetry Grid (Floating Crystal Glass, No Nested Blurs) */}
          {telemetry && telemetry.length > 0 && (
            <div className="grid grid-cols-3 gap-3 pt-1">
              {telemetry.map((tel, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl ${crystalSlab} flex flex-col items-center text-center space-y-1`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    {tel.label}
                  </span>
                  <span className="text-xl sm:text-2xl font-mono font-bold text-sapphire-light">
                    {tel.prefix}{tel.value}{tel.suffix}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* In-Text Editorial Pull Quote */}
          {quoteText && (
            <div className="pt-3 border-t border-white/10 flex items-start gap-3.5">
              <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-sapphire-glow shrink-0 mt-0.5 opacity-80" />
              <div>
                <p className="font-serif text-sm sm:text-base italic text-ivory-100 leading-snug font-normal">
                  "{quoteText}"
                </p>
                <p className="mt-1 font-mono text-[11px] text-sapphire-light uppercase tracking-wider font-semibold">
                  — {quoteAuthor}
                </p>
              </div>
            </div>
          )}

          {/* Dual "Previous / Next Dossier" Progression Bar */}
          {(prevItem || nextItem) && (
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {prevItem && prevItem.id !== item.id && (
                <button
                  onClick={goToPrevItem}
                  className="group text-left flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-sapphire-light/40 transition-all duration-300 cursor-pointer shadow-sm select-none"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <ArrowLeft className="w-4 h-4 text-sapphire-light shrink-0 group-hover:-translate-x-0.5 transition-transform" />
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest group-hover:text-sapphire-light transition-colors">
                        Previous Dossier
                      </span>
                      <span className="text-xs sm:text-sm font-sans font-semibold text-ivory-100 group-hover:text-white transition-colors truncate">
                        {prevItem.title}
                      </span>
                    </div>
                  </div>
                </button>
              )}

              {nextItem && nextItem.id !== item.id && (
                <button
                  onClick={goToNextItem}
                  className="group text-left flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-sapphire-light/40 transition-all duration-300 cursor-pointer shadow-sm select-none"
                >
                  <div className="flex flex-col min-w-0 pr-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest group-hover:text-sapphire-light transition-colors">
                      Next in Archive
                    </span>
                    <span className="text-xs sm:text-sm font-sans font-semibold text-ivory-100 group-hover:text-white transition-colors truncate">
                      {nextItem.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-sapphire-light font-semibold shrink-0 group-hover:translate-x-0.5 transition-transform">
                    <span className="hidden xl:inline">Advance</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Prominent Mind Map or Museum Visual Artifact */}
        <div className={`${hasMindMap ? "lg:col-span-6 xl:col-span-6" : "lg:col-span-5"} flex flex-col items-start self-start sticky top-0 w-full`}>
          <div className="flex flex-col space-y-3 w-full">
            
            {/* Header Toolbar: Tab Switcher (Mind Map vs Artwork Exhibit) or Static Tag */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-300 pb-1 w-full">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-sapphire-glow" />
                <span className="font-bold text-sapphire-light uppercase tracking-wider text-[11px]">
                  {hasMindMap
                    ? (activeRightTab === 'mindmap' ? "Interactive Cognitive Architecture" : "Project Architectural Exhibit")
                    : visualTag}
                </span>
              </div>

              {hasMindMap ? (
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 shadow-sm">
                  <button
                    onClick={() => setActiveRightTab('mindmap')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeRightTab === 'mindmap'
                        ? 'bg-sapphire/30 text-ivory border border-sapphire-light/40 shadow-sm font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <GitBranch className="w-3.5 h-3.5 text-sapphire-light" />
                    <span>Interactive Mind Map</span>
                  </button>
                  <button
                    onClick={() => setActiveRightTab('exhibit')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeRightTab === 'exhibit'
                        ? 'bg-sapphire/30 text-ivory border border-sapphire-light/40 shadow-sm font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5 text-sapphire-light" />
                    <span>Project Exhibit</span>
                  </button>
                </div>
              ) : (
                <span className="text-[11px] text-slate-400">
                  {exhibit ? "High-Resolution Evidence" : "Systems Architecture"}
                </span>
              )}
            </div>

            {/* Mind Map Viewport (When Mind Map is Active) */}
            {hasMindMap && activeRightTab === 'mindmap' ? (
              <div className="w-full h-[580px] sm:h-[640px] xl:h-[720px] rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 shadow-[0_25px_60px_rgba(2,6,17,0.7),inset_0_1px_1px_rgba(255,255,255,0.18)]">
                <TacticalDiagram item={item} mindMap={mindMap} />
              </div>
            ) : (
              /* Museum-Grade Glass Showcase Frame (Image Gallery View) */
              <div
                onClick={() => setIsZoomed(true)}
                className="group relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 p-3 sm:p-4 shadow-[0_25px_60px_rgba(2,6,17,0.7),inset_0_1px_1px_rgba(255,255,255,0.18)] cursor-pointer transition-all duration-300 hover:shadow-[0_25px_60px_rgba(2,6,17,0.85),0_0_40px_rgba(56,189,248,0.2)] flex flex-col justify-between"
              >
                <div className="relative rounded-2xl overflow-hidden bg-navy-950/85 flex items-center justify-center p-2 min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] max-h-[500px]">
                  <img
                    src={visualImage}
                    alt={visualTitle}
                    onError={(e) => {
                      e.currentTarget.src = './assets/card-agentic.svg'
                    }}
                    className="w-full h-full object-contain max-h-[460px] filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Hover Zoom Prompt */}
                  <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-ivory">
                    <Maximize2 className="w-5 h-5 text-sapphire-glow" />
                    <span className="font-mono text-xs tracking-wider font-semibold uppercase">
                      Click to Expand Full Resolution
                    </span>
                  </div>
                </div>

                {/* Editorial Caption Under Image */}
                {visualCaption && (
                  <p className="mt-3 px-1 text-xs font-mono text-slate-300 italic leading-relaxed">
                    {visualCaption}
                  </p>
                )}
              </div>
            )}

          </div>
        </div>

      </div>

      {/* Lightbox Modal Zoom for Full-Resolution Inspection */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-6xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsZoomed(false)}
              className="self-end mb-3 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close full view"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={visualImage}
              alt={visualTitle}
              onError={(e) => {
                e.currentTarget.src = './assets/card-agentic.svg'
              }}
              className="max-h-[80vh] w-auto object-contain rounded-2xl border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {visualCaption && (
              <p className="mt-3 text-xs font-mono text-slate-300 text-center max-w-2xl">
                {visualCaption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
