import React from 'react'
import { usePortfolio } from '../../context/PortfolioContext'

export default function PrintDossier() {
  const { profile } = usePortfolio()

  return (
    <div className="print-only p-6 text-slate-900 bg-white max-w-[8.5in] mx-auto font-sans text-[11px] leading-tight">
      {/* 1. Header: Name & Executive Contact Bar */}
      <div className="border-b-2 border-slate-900 pb-3 mb-3.5 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-950 tracking-tight leading-none">
            {profile.name}
          </h1>
          <p className="text-xs font-semibold text-slate-700 tracking-wide mt-1">
            Product Information Analyst • Resilient Team Leadership • Continuous Improvement • Modern AI Tools
          </p>
        </div>
        <div className="text-right text-[10px] font-mono text-slate-600 leading-snug">
          <p>{profile.location}</p>
          <p>{profile.phone} • {profile.email}</p>
          <p>linkedin.com/in/evin-strand</p>
        </div>
      </div>

      {/* 2. Executive Leadership Philosophy & General Patton Quote */}
      <div className="grid grid-cols-12 gap-4 mb-3.5 items-stretch">
        <div className="col-span-8 bg-slate-50 border-l-4 border-slate-800 p-2.5 rounded-r">
          <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-0.5">
            Executive Summary & People-First Mission
          </p>
          <p className="text-[11px] text-slate-800 leading-normal">
            Product Information Analyst stewarding enterprise catalog portfolios averaging $148M+. Former Wisconsin Army National Guard tactical compute specialist and Chaplain's Assistant. Dedicated to building strong, resilient teams, developing people, and establishing continuous improvement frameworks. Passionate about empowering cross-functional teams with modern AI tools, structured mentorship, and scalable operational playbooks that eliminate friction.
          </p>
        </div>

        <div className="col-span-4 bg-slate-100/90 border border-slate-300 p-2.5 rounded flex flex-col justify-between">
          <p className="text-[10.5px] font-serif italic text-slate-900 leading-snug">
            "{profile.quote || 'Never tell people how to do things. Tell them what to do and they will surprise you with their ingenuity.'}"
          </p>
          <p className="text-[9.5px] font-mono text-slate-700 uppercase tracking-wider font-bold mt-1 text-right">
            — {profile.quoteAuthor || 'General George S. Patton'}
          </p>
        </div>
      </div>

      {/* 3. Verified Core Metrics Bar */}
      <div className="grid grid-cols-4 gap-2 mb-3.5">
        <div className="border border-slate-300 rounded p-2 text-center bg-slate-50">
          <span className="block text-base font-serif font-bold text-slate-950">$148M+</span>
          <span className="block text-[9px] font-mono uppercase tracking-wider text-slate-600">Enterprise Catalog Scope</span>
        </div>
        <div className="border border-slate-300 rounded p-2 text-center bg-slate-50">
          <span className="block text-base font-serif font-bold text-slate-950">60-Day Gain</span>
          <span className="block text-[9px] font-mono uppercase tracking-wider text-slate-600">Onboarding Velocity (90d → 30d)</span>
        </div>
        <div className="border border-slate-300 rounded p-2 text-center bg-slate-50">
          <span className="block text-base font-serif font-bold text-slate-950">40% Efficiency</span>
          <span className="block text-[9px] font-mono uppercase tracking-wider text-slate-600">AI Tooling Research Gain</span>
        </div>
        <div className="border border-slate-300 rounded p-2 text-center bg-slate-50">
          <span className="block text-base font-serif font-bold text-slate-950">100% Precision</span>
          <span className="block text-[9px] font-mono uppercase tracking-wider text-slate-600">Tactical Compute Accuracy</span>
        </div>
      </div>

      {/* 4. Career History & Leadership Highlights */}
      <div className="mb-3.5 space-y-2.5">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
          Executive Experience & Key Highlights
        </h2>

        {/* Role 1: Grainger */}
        <div className="border border-slate-200 rounded p-2 bg-white">
          <div className="flex justify-between items-baseline mb-1">
            <div>
              <span className="font-bold text-slate-950 text-xs">Product Information Analyst</span>
              <span className="text-slate-600 text-[10.5px]"> — W.W. Grainger</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">2020 – Present | Remote / IL</span>
          </div>
          <ul className="list-disc pl-4 space-y-0.5 text-[10px] text-slate-700 leading-tight">
            <li>
              <strong>Enterprise Portfolio Governance:</strong> Directed product data integrity across multi-million dollar vendor lines ($148M+ portfolio scope), coordinating with suppliers, merchandising, and QA to enforce strict taxonomy standards.
            </li>
            <li>
              <strong>Talent Development & Onboarding:</strong> Architected standardized training playbooks and automated job aids that accelerated new analyst time-to-productivity from 90 days down to 30 days.
            </li>
            <li>
              <strong>Continuous Improvement & AI Tooling:</strong> Designed Smartsheet automated dashboards and prompt-engineered workflows, slashing manual research cycle times by 40% and freeing capacity for high-value strategic initiatives.
            </li>
            <li>
              <strong>Cross-Functional Leadership:</strong> Mentored team members, facilitated weekly knowledge-sharing sessions, and championed recognition programs that elevated team morale and retention.
            </li>
          </ul>
        </div>

        {/* Role 2: Military */}
        <div className="border border-slate-200 rounded p-2 bg-white">
          <div className="flex justify-between items-baseline mb-1">
            <div>
              <span className="font-bold text-slate-950 text-xs">Fire Direction Specialist (13D) & Chaplain's Assistant (56M)</span>
              <span className="text-slate-600 text-[10.5px]"> — Wisconsin Army National Guard</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">2012 – 2018 | US Military</span>
          </div>
          <ul className="list-disc pl-4 space-y-0.5 text-[10px] text-slate-700 leading-tight">
            <li>
              <strong>Tactical Compute Accuracy:</strong> Calculated ballistic firing data under intense field pressure with 100% technical accuracy, graduating with Academic Honors from US Army Field Artillery School (Fort Sill, OK).
            </li>
            <li>
              <strong>Resilient Team Care & Morale:</strong> As Chaplain's Assistant, supported soldier wellness, emergency crisis interventions, and high-trust confidential counseling across unit deployments.
            </li>
          </ul>
        </div>
      </div>

      {/* 5. Education, Credentials & Core Disciplines */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="border border-slate-200 rounded p-2 bg-white">
          <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800 mb-1">
            Education & Certifications
          </h3>
          <p className="text-[10.5px] text-slate-900 font-semibold">
            B.A. Corporate & Health Communication (Minor: General Business)
          </p>
          <p className="text-[10px] text-slate-600 mb-1">
            University of Wisconsin-Whitewater
          </p>
          <div className="text-[9.5px] font-mono text-slate-700 space-y-0.5">
            <p>• <strong>SHRM-CP:</strong> Certified Professional (Society for Human Resource Management)</p>
            <p>• <strong>US Army Field Artillery School:</strong> Tactical Compute Honor Graduate</p>
          </div>
        </div>

        <div className="border border-slate-200 rounded p-2 bg-white">
          <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800 mb-1">
            Core Competencies & Tooling
          </h3>
          <div className="text-[10px] text-slate-700 space-y-1">
            <p><strong>Leadership:</strong> Resilient Team Building, People Mentorship, Cross-Functional Alignment</p>
            <p><strong>Operations:</strong> Continuous Improvement, SOP Playbooks, Rapid Onboarding Acceleration</p>
            <p><strong>Systems & Tools:</strong> Enterprise PIM, Smartsheet Automation, AI Prompting & Workflows</p>
          </div>
        </div>
      </div>

      {/* 6. Document Footer */}
      <div className="border-t border-slate-300 pt-2 text-center text-[9px] font-mono text-slate-500">
        Evin Strand • Executive Portfolio 1-Pager Dossier • Generated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} • Verified Records
      </div>
    </div>
  )
}
