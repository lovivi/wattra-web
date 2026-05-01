import { motion } from 'framer-motion'
import HudLabel from '../components/brand/HudLabel'
import AtlasNode from '../components/brand/AtlasNode'

const nodes = [
  { cx: 200, cy: 170, label: 'North America', abbr: 'NA' },
  { cx: 320, cy: 140, label: 'Europe', abbr: 'EU' },
  { cx: 460, cy: 150, label: 'Asia Pacific', abbr: 'APAC' },
  { cx: 600, cy: 130, label: 'Middle East', abbr: 'ME' },
  { cx: 700, cy: 190, label: 'East Asia', abbr: 'EA' },
  { cx: 340, cy: 310, label: 'Latin America', abbr: 'LATAM' },
]

const links = [
  { x1: 200, y1: 170, x2: 460, y2: 150 },
  { x1: 460, y1: 150, x2: 700, y2: 190 },
  { x1: 200, y1: 170, x2: 340, y2: 310 },
  { x1: 340, y1: 310, x2: 700, y2: 190 },
  { x1: 460, y1: 150, x2: 340, y2: 310 },
  { x1: 200, y1: 170, x2: 700, y2: 190 },
]

export default function Network() {
  return (
    <section className="section relative" id="network">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/global-network.jpg"
          alt="Global Network"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-bg-dark/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,204,0.03)_0%,transparent_60%)]" />
      </div>

      <div className="section-inner text-center relative z-10">
        <HudLabel prefix="06" color="muted" size="sm">The WATTRA Network</HudLabel>

        <motion.h2 className="text-section-lg font-display font-bold mb-8 mt-6"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          WATTRA connects both sides<br />of the power economy.
        </motion.h2>
        <motion.p className="text-body text-wattra-sec max-w-[520px] mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          We bring high-yield, real-world energy cash flows on-chain, while giving distributed power assets a faster, global financing channel.
        </motion.p>

        <motion.div className="relative w-full max-w-[900px] mx-auto"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
          <svg viewBox="0 0 900 420" fill="none" className="w-full h-auto">
            <ellipse cx="220" cy="180" rx="130" ry="90" fill="rgba(255,255,255,0.015)" />
            <ellipse cx="480" cy="160" rx="100" ry="70" fill="rgba(255,255,255,0.015)" />
            <ellipse cx="720" cy="200" rx="150" ry="100" fill="rgba(255,255,255,0.015)" />
            <ellipse cx="340" cy="330" rx="90" ry="70" fill="rgba(255,255,255,0.015)" />

            {links.map((link, i) => (
              <g key={`link-${i}`}>
                <line
                  x1={link.x1} y1={link.y1} x2={link.x2} y2={link.y2}
                  stroke="rgba(0,229,204,0.15)" strokeWidth="1" strokeDasharray="6 4"
                />
                <motion.circle r="3" fill="#00E5CC"
                  initial={{ cx: link.x1, cy: link.y1, opacity: 0 }}
                  animate={{
                    cx: [link.x1, link.x2],
                    cy: [link.y1, link.y2],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, repeatDelay: 2, ease: 'linear' }}
                />
              </g>
            ))}

            {nodes.map((n, i) => (
              <AtlasNode
                key={i}
                cx={n.cx}
                cy={n.cy}
                size="md"
                color="cyan"
                showPulse={true}
              />
            ))}
          </svg>

          <div className="flex justify-center gap-5 mt-4 flex-wrap">
            {nodes.map((n, i) => (
              <motion.div key={i} className="flex items-center gap-2"
                initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 + i * 0.06 }}>
                <div className="w-2 h-2 rounded-full bg-wattra-cyan/70" />
                <HudLabel color="muted" size="sm" animate={false}>{n.label}</HudLabel>
              </motion.div>
            ))}
          </div>

          <motion.div className="absolute bottom-[5%] right-[5%] bg-bg-mid/85 backdrop-blur-md border border-wattra-border rounded px-5 py-4 text-left"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 1 }}>
            <div className="flex justify-between gap-8 py-1">
              <HudLabel color="muted" size="sm" animate={false}>Network Status</HudLabel>
              <HudLabel color="cyan" size="sm" animate={false}>ACTIVE</HudLabel>
            </div>
            <div className="flex justify-between gap-8 py-1">
              <HudLabel color="muted" size="sm" animate={false}>Active Nodes</HudLabel>
              <HudLabel color="cyan" size="sm" animate={false}>124</HudLabel>
            </div>
            <div className="flex justify-between gap-8 py-1">
              <HudLabel color="muted" size="sm" animate={false}>Throughput</HudLabel>
              <HudLabel color="cyan" size="sm" animate={false}>2.4 GW</HudLabel>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}