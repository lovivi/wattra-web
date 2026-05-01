/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#0A0C10',
        'bg-dark': '#0D0F14',
        'bg-mid': '#111318',
        'bg-light': '#FAFBFC',
        'wattra-text': '#F0F1F5',
        'wattra-sec': '#6B7280',
        'wattra-muted': '#3D4552',
        'wattra-cyan': '#00E5CC',
        'wattra-cyan-dim': 'rgba(0,229,204,0.15)',
        'wattra-cyan-glow': 'rgba(0,229,204,0.4)',
        'wattra-signal': '#EF4444',
        'wattra-gold': '#FCD34D',
        'wattra-border': 'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
