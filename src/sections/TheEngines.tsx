import { motion } from 'framer-motion'
import { LayoutGrid, TrendingUp, Cpu } from 'lucide-react'
import HudLabel from '../components/brand/HudLabel'

const engines = [
  {
    icon: LayoutGrid,
    title: 'Asset Engine',
    subtitle: 'Real power assets, made liquid',
    desc: 'WATTRA standardizes, verifies, and finances distributed energy assets through on-chain liquidity infrastructure built for real-world power markets.',
    color: 'cyan',
    keywords: ['Matrix Vaults', 'Verified Cash Flow', 'Dynamic NAV', 'Risk Isolation', 'Asynchronous Redemption'],
  },
  {
    icon: TrendingUp,
    title: 'Yield Engine',
    subtitle: 'Stable energy revenue. Resilient on-chain yield',
    desc: 'Through $WATT, $sWATT, and $WTRA, WATTRA turns offline energy revenues into composable on-chain assets backed by verified cash flows, dynamic NAV, and geographically isolated vaults.',
    color: 'gold',
    keywords: ['$WATT Settlement', '$sWATT Energy Yield', '$WTRA Coordination', 'Protocol Revenue', 'Value Capture'],
  },
  {
    icon: Cpu,
    title: 'Dispatch Engine',
    subtitle: 'From static assets to intelligent power markets',
    desc: 'Through AI-driven VPP dispatch, WATTRA coordinates solar, storage, and flexible loads to capture additional value from grid volatility.',
    color: 'signal',
    keywords: ['AI Dispatch', 'VPP', 'Grid Volatility', 'Peak Demand', 'Alpha Yield'],
  },
]

const waves = [
  { d: 'M0,80 C50,80 100,60 150,80 C200,100 250,50 300,80 C350,110 400,40 450,80 C500,120 550,30 600,80 C650,130 700,20 750,80 C800,140 850,50 900,80', color: '#00E5CC', label: 'Solar' },
  { d: 'M0,90 C60,90 120,75 180,90 C240,105 300,60 360,90 C420,120 480,50 540,90 C600,135 660,40 720,90 C780,145 840,60 900,90', color: '#FCD34D', label: 'Storage' },
  { d: 'M0,100 C80,100 160,85 240,100 C320,115 400,70 480,100 C560,130 640,60 720,100 C800,140 880,75 900,100', color: '#ffffff', label: 'Grid', opacity: 0.4 },
  { d: 'M0,110 C100,110 200,95 300,110 C400,125 500,80 600,110 C700,140 800,70 900,110', color: '#6B7280', label: 'Load', opacity: 0.3 },
]

export default function TheEngines() {
  return (
    <section className="section relative" id="engines">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/wind-turbines.jpg"
          alt="Wind Turbines"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-bg-dark/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,204,0.04)_0%,transparent_50%)]" />
      </div>

      <div className="section-inner relative z-10">
        <HudLabel prefix="05" color="muted" size="sm">The Engine Stack</HudLabel>

        <motion.h2 className="text-section-lg font-display font-bold mb-6 mt-6"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          Real power assets, made liquid.<br />
          <span className="text-wattra-cyan">Stable energy revenue. Resilient on-chain yield.</span>
        </motion.h2>

        <motion.p className="text-body text-wattra-sec max-w-[560px] mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          WATTRA standardizes, verifies, and finances distributed energy assets through on-chain liquidity infrastructure built for real-world power markets.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {engines.map((e, i) => {
            const colorMap: Record<string, string> = {
              cyan: 'border-wattra-cyan/10 hover:border-wattra-cyan/30 bg-wattra-cyan/[0.02]',
              gold: 'border-wattra-gold/10 hover:border-wattra-gold/30 bg-wattra-gold/[0.02]',
              signal: 'border-wattra-signal/10 hover:border-wattra-signal/30 bg-wattra-signal/[0.02]',
            }
            const iconColorMap: Record<string, string> = {
              cyan: 'text-wattra-cyan',
              gold: 'text-wattra-gold',
              signal: 'text-wattra-signal',
            }
            const labelColorMap: Record<string, 'cyan' | 'gold' | 'signal'> = {
              cyan: 'cyan',
              gold: 'gold',
              signal: 'signal',
            }
            return (
              <motion.div key={i}
                className={`border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 cursor-default ${colorMap[e.color]}`}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}>
                <e.icon className={`w-8 h-8 mb-4 ${iconColorMap[e.color]}`} strokeWidth={1.5} />
                <h3 className="font-display font-bold text-[1.1rem] text-white mb-1">{e.title}</h3>
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-wattra-muted mb-3">{e.subtitle}</p>
                <p className="text-[0.85rem] leading-[1.6] text-wattra-sec mb-4">{e.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {e.keywords.map((kw, j) => (
                    <motion.span key={j}
                      className="px-2 py-1 text-[0.6rem] font-mono uppercase tracking-wider border rounded"
                      style={{
                        color: labelColorMap[e.color] === 'cyan' ? '#00E5CC' : labelColorMap[e.color] === 'gold' ? '#FCD34D' : '#EF4444',
                        borderColor: labelColorMap[e.color] === 'cyan' ? 'rgba(0,229,204,0.2)' : labelColorMap[e.color] === 'gold' ? 'rgba(252,211,77,0.2)' : 'rgba(239,68,68,0.2)',
                        background: labelColorMap[e.color] === 'cyan' ? 'rgba(0,229,204,0.05)' : labelColorMap[e.color] === 'gold' ? 'rgba(252,211,77,0.05)' : 'rgba(239,68,68,0.05)',
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 + j * 0.05 }}
                    >
                      {kw}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div className="w-full max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
          <div className="flex items-center justify-between mb-2 px-1">
            <HudLabel color="muted" size="sm" animate={false}>Real-time Dispatch</HudLabel>
          </div>
          <svg viewBox="0 0 900 160" fill="none" className="w-full h-auto" preserveAspectRatio="none">
            {waves.map((w, i) => (
              <motion.path key={i}
                d={w.d}
                stroke={w.color} strokeWidth="1.5" strokeLinecap="round" fill="none"
                opacity={w.opacity ?? 0.8}
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2 + i * 0.2, ease: 'easeOut' }}
              />
            ))}
          </svg>

          <div className="flex justify-center gap-6 mt-3 flex-wrap">
            {waves.map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: w.color, opacity: w.opacity ?? 1 }} />
                <HudLabel color="muted" size="sm" animate={false}>{w.label}</HudLabel>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}