import React from 'react'
import { usePortfolio } from '../../context/PortfolioContext'

export default function PrintDossier() {
  const { profile, items } = usePortfolio()

  return (
    <div className="print-only p-8 text-black bg-white max-w-4xl mx-auto font-sans">
      {/* Print Dossier Header */}
      <div className="border-b-2 border-black pb-5 mb-6">
        <h1 className="text-4xl font-serif font-bold text-black mb-1">
          {profile.name}
        </h1>
        <p className="text-base font-semibold text-gray-800 mb-2">
          {profile.tagline}
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-600">
          <span>Location: {profile.location}</span>
          <span>•</span>
          <span>Email: {profile.email}</span>
          <span>•</span>
          <span>Phone: {profile.phone}</span>
        </div>
      </div>

      {/* Executive Bio & Education */}
      <div className="mb-6 print-break-inside-avoid">
        <h2 className="text-sm font-mono font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
          Executive Profile & Summary
        </h2>
        <p className="text-xs leading-relaxed text-gray-800 mb-3">
          {profile.bio}
        </p>

        <div className="text-xs font-mono text-gray-700 space-y-1">
          <p><strong>Education:</strong> {profile.education.degree} — {profile.education.school}</p>
          <p><strong>Certifications:</strong> {profile.education.certifications.join(' | ')}</p>
          {profile.skills && (
            <p><strong>Core Disciplines:</strong> {profile.skills.join(' • ')}</p>
          )}
        </div>
      </div>

      {/* Case Studies & Dossiers */}
      <div className="space-y-6">
        <h2 className="text-sm font-mono font-bold uppercase tracking-wider border-b-2 border-black pb-1 mb-4">
          Detailed Case Studies & Professional Records
        </h2>

        {items.map((item, idx) => (
          <div key={item.id} className="print-break-inside-avoid border border-gray-300 p-5 rounded-lg mb-5">
            <div className="flex justify-between items-baseline border-b border-gray-200 pb-2 mb-2">
              <div>
                <h3 className="text-base font-serif font-bold text-black">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-gray-700">
                  {item.role} | {item.organization}
                </p>
              </div>
              <div className="text-right text-xs font-mono text-gray-600">
                <span>{item.timeline}</span>
              </div>
            </div>

            <p className="text-xs italic text-gray-700 mb-3">
              {item.teaser}
            </p>

            {/* Verified Project Telemetry */}
            {item.telemetry && item.telemetry.length > 0 && (
              <div className="flex flex-wrap gap-4 p-2 bg-gray-50 border border-gray-200 rounded mb-3 text-xs font-mono">
                {item.telemetry.map((t, tIdx) => (
                  <span key={tIdx}>
                    <strong>{t.label}:</strong> {t.prefix}{t.value}{t.suffix}
                  </span>
                ))}
              </div>
            )}

            {/* Physical Specs for Hobbies */}
            {item.specs && item.specs.length > 0 && (
              <div className="flex flex-wrap gap-4 p-2 bg-gray-50 border border-gray-200 rounded mb-3 text-xs font-mono">
                {item.specs.map((sp, spIdx) => (
                  <span key={spIdx}>
                    <strong>{sp.label}:</strong> {sp.value} ({sp.note})
                  </span>
                ))}
              </div>
            )}

            {/* 4-Phase Story Narrative */}
            {item.story && (
              <div className="text-xs text-gray-800 space-y-1.5">
                {item.story.inception && <p><strong>01 // Inception:</strong> {item.story.inception}</p>}
                {item.story.challenge && <p><strong>02 // Challenge:</strong> {item.story.challenge}</p>}
                {item.story.strategy && <p><strong>03 // Strategy:</strong> {item.story.strategy}</p>}
                {item.story.outcome && <p><strong>04 // Outcome:</strong> {item.story.outcome}</p>}
              </div>
            )}

            {/* In-Depth Executive Story Narrative */}
            {item.storyNarrative && !item.story && (
              <div className="text-xs text-gray-800 space-y-1.5 mt-2">
                {item.storyNarrative.context && <p><strong>Context:</strong> {item.storyNarrative.context}</p>}
                {item.storyNarrative.mandate && <p><strong>Mandate:</strong> {item.storyNarrative.mandate}</p>}
                {item.storyNarrative.execution && <p><strong>Execution:</strong> {item.storyNarrative.execution}</p>}
                {item.storyNarrative.impact && <p><strong>Impact:</strong> {item.storyNarrative.impact}</p>}
              </div>
            )}

            {/* Document Content if document item */}
            {item.document?.experience && (
              <div className="text-xs text-gray-800 space-y-2 mt-2">
                {item.document.experience.map((e, eIdx) => (
                  <div key={eIdx} className="border-t border-gray-100 pt-1.5">
                    <p className="font-bold">{e.company} ({e.period})</p>
                    {e.roles.map((r, rIdx) => (
                      <div key={rIdx} className="pl-3 mt-1">
                        <p className="font-semibold text-gray-700">{r.title}</p>
                        <ul className="list-disc pl-4 space-y-0.5 text-[11px]">
                          {r.bullets.map((b, bIdx) => <li key={bIdx}>{b}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {item.tags && (
              <div className="mt-3 pt-2 border-t border-gray-200 text-[10px] font-mono text-gray-600">
                Disciplines: {item.tags.join(', ')}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Print Footer */}
      <div className="mt-8 pt-4 border-t border-gray-400 text-center text-[10px] font-mono text-gray-500">
        Executive Portfolio & Interactive Dossier • Generated for {profile.name} • {profile.email} • {profile.phone}
      </div>
    </div>
  )
}
