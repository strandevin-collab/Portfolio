import React from 'react'
import { FileText, Download, Mail, Phone, ExternalLink, Printer } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'

export default function ButtonGroup() {
  const { profile, setContactModalOpen } = usePortfolio()

  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      {/* Download Resume Button */}
      <a
        href={profile.downloads.resumePdf}
        download="Evin_Strand_Resume.docx"
        className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-metallic-copper hover:bg-metallic-copper-light text-slate-950 font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-metallic-copper/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
        <span>Download Resume</span>
      </a>

      {/* Download Portfolio Snapshot Button */}
      <a
        href={profile.downloads.snapshotPdf}
        download="Evin_Strand_Portfolio_Dossier.pdf"
        className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-900 hover:bg-dark-850 text-metallic-amber font-mono font-semibold text-xs uppercase tracking-wider border border-metallic-amber/40 hover:border-metallic-amber shadow-bas-relief transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
        <span>Portfolio Snapshot (PDF)</span>
      </a>

      {/* Print Dossier */}
      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-dark-900/80 hover:bg-dark-850 text-slate-300 hover:text-slate-100 font-mono text-xs uppercase tracking-wider border border-white/10 hover:border-metallic-copper/40 transition-colors"
      >
        <Printer className="w-4 h-4 text-metallic-copper" />
        <span>Print Dossier</span>
      </button>

      {/* Contact Trigger */}
      <button
        onClick={() => setContactModalOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-dark-900/80 hover:bg-dark-850 text-slate-300 hover:text-slate-100 font-mono text-xs uppercase tracking-wider border border-white/10 hover:border-metallic-copper/40 transition-colors"
      >
        <Mail className="w-4 h-4 text-metallic-copper" />
        <span>Direct Contact</span>
      </button>
    </div>
  )
}
