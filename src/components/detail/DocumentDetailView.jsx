import React from 'react'
import {
  Download,
  Briefcase,
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import TerminalDecoder from './TerminalDecoder'
import HoverLightButton from '../ui/HoverLightButton'

export default function DocumentDetailView({ item }) {
  const { document: doc, title, role, organization, timeline, tags } = item

  return (
    <div className="w-full h-full overflow-y-auto pr-2 sm:pr-4 custom-scrollbar space-y-8 text-ivory">
      {/* Tactical Header (Borderless) */}
      <div className="pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
            <span className="px-3 py-1 rounded-full bg-sapphire/20 text-ivory font-semibold shadow-sm">
              {item.categoryBadge}
            </span>
            <span className="text-slate-500">•</span>
            <span>{organization}</span>
            <span className="text-slate-500">•</span>
            <span>{timeline}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <HoverLightButton
              href="/assets/Evin_Strand_Resume.docx"
              download="Evin_Strand_Resume.docx"
              variant="ivory"
              className="px-4 py-1.5"
            >
              <Download className="w-3.5 h-3.5 text-navy-950" />
              <span>Download (.docx)</span>
            </HoverLightButton>
            <HoverLightButton
              href="/assets/Evin_Strand_Cover_Letter.pdf"
              download="Evin_Strand_Cover_Letter.pdf"
              variant="navy"
              className="px-4 py-1.5"
            >
              <Download className="w-3.5 h-3.5 text-sapphire-light" />
              <span>Download (.pdf)</span>
            </HoverLightButton>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-mono font-bold text-ivory-50 leading-tight">
          <TerminalDecoder text={title} speed={20} delay={150} />
        </h2>
        <p className="mt-2 text-xs font-mono text-sapphire-glow font-medium">
          {role}
        </p>
      </div>

      {/* Soft Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 1. If CV / Resume */}
      {doc.experience && (
        <div className="space-y-8">
          {/* Executive Summary */}
          {doc.summary && (
            <div className="p-5 rounded-2xl bg-navy-950/80 shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-widest text-sapphire-glow font-bold mb-2">
                Professional Profile Statement
              </h3>
              <p className="text-sm font-sans text-ivory-200 leading-relaxed font-light">
                {doc.summary}
              </p>
            </div>
          )}

          {/* Experience Chronology */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-2">
              <Briefcase className="w-4 h-4 text-sapphire-light" />
              <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-ivory-100">
                Professional Experience History
              </h3>
            </div>

            <div className="space-y-6">
              {doc.experience.map((exp, expIdx) => (
                <div
                  key={expIdx}
                  className="p-6 rounded-2xl bg-navy-950/70 space-y-4 shadow-xl"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-ivory">
                        {exp.company}
                      </h4>
                      <p className="text-xs font-mono text-sapphire-light">{exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-300 px-3 py-1 rounded-full bg-navy-900/90 shadow-sm">
                      {exp.period}
                    </span>
                  </div>

                  {exp.roles.map((r, rIdx) => (
                    <div key={rIdx} className="space-y-2 pl-3 sm:pl-4 border-l-2 border-sapphire/50">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h5 className="font-mono text-sm font-bold text-ivory">
                          {r.title}
                        </h5>
                        <span className="text-[11px] font-mono text-slate-400">
                          {r.period}
                        </span>
                      </div>

                      <ul className="space-y-1.5 text-xs font-sans text-ivory-200 font-light">
                        {r.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-sapphire-light text-sm leading-none mt-0.5">•</span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {r.spotlight && (
                        <div className="mt-3 p-3.5 rounded-xl bg-sapphire/15 border-l-2 border-sapphire-light space-y-1">
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

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Education */}
            <div className="p-5 rounded-2xl bg-navy-950/70 shadow-xl">
              <div className="flex items-center gap-2 mb-3 text-sapphire-light">
                <GraduationCap className="w-4 h-4" />
                <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ivory">Education</h4>
              </div>
              {doc.education.map((edu, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <p className="font-semibold text-ivory-100">{edu.degree}</p>
                  <p className="font-mono text-slate-400">{edu.institution}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="p-5 rounded-2xl bg-navy-950/70 shadow-xl">
              <div className="flex items-center gap-2 mb-3 text-sapphire-glow">
                <Award className="w-4 h-4" />
                <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ivory">Certifications & Honors</h4>
              </div>
              <ul className="space-y-2 text-xs">
                {doc.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-ivory-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sapphire-light shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 2. If Executive Cover Letter */}
      {doc.letterSections && (
        <div className="p-6 sm:p-8 rounded-2xl bg-navy-950/80 shadow-2xl space-y-6">
          <div className="text-xs font-mono text-slate-300 space-y-1 pb-4">
            <p><strong>Candidate:</strong> Evin Strand</p>
            <p><strong>Focus:</strong> Product Information Analytics • AI Systems • Operational Leadership</p>
            <p><strong>Location:</strong> Hutchinson Island, FL</p>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="space-y-6">
            {doc.letterSections.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-ivory">
                  {sec.heading}
                </h4>
                <p className="font-sans text-sm text-ivory-200 leading-relaxed font-light">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="pt-2 font-mono text-xs text-slate-300 space-y-1">
            <p>Respectfully submitted,</p>
            <p className="font-serif text-base font-bold text-ivory-50">Evin Strand</p>
            <p className="text-[11px] text-sapphire-glow">strandevin@gmail.com • (262) 325-2112</p>
          </div>
        </div>
      )}

      {/* 3. If Military Record */}
      {doc.coreDuties && (
        <div className="p-6 sm:p-8 rounded-2xl bg-navy-950/80 shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4">
            <div>
              <h3 className="font-mono text-sm font-bold text-sapphire-glow uppercase tracking-wider">
                Tactical Automated Artillery Systems & Ethics
              </h3>
              <p className="text-xs font-mono text-slate-400">{doc.unit}</p>
            </div>
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-navy-900/90 text-ivory shadow-sm">
              {doc.militaryTenure}
            </span>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-ivory-100 font-semibold">
              Operational Doctrine & Verified Responsibilities:
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-ivory-200 font-light">
              {doc.coreDuties.map((duty, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-navy-900/80 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-sapphire-light shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{duty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Tags footer */}
      {tags && tags.length > 0 && (
        <div className="pt-4 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-3 py-1 rounded-full bg-navy-950/80 text-ivory-200 shadow-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
