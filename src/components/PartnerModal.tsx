import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Building2, Mail, MessageSquare, ArrowRight, Users } from 'lucide-react'

export default function PartnerModal() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ org: '', email: '', type: 'energy', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const entries = JSON.parse(localStorage.getItem('watt_partner') || '[]')
    entries.push({ ...form, time: new Date().toISOString() })
    localStorage.setItem('watt_partner', JSON.stringify(entries))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div className="text-center py-8" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
        <CheckCircle className="w-12 h-12 text-wattra-cyan mx-auto mb-4" strokeWidth={1.5} />
        <h4 className="font-display font-bold text-lg text-white mb-2">Message Sent</h4>
        <p className="text-body text-wattra-sec max-w-[360px] mx-auto">
          Our partnerships team will review your inquiry and reach out within 3 business days.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-body text-wattra-sec mb-2">
        WATTRA partners with energy developers, IPPs, EPCs, financiers, and technology providers across global markets.
      </p>

      <div>
        <label className="block font-mono text-[0.6rem] uppercase tracking-[0.15em] text-wattra-muted mb-1.5">Organization</label>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wattra-muted" />
          <input required type="text" value={form.org}
            onChange={e => setForm({ ...form, org: e.target.value })}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-md py-2.5 pl-10 pr-3 text-[0.9rem] text-white placeholder:text-wattra-muted/50 focus:outline-none focus:border-wattra-cyan/40 transition-colors"
            placeholder="Company or project name" />
        </div>
      </div>

      <div>
        <label className="block font-mono text-[0.6rem] uppercase tracking-[0.15em] text-wattra-muted mb-1.5">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wattra-muted" />
          <input required type="email" value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-md py-2.5 pl-10 pr-3 text-[0.9rem] text-white placeholder:text-wattra-muted/50 focus:outline-none focus:border-wattra-cyan/40 transition-colors"
            placeholder="partnerships@yourcompany.com" />
        </div>
      </div>

      <div>
        <label className="block font-mono text-[0.6rem] uppercase tracking-[0.15em] text-wattra-muted mb-1.5">Partnership Type</label>
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'energy', icon: Building2, label: 'Energy Dev' },
            { key: 'finance', icon: Users, label: 'Finance / IPP' },
            { key: 'tech', icon: MessageSquare, label: 'Technology' },
            { key: 'other', icon: ArrowRight, label: 'Other' },
          ].map(({ key, icon: Icon, label }) => (
            <button key={key} type="button" onClick={() => setForm({ ...form, type: key })}
              className={`flex items-center gap-1.5 py-1.5 px-3 rounded-md border text-[0.75rem] transition-all ${
                form.type === key
                  ? 'border-wattra-cyan/40 bg-wattra-cyan/[0.06] text-wattra-cyan'
                  : 'border-white/[0.08] bg-white/[0.02] text-wattra-sec hover:border-white/20'
              }`}>
              <Icon className="w-3.5 h-3.5" /> {label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-mono text-[0.6rem] uppercase tracking-[0.15em] text-wattra-muted mb-1.5">Message</label>
        <textarea rows={3} value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-md py-2.5 px-3 text-[0.9rem] text-white placeholder:text-wattra-muted/50 focus:outline-none focus:border-wattra-cyan/40 transition-colors resize-none"
          placeholder="Tell us about your project, pipeline, or partnership interest..." />
      </div>

      <button type="submit" className="w-full btn btn-primary justify-center mt-2">
        Send Inquiry <ArrowRight className="w-4 h-4" />
      </button>

      <p className="font-mono text-[0.55rem] text-wattra-muted/60 text-center pt-1">
        All inquiries are confidential. NDA available upon request.
      </p>
    </form>
  )
}
