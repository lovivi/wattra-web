import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeMap = {
    sm: { width: 32, height: 32, textSize: 'text-sm' },
    md: { width: 48, height: 48, textSize: 'text-lg' },
    lg: { width: 64, height: 64, textSize: 'text-2xl' },
  }

  const { width, height, textSize } = sizeMap[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <svg
          width={width}
          height={height}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="30" fill="rgba(0, 229, 204, 0.05)" stroke="rgba(0, 229, 204, 0.2)" strokeWidth="1" />
          <motion.path
            d="M16 20L24 44L32 28L40 44L48 20"
            stroke="#00E5CC"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="rgba(0, 229, 204, 0.3)"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: [0, 0.5, 0], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
        </svg>
      </motion.div>

      {showText && (
        <motion.div
          className={`${textSize} font-display font-bold tracking-[0.1em] uppercase text-wattra-text`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          WATTRA
        </motion.div>
      )}
    </div>
  )
}