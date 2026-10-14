import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Phone, MapPin, Linkedin, Copy, Check } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import HoverLightButton from '../ui/HoverLightButton'

export default function ContactModal() {
  const { contactModalOpen, setContactModalOpen, profile } = usePortfolio()
  const [copiedKey, setCopiedKey] = React.useState(null)

  React.useEffect(() => {
    if (!contactModalOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setContactModalOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [contactModalOpen, setContactModalOpen])

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  if (!contactModalOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden overscroll-contain">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setContactModalOpen(false)}
          className="absolute inset-0 bg-navy-950/65 backdrop-blur-md overflow-hidden overscroll-contain"
        />

        {/* Modal Window (Floating Crystal Glass) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-navy-950/65 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_25px_60px_rgba(2,6,17,0.9),inset_0_1px_1px_rgba(255,255,255,0.22)] p-6 sm:p-8 z-10 text-ivory overscroll-contain"
        >
          <div className="flex items-center justify-between pb-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sapphire-glow animate-pulse" />
              <h3 className="font-mono text-sm uppercase tracking-widest font-bold text-ivory">
                Direct Executive Contact
              </h3>
            </div>
            <HoverLightButton
              onClick={() => setContactModalOpen(false)}
              variant="ghost"
              className="p-1.5"
            >
              <X className="w-5 h-5" />
            </HoverLightButton>
          </div>

          {/* Soft Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          <div className="space-y-3.5 font-mono text-xs">
            {/* Email */}
            <div className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-sapphire-light/30 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/[0.05] text-sapphire-light">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Email</span>
                  <a href={`mailto:${profile.email}`} className="text-ivory hover:text-white transition-colors font-medium">
                    {profile.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(profile.email, 'email')}
                className="p-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-all hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] cursor-pointer"
                title="Copy Email"
              >
                {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-sapphire-light/30 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/[0.05] text-sapphire-light">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Telephone</span>
                  <a href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`} className="text-ivory hover:text-white transition-colors font-medium">
                    {profile.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(profile.phone, 'phone')}
                className="p-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-all hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] cursor-pointer"
                title="Copy Phone"
              >
                {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/[0.05] text-sapphire-glow">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Location</span>
                <span className="text-ivory font-medium">{profile.location}</span>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-sapphire-light/30 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/[0.05] text-[#0077b5]">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">LinkedIn</span>
                  <a
                    href="https://linkedin.com/in/evin-strand"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ivory hover:text-white transition-colors font-medium"
                  >
                    linkedin.com/in/evin-strand
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
