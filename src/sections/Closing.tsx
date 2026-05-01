import { motion } from 'framer-motion'
import HudLabel from '../components/brand/HudLabel'
import SignalCta from '../components/brand/SignalCta'
import Logo from '../components/brand/Logo'

interface ClosingProps {
  onOpenManifesto: () => void
  onOpenJoin: () => void
  onOpenPartner: () => void
}

const constellationNodes = [
  { cx: 200, cy: 150 }, { cx: 450, cy: 80 }, { cx: 750, cy: 120 }, { cx: 1000, cy: 200 },
  { cx: 300, cy: 350 }, { cx: 600, cy: 400 }, { cx: 900, cy: 380 },
  { cx: 150, cy: 550 }, { cx: 500, cy: 600 }, { cx: 850, cy: 580 },
  { cx: 350, cy: 720 }, { cx: 700, cy: 750 }, { cx: 1050, cy: 680 },
]

const constellationLinks = [
  [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6],
  [1, 5], [2, 6], [4, 7], [5, 8], [6, 9], [8, 10], [10, 11], [11, 12], [7, 10],
]

export default function Closing({ onOpenManifesto, onOpenJoin, onOpenPartner }: ClosingProps) {
  return (
    <section className="section relative text-center overflow-hidden" id="closing">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/energy-sunrise.jpg"
          alt="Energy Sunrise"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-bg-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-bg-deep/50" />
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <svg viewBox="0 0 1200 800" fill="none" className="w-full h-full">
          {constellationLinks.map(([from, to], i) => (
            <motion.line key={`line-${i}`}
              x1={constellationNodes[from].cx} y1={constellationNodes[from].cy}
              x2={constellationNodes[to].cx} y2={constellationNodes[to].cy}
              stroke="rgba(0,229,204,0.2)" strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.8 }}
            />
          ))}
          {constellationNodes.map((n, i) => (
            <motion.circle key={`node-${i}`} cx={n.cx} cy={n.cy} r="2" fill="#00E5CC"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
            />
          ))}
        </svg>
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,204,0.06) 0%, transparent 70%)' }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="section-inner relative z-10">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Logo size="lg" showText={false} className="justify-center" />
        </motion.div>

        <motion.h2 className="text-section font-display font-bold mb-10"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          Build the energy network<br />that powers the future.
        </motion.h2>

        <motion.div className="flex justify-center gap-4 flex-wrap mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
          <SignalCta onClick={onOpenManifesto} variant="ghost" showArrow={false}>Read the Manifesto</SignalCta>
          <SignalCta onClick={onOpenJoin} variant="primary">Join the Network</SignalCta>
          <SignalCta onClick={onOpenPartner} variant="signal">Partner with WATTRA</SignalCta>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <HudLabel color="muted" size="md" animate={false}>
            The Distributed Energy Provider for the Intelligence Age.
          </HudLabel>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <HudLabel color="muted" size="lg" animate={false}>WATTRA</HudLabel>
      </motion.div>
    </section>
  )
}