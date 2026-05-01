import { motion } from 'framer-motion'
import HudLabel from '../components/brand/HudLabel'

export default function TheGap() {
  const cells = Array.from({ length: 24 })

  return (
    <section className="section relative overflow-hidden" id="gap">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/solar-panels.jpg"
          alt="Solar Panels"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-bg-deep/80" />
      </div>

      <div className="absolute inset-0 z-[1]">
        {Array.from({ length: 20 }).map((_, i) => {
          const left = 20 + ((i * 37) % 60)
          const top = 20 + ((i * 53) % 60)
          const duration = 2 + (i % 3)
          const delay = (i * 0.3) % 2
          return (
            <motion.div key={i}
              className="absolute w-[3px] h-[3px] rounded-full bg-wattra-gold"
              style={{ left: `${left}%`, top: `${top}%` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration, repeat: Infinity, delay }}
            />
          )
        })}
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[200px] z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-[300px] h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, #FCD34D, transparent)', filter: 'blur(1px)' }}
          initial={{ left: '-15%' }}
          animate={{ left: '115%' }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-[60%] -translate-y-1/2 w-[200px] h-[1.5px]"
          style={{ background: 'linear-gradient(90deg, transparent, #00E5CC, transparent)', filter: 'blur(0.5px)' }}
          initial={{ right: '-10%' }}
          animate={{ right: '115%' }}
          transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 3, ease: 'linear', delay: 1.5 }}
        />
      </div>

      <div className="section-inner text-center relative z-10">
        <HudLabel prefix="03" color="muted" size="sm">The Gap</HudLabel>

        <motion.h2 className="text-section-lg font-display font-bold mb-8 mt-6"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          Distributed power is inevitable.<br />
          <span className="text-wattra-cyan">Financing it is the bottleneck.</span>
        </motion.h2>

        <motion.p className="text-body text-wattra-sec max-w-[560px] mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          Solar, storage, microgrids, and C&I energy assets can scale faster than centralized infrastructure, but traditional finance was not designed for fragmented, real-world power assets.
        </motion.p>

        <motion.div className="relative w-full max-w-[520px] mx-auto mb-10"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
          <motion.div className="absolute -top-[5%] -left-[10%] w-[2px] h-[110%] z-10"
            style={{ background: 'linear-gradient(to bottom, transparent, #00E5CC, transparent)', filter: 'blur(0.5px)' }}
            initial={{ left: '-10%', opacity: 0 }}
            whileInView={{ left: '110%', opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          />
          <div className="grid grid-cols-6 gap-1.5">
            {cells.map((_, i) => (
              <motion.div key={i} className="aspect-square rounded-sm"
                style={{ background: 'rgba(0,229,204,0.05)', border: '1px solid rgba(0,229,204,0.15)' }}
                initial={{ opacity: 0.3, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1, background: 'rgba(0,229,204,0.15)', borderColor: 'rgba(0,229,204,0.4)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + (i % 6) * 0.08 + Math.floor(i / 6) * 0.08 }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[640px] mx-auto"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
          <div className="border border-wattra-gold/10 bg-wattra-gold/[0.02] rounded-lg p-5 text-left">
            <HudLabel color="gold" size="sm" animate={false}>Crypto Capital</HudLabel>
            <p className="text-[0.9rem] text-wattra-sec leading-relaxed mt-2">Hundreds of billions in on-chain liquidity searching for real-world yield.</p>
          </div>
          <div className="border border-wattra-cyan/10 bg-wattra-cyan/[0.02] rounded-lg p-5 text-left">
            <HudLabel color="cyan" size="sm" animate={false}>Energy Assets</HudLabel>
            <p className="text-[0.9rem] text-wattra-sec leading-relaxed mt-2">Real power assets generating cash flow, trapped behind slow, illiquid channels.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}