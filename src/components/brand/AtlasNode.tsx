import { motion } from 'framer-motion'

interface AtlasNodeProps {
  cx: number
  cy: number
  label?: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'cyan' | 'gold' | 'signal'
  showPulse?: boolean
  className?: string
}

export default function AtlasNode({
  cx,
  cy,
  label,
  size = 'md',
  color = 'cyan',
  showPulse = true,
  className = '',
}: AtlasNodeProps) {
  const sizeMap = {
    sm: { r: 3, pulseR: 8 },
    md: { r: 5, pulseR: 12 },
    lg: { r: 8, pulseR: 18 },
  }

  const colorMap = {
    cyan: '#00E5CC',
    gold: '#FCD34D',
    signal: '#EF4444',
  }

  const { r, pulseR } = sizeMap[size]
  const fill = colorMap[color]

  return (
    <g className={className}>
      {showPulse && (
        <motion.circle
          cx={cx}
          cy={cy}
          r={pulseR}
          fill="none"
          stroke={fill}
          strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeOut',
          }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      )}
      <motion.circle
        cx={cx}
        cy={cy}
        r={r}
        fill={fill}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      />
      {label && (
        <motion.text
          x={cx}
          y={cy + r + 16}
          textAnchor="middle"
          fill="#6B7280"
          fontSize="10"
          fontFamily="ui-monospace, SFMono-Regular, Consolas, monospace"
          fontWeight="500"
          letterSpacing="0.1em"
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {label.toUpperCase()}
        </motion.text>
      )}
    </g>
  )
}