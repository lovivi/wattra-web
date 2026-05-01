import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface SignalCtaProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'ghost' | 'signal'
  size?: 'sm' | 'md' | 'lg'
  showArrow?: boolean
  disabled?: boolean
  className?: string
}

export default function SignalCta({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  showArrow = true,
  disabled = false,
  className = '',
}: SignalCtaProps) {
  const variantMap = {
    primary: 'bg-wattra-cyan text-bg-deep hover:shadow-[0_0_28px_rgba(0,229,204,0.35)]',
    ghost: 'border border-white/10 text-wattra-sec bg-white/[0.02] hover:border-wattra-cyan/60 hover:text-wattra-cyan hover:bg-wattra-cyan/[0.04]',
    signal: 'bg-wattra-signal text-white hover:brightness-110',
  }

  const sizeMap = {
    sm: 'px-4 py-2 text-[0.7rem]',
    md: 'px-6 py-3 text-[0.8rem]',
    lg: 'px-8 py-4 text-[0.9rem]',
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center gap-2 font-display font-semibold tracking-[0.02em] rounded-[4px]
        transition-all duration-300 hover:-translate-y-0.5
        ${variantMap[variant]}
        ${sizeMap[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </motion.button>
  )
}