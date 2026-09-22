/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#090A0F',
        'background-secondary': '#0D1117',
        'surface-card': 'rgba(18, 24, 38, 0.7)',
        'surface-card-hover': 'rgba(24, 32, 50, 0.85)',
        accent: {
          blue: '#3B82F6',
          'blue-light': '#60A5FA',
          violet: '#8B5CF6',
          'violet-light': '#A78BFA',
        },
        content: {
          heading: '#F3F4F6',
          body: '#9CA3AF',
          muted: '#6B7280',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          medium: 'rgba(255, 255, 255, 0.15)',
          highlight: 'rgba(59, 130, 246, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px -10px rgba(59, 130, 246, 0.15)',
        'glow-blue': '0 0 30px -5px rgba(59, 130, 246, 0.25)',
        'glow-violet': '0 0 30px -5px rgba(139, 92, 246, 0.25)',
      },
      backdropBlur: {
        'glass': '16px',
      }
    },
  },
  plugins: [],
}
