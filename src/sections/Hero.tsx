import { motion } from 'framer-motion'
import HudLabel from '../components/brand/HudLabel'
import SignalCta from '../components/brand/SignalCta'

interface HeroProps {
  onOpenManifesto: () => void
  onOpenJoin: () => void
}

export default function Hero({ onOpenManifesto, onOpenJoin }: HeroProps) {
  return (
    <section className="section hero-section relative" id="hero">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-horizon.jpg"
          alt="Horizon"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-bg-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/50 via-transparent to-bg-deep" />
      </div>

      <div className="accent-line right-[15%] top-[10%] h-[80%]" />

      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,229,204,0.08)_0%,transparent_60%)]" />
        <svg className="absolute bottom-0 left-0 w-full h-[60%]" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="none">
          <motion.path
            d="M0,350 C200,350 300,300 400,280 C500,260 600,320 700,250 C800,180 900,300 1000,200 C1100,100 1200,150 1200,150"
            stroke="url(#igniteGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <motion.path
            d="M0,370 C150,370 250,340 400,320 C550,300 650,350 800,280 C950,210 1050,320 1200,250"
            stroke="url(#igniteGradient2)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2.5, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <defs>
            <linearGradient id="igniteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00E5CC" stopOpacity="0" />
              <stop offset="30%" stopColor="#00E5CC" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#00E5CC" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00E5CC" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="igniteGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00E5CC" stopOpacity="0" />
              <stop offset="40%" stopColor="#00E5CC" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00E5CC" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-[15%] right-[8%] z-10 hidden lg:block">
        <motion.div
          className="bg-bg-mid/60 backdrop-blur-md border border-white/[0.06] rounded-lg p-4 space-y-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <HudLabel prefix="01" color="cyan" size="sm">POWER</HudLabel>
          <HudLabel prefix="02" color="gold" size="sm">LIQUIDITY</HudLabel>
          <HudLabel prefix="03" color="signal" size="sm">DISPATCH</HudLabel>
        </motion.div>
      </div>

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <HudLabel prefix="01" color="muted" size="sm" animate={false}>Manifesto</HudLabel>
        </motion.div>

        <h1 className="text-hero font-display font-bold mb-8 mt-6">
          <motion.span className="block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}>
            Power the
          </motion.span>
          <motion.span className="block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}>
            Intelligence
          </motion.span>
          <motion.span className="block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}>
            Age.
          </motion.span>
        </h1>

        <motion.p className="text-body text-[#9CA3AF] max-w-[520px] mb-10 drop-shadow-sm" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}>
          WATTRA is building the world's largest distributed energy provider, turning real power assets into a liquid, programmable energy network.
        </motion.p>

        <motion.div className="flex gap-4 flex-wrap" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.75 }}>
          <SignalCta onClick={onOpenJoin} variant="primary">Explore the Network</SignalCta>
          <SignalCta onClick={onOpenManifesto} variant="ghost" showArrow={false}>Read the Manifesto</SignalCta>
        </motion.div>
      </div>
    </section>
  )
}