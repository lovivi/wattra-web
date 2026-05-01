import { motion } from 'framer-motion'
import HudLabel from '../components/brand/HudLabel'

const nodePositions = [
  { id: 'industry', label: 'Industry' },
  { id: 'ai', label: 'AI Compute' },
  { id: 'homes', label: 'Homes' },
  { id: 'cities', label: 'Cities' },
  { id: 'mobility', label: 'Mobility' },
]

export default function TheProblem() {
  return (
    <section className="section relative" id="problem">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/electrification-city.jpg"
          alt="Electrification"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-bg-dark/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,204,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="section-inner flex flex-col items-center text-center relative z-10">
        <HudLabel prefix="02" color="muted" size="sm">The Challenge</HudLabel>

        <motion.h2 className="text-section-lg font-display font-bold mb-8 mt-6"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <motion.span className="block" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            Everything is becoming electric.
          </motion.span>
          <motion.span className="block" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            The grid was not built for this.
          </motion.span>
        </motion.h2>

        <motion.p className="text-body text-wattra-sec max-w-[560px] mb-10"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
          AI compute, transportation, industry, homes, and cities are shifting from fossil fuels to electricity at once. Centralized power systems expand slowly, break under volatility, and cannot absorb the speed, scale, and flexibility required by a renewable world.
        </motion.p>

        <motion.div className="w-full max-w-[640px] mb-6" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
          <svg viewBox="0 0 640 360" fill="none" className="w-full h-auto">
            <motion.line x1="320" y1="180" x2="320" y2="40" stroke="#00E5CC" strokeWidth="1.2" opacity="0.5"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }} />
            <motion.line x1="320" y1="180" x2="520" y2="100" stroke="#00E5CC" strokeWidth="1.2" opacity="0.5"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }} />
            <motion.line x1="320" y1="180" x2="460" y2="300" stroke="#00E5CC" strokeWidth="1.2" opacity="0.5"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }} />
            <motion.line x1="320" y1="180" x2="180" y2="300" stroke="#00E5CC" strokeWidth="1.2" opacity="0.5"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }} />
            <motion.line x1="320" y1="180" x2="120" y2="100" stroke="#00E5CC" strokeWidth="1.2" opacity="0.5"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }} />

            {[
              { cx: 320, cy: 40 },
              { cx: 520, cy: 100 },
              { cx: 460, cy: 300 },
              { cx: 180, cy: 300 },
              { cx: 120, cy: 100 },
            ].map((n, i) => (
              <motion.circle key={i} cx={n.cx} cy={n.cy} r="10" fill="#0D0F14" stroke="#00E5CC" strokeWidth="1.5"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }} />
            ))}

            <motion.circle cx="320" cy="180" r="16" fill="#00E5CC"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }} />
            <motion.text x="320" y="185" fill="#0A0C10" fontSize="10" fontWeight="600" textAnchor="middle"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              POWER
            </motion.text>
          </svg>

          <div className="flex justify-center gap-6 mt-4 flex-wrap">
            {nodePositions.map((n, i) => (
              <motion.div key={n.id} className="flex items-center gap-2"
                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.1 + i * 0.08 }}>
                <div className="w-2 h-2 rounded-full bg-wattra-cyan/60" />
                <HudLabel color="muted" size="sm" animate={false}>{n.label}</HudLabel>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="w-full max-w-[800px]"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
          <div className="flex items-center justify-between mb-2 px-1">
            <HudLabel color="muted" size="sm" animate={false}>Grid Capacity</HudLabel>
            <HudLabel color="signal" size="sm" animate={false}>Demand Surge →</HudLabel>
          </div>
          <svg viewBox="0 0 800 220" fill="none" className="w-full h-auto">
            <line x1="0" y1="180" x2="800" y2="180" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="8 4" />
            <motion.path
              d="M0,180 C130,180 220,180 310,180 C360,180 390,165 420,135 C450,105 470,195 500,150 C530,105 550,210 580,95 C610,55 630,235 660,125 C690,80 710,180 740,40 L800,-10"
              stroke="#EF4444" strokeWidth="2" strokeLinecap="round" fill="none"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
              transition={{ duration: 2.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}