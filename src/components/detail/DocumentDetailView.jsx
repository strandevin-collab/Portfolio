import React from 'react'
import {
  Download,
  Briefcase,
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Quote
} from 'lucide-react'
import HoverLightButton from '../ui/HoverLightButton'
import { usePortfolio } from '../../context/PortfolioContext'

export default function DocumentDetailView({ item }) {
  const { document: doc, title, role, organization, timeline, tags } = item
  const { prevItem, nextItem, goToPrevItem, goToNextItem } = usePortfolio()

  const crystalSlab = "bg-white/[0.03] border border-white/10 shadow-[0_15px_35px_rgba(2,6,17,0.45),inset_0_1px_1px_rgba(255,255,255,0.18)]"

  return (
    <div className="w-full h-full flex flex-col justify-start text-ivory">
      {/* 1. Tactical Header (Floating Glass, Borderless) */}
      <div className="pb-5">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
            <span className="px-3.5 py-1 rounded-full bg-sapphire/20 border border-sapphire-light/30 text-ivory-50 font-semibold shadow-sm">
              {item.categoryBadge}
            </span>
            <span className="text-slate-500">•</span>
            <span>{organization}</span>
            <span className="text-slate-500">•</span>
            <span>{timeline}</span>
          </div>

          {/* Quick Download Buttons */}
          <div className="flex items-center gap-2.5">
            <HoverLightButton
              href="./assets/Evin_Strand_Resume.docx"
              download="Evin_Strand_Resume.docx"
              variant="ivory"
              className="px-4 py-1.5 text-xs shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-navy-950" />
              <span>Resume (.docx)</span>
            </HoverLightButton>
            <HoverLightButton
              href="./assets/Evin_Strand_Cover_Letter.pdf"
              download="Evin_Strand_Cover_Letter.pdf"
              variant="navy"
              className="px-4 py-1.5 text-xs shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-sapphire-light" />
              <span>Cover Letter (.pdf)</span>
            </HoverLightButton>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-ivory-50 tracking-tight leading-tight">
          {title}
        </h1>
        <p className="mt-1 text-xs sm:text-sm font-mono text-sapphire-glow font-medium">
          {role}
        </p>
      </div>

      {/* Luminous Soft Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

      {/* 2. Panoramic Layout for Curriculum Vitae / Resume */}
      {doc.experience && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* Left Column (5 Cols): Profile Statement, Education, Certifications & Quant Telemetry */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Executive Summary in Floating Crystal Glass */}
            {doc.summary && (
              <div className={`p-6 rounded-3xl ${crystalSlab} space-y-2`}>
                <span className="text-[11px] font-mono uppercase tracking-widest text-sapphire-light font-bold">
                  Executive Profile Statement
                </span>
                <p className="text-sm font-sans text-ivory-100 leading-relaxed font-light">
                  {doc.summary}
                </p>
              </div>
            )}

            {/* Core Operational Scope Metrics (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-3">
              <div className={`p-3.5 rounded-2xl ${crystalSlab} flex flex-col`}>
                <span className="text-[10px] font-mono uppercase text-slate-400">Enterprise Scope</span>
                <span className="text-lg font-mono font-bold text-sapphire-light">$148M+</span>
              </div>
              <div className={`p-3.5 rounded-2xl ${crystalSlab} flex flex-col`}>
                <span className="text-[10px] font-mono uppercase text-slate-400">Tactical Precision</span>
                <span className="text-lg font-mono font-bold text-ivory">100%</span>
              </div>
              <div className={`p-3.5 rounded-2xl ${crystalSlab} flex flex-col`}>
                <span className="text-[10px] font-mono uppercase text-slate-400">Onboarding Gain</span>
                <span className="text-lg font-mono font-bold text-sapphire-light">-60 Days</span>
              </div>
              <div className={`p-3.5 rounded-2xl ${crystalSlab} flex flex-col`}>
                <span className="text-[10px] font-mono uppercase text-slate-400">Workflow Efficiency</span>
                <span className="text-lg font-mono font-bold text-sapphire-light">+40% Gain</span>
              </div>
            </div>

            {/* Education & Credentials in Floating Crystal Glass */}
            <div className={`p-5 rounded-3xl ${crystalSlab} space-y-4`}>
              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-sapphire-light">
                  <GraduationCap className="w-4 h-4" />
                  <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ivory">Academic Foundation</h4>
                </div>
                {doc.education?.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5 text-xs">
                    <p className="font-semibold text-ivory-50">{edu.degree}</p>
                    <p className="font-mono text-slate-400">{edu.institution}</p>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="pt-3 border-t border-white/10">
                <div className="flex items-center gap-2 mb-2 text-sapphire-glow">
                  <Award className="w-4 h-4" />
                  <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ivory">Credentials & Honors</h4>
                </div>
                <ul className="space-y-2 text-xs">
                  {doc.certifications?.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-ivory-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sapphire-light shrink-0 mt-0.5" />
                      <span className="leading-snug">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Right Column (7 Cols): Experience Chronology in Floating Crystal Slabs */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 pb-1">
              <Briefcase className="w-4 h-4 text-sapphire-light" />
              <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-ivory-100">
                Professional Experience Chronology
              </h3>
            </div>

            <div className="space-y-4">
              {doc.experience.map((exp, expIdx) => (
                <div
                  key={expIdx}
                  className={`p-5 sm:p-6 rounded-3xl ${crystalSlab} space-y-4`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-ivory-50">
                        {exp.company}
                      </h4>
                      <p className="text-xs font-mono text-sapphire-light">{exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-300 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 shadow-sm">
                      {exp.period}
                    </span>
                  </div>

                  {exp.roles.map((r, rIdx) => (
                    <div key={rIdx} className="space-y-2 pl-3 border-l-2 border-sapphire-light/40">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h5 className="font-mono text-sm font-bold text-ivory">
                          {r.title}
                        </h5>
                        <span className="text-[11px] font-mono text-slate-400">
                          {r.period}
                        </span>
                      </div>

                      <ul className="space-y-1.5 text-xs sm:text-[13px] font-sans text-ivory-200 font-light leading-relaxed">
                        {r.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-sapphire-light text-sm leading-none mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {r.spotlight && (
                        <div className="mt-2.5 p-3 rounded-2xl bg-sapphire/15 border border-sapphire-light/25 space-y-1">
                          <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-sapphire-light uppercase tracking-wider">
                            <Sparkles className="w-3.5 h-3.5 text-sapphire-glow" />
                            <span>{r.spotlight.title}</span>
                          </div>
                          <p className="text-xs font-sans text-ivory-100 font-light leading-relaxed">
                            {r.spotlight.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* 3. Panoramic Layout for Executive Cover Letter */}
      {doc.letterSections && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 Cols): Thesis, Quote & Contact Signature */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 rounded-3xl ${crystalSlab} space-y-4`}>
              <span className="text-[11px] font-mono uppercase tracking-widest text-sapphire-light font-bold">
                Executive Core Thesis
              </span>

              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-sapphire-glow shrink-0 mt-0.5 opacity-80" />
                <p className="font-serif text-base italic text-ivory-100 leading-relaxed font-normal">
                  "High-performing organizations are not sustained by tools or data alone—they are sustained by strong, resilient teams. When you build deep trust, invest in developing people, and equip team members with new tools and resilient processes, operational excellence becomes natural and enduring."
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-1 font-mono text-xs text-slate-300">
                <p className="text-ivory-50 font-bold font-serif text-base">Evin Strand</p>
                <p className="text-sapphire-light">Product Information Analyst</p>
                <p className="text-[11px] text-slate-400">strandevin@gmail.com • (262) 325-2112</p>
                <p className="text-[11px] text-slate-400">Hutchinson Island, FL</p>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): The 4 Strategic Letter Sections */}
          <div className="lg:col-span-7 space-y-4">
            {doc.letterSections.map((sec, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl ${crystalSlab} space-y-2`}
              >
                <h3 className="font-serif text-lg font-bold text-ivory-50">
                  {sec.heading}
                </h3>
                <p className="font-sans text-sm sm:text-[15px] text-ivory-200 leading-relaxed font-light">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* 4. Panoramic Layout for Military Tactical Compute Record */}
      {doc.coreDuties && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 Cols): Defense Doctrine, School, Honors & Liaison Role */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 rounded-3xl ${crystalSlab} space-y-4`}>
              <span className="text-[11px] font-mono uppercase tracking-widest text-sapphire-light font-bold">
                Defense Service Doctrine
              </span>

              <div className="space-y-1 text-xs font-mono">
                <p className="text-base font-serif font-bold text-ivory-50">{doc.unit}</p>
                <p className="text-sapphire-glow">US Army Field Artillery School (Fort Sill, OK)</p>
                <p className="text-slate-400">Tactical Compute Honor Graduate</p>
                <p className="text-slate-400">{doc.militaryTenure}</p>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <p className="text-xs font-sans text-ivory-100 leading-relaxed font-light">
                  Flawless 100% computational data fidelity record during live-fire tactical field artillery exercises under austere, degraded communication environments.
                </p>
                <p className="text-xs font-sans text-ivory-200 leading-relaxed font-light">
                  Concurrently served as Chaplain's Assistant: maintained absolute 100% confidentiality while managing personnel welfare and bridging communication between frontline soldiers and command staff.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Verified Duties & Compute Responsibilities */}
          <div className="lg:col-span-7 space-y-4">
            <div className={`p-6 rounded-3xl ${crystalSlab} space-y-4`}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-ivory-100 font-bold">
                Operational Doctrine & Verified Responsibilities:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm font-sans text-ivory-200 font-light">
                {doc.coreDuties.map((duty, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-sapphire-light shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      )}

      {/* Tags & Dual Prev/Next Dossier Progression Footer */}
      <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {tags && tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-ivory-200 shadow-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        ) : <div />}

        {(prevItem || nextItem) && (
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {prevItem && prevItem.id !== item.id && (
              <button
                onClick={goToPrevItem}
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-sapphire-light/40 transition-all cursor-pointer text-left"
              >
                <ArrowLeft className="w-4 h-4 text-sapphire-light group-hover:-translate-x-0.5 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400">Previous Record</span>
                  <span className="text-xs font-sans font-semibold text-ivory truncate max-w-[160px]">{prevItem.title}</span>
                </div>
              </button>
            )}

            {nextItem && nextItem.id !== item.id && (
              <button
                onClick={goToNextItem}
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-sapphire-light/40 transition-all cursor-pointer text-right"
              >
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400">Next Record</span>
                  <span className="text-xs font-sans font-semibold text-ivory truncate max-w-[160px]">{nextItem.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-sapphire-light group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
