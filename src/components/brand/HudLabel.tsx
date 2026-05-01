import { motion } from 'framer-motion'

interface HudLabelProps {
  children: React.ReactNode
  prefix?: string
  color?: 'cyan' | 'gold' | 'signal' | 'muted'
  size?: 'sm' | 'md' | 'lg'
  animate?: boolean
  className?: string
}

export default function HudLabel({
  children,
  prefix,
  color = 'muted',
  size = 'md',
  animate = true,
  className = '',
}: HudLabelProps) {
  const colorMap = {
    cyan: 'text-wattra-cyan',
    gold: 'text-wattra-gold',
    signal: 'text-wattra-signal',
    muted: 'text-wattra-muted',
  }

  const sizeMap = {
    sm: 'text-[0.6rem]',
    md: 'text-[0.75rem]',
    lg: 'text-[0.9rem]',
  }

  const Component = animate ? motion.div : 'div'
  const animateProps = animate
    ? {
        initial: { opacity: 0, y: 4 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4 },
      }
    : {}

  return (
    <Component
      className={`font-mono uppercase tracking-[0.2em] ${colorMap[color]} ${sizeMap[size]} ${className}`}
      {...animateProps}
    >
      {prefix && <span className="text-wattra-cyan mr-2">{prefix}</span>}
      {children}
    </Component>
  )
}