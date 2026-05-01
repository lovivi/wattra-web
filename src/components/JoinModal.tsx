import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Mail, User, Globe, ArrowRight } from 'lucide-react'

export default function JoinModal() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', role: 'investor', region: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission — stored in localStorage for demo
    const entries = JSON.parse(localStorage.getItem('watt_join') || '[]')
    entries.push({ ...form, time: new Date().toISOString() })
    localStorage.setItem('watt_join', JSON.stringify(entries))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        className="text-center py-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <CheckCircle className="w-12 h-12 text-wattra-cyan mx-auto mb-4" strokeWidth={1.5} />
        <h4 className="font-display font-bold text-lg text-white mb-2">Application Received</h4>
        <p className="text-body text-wattra-sec max-w-[360px] mx-auto">
          Thank you for your interest. The WATTRA team reviews every submission individually. You will hear from us within 5 business days.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-body text-wattra-sec mb-2">
        Join the early network. Whether you are an energy asset owner, liquidity provider, or strategic partner, we want to hear from you.
      </p>

      <div>
        <label className="block font-mono text-[0.6rem] uppercase tracking-[0.15em] text-wattra-muted mb-1.5">Full Name</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wattra-muted" />
          <input
            required
            type="text"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-md py-2.5 pl-10 pr-3 text-[0.9rem] text-white placeholder:text-wattra-muted/50 focus:outline-none focus:border-wattra-cyan/40 transition-colors"
            placeholder="Your name"
          />
        </div>
      </div>

      <div>
        <label className="block font-mono text-[0.6rem] uppercase tracking-[0.15em] text-wattra-muted mb-1.5">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wattra-muted" />
          <input
            required
            type="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-md py-2.5 pl-10 pr-3 text-[0.9rem] text-white placeholder:text-wattra-muted/50 focus:outline-none focus:border-wattra-cyan/40 transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label className="block font-mono text-[0.6rem] uppercase tracking-[0.15em] text-wattra-muted mb-1.5">I am a</label>
        <div className="grid grid-cols-2 gap-2">
          {['investor', 'asset_owner', 'developer', 'other'].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setForm({ ...form, role: r })}
              className={`py-2 px-3 rounded-md border text-[0.8rem] font-medium transition-all ${
                form.role === r
                  ? 'border-wattra-cyan/40 bg-wattra-cyan/[0.06] text-wattra-cyan'
                  : 'border-white/[0.08] bg-white/[0.02] text-wattra-sec hover:border-white/20'
              }`}
            >
              {r.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-mono text-[0.6rem] uppercase tracking-[0.15em] text-wattra-muted mb-1.5">Region</label>
        <div className="relative">
          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wattra-muted" />
          <input
            type="text"
            value={form.region}
            onChange={e => setForm({ ...form, region: e.target.value })}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-md py-2.5 pl-10 pr-3 text-[0.9rem] text-white placeholder:text-wattra-muted/50 focus:outline-none focus:border-wattra-cyan/40 transition-colors"
            placeholder="e.g. North America, Europe, APAC"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full btn btn-primary justify-center mt-2"
      >
        Submit Application <ArrowRight className="w-4 h-4" />
      </button>

      <p className="font-mono text-[0.55rem] text-wattra-muted/60 text-center pt-1">
        By submitting, you agree to receive network updates. No spam.
      </p>
    </form>
  )
}
