import { motion } from 'framer-motion'

export default function ManifestoModal() {
  return (
    <div className="space-y-6">
      <div className="text-body text-wattra-sec leading-relaxed">
        <p className="mb-4">
          The world is electrifying faster than the grid can support. AI data centers, EV fleets, industrial automation, and smart cities are converging on a single, overwhelming demand: more power, delivered more flexibly, at more points across the network.
        </p>
        <p className="mb-4">
          The centralized model — giant power plants, long transmission lines, slow regulatory cycles — was designed for a different era. It cannot absorb the speed, scale, and volatility of a renewable-first, compute-heavy economy.
        </p>
        <p className="mb-4">
          Distributed energy — solar, storage, microgrids, flexible loads — is the inevitable architecture of the future. But it faces a critical bottleneck: <strong className="text-white">financing</strong>.
        </p>
        <p className="mb-4">
          Traditional capital markets were built for large, consolidated assets. They cannot efficiently price, verify, and trade fragmented, real-world power infrastructure across thousands of locations and owners.
        </p>
        <p className="mb-4">
          Meanwhile, hundreds of billions in on-chain capital are searching for productive, resilient, real-world yield. Crypto has liquidity. The physical world has cash flow. The bridge between them has not yet been built.
        </p>
        <p>
          <strong className="text-wattra-cyan">WATTRA is that bridge.</strong>
        </p>
      </div>

      <div className="border-t border-white/[0.06] pt-5">
        <h4 className="font-display font-bold text-sm text-white mb-3 tracking-wide">Core Thesis</h4>
        <motion.ul className="space-y-2.5 text-[0.85rem] text-wattra-sec">
          {[
            'Distributed energy assets are the fastest-scaling power infrastructure on Earth.',
            'On-chain capital is the largest pool of programmable liquidity ever created.',
            'The gap between them is a verification, standardization, and coordination problem — not a technology problem.',
            'Whoever solves that gap will own the financing layer of the energy transition.',
          ].map((item, i) => (
            <motion.li key={i} className="flex gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
            >
              <span className="text-wattra-cyan mt-1 shrink-0">→</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="border-t border-white/[0.06] pt-4 text-center">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-wattra-muted">
          WATTRA · Distributed Energy Provider for the Intelligence Age
        </p>
      </div>
    </div>
  )
}
