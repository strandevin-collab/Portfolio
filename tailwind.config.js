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
        navy: {
          950: '#040812',
          900: '#070f20',
          850: '#0b162e',
          800: '#0f1f42',
          750: '#142754',
          700: '#1a336c',
          600: '#254796',
          500: '#3b82f6',
        },
        ivory: {
          DEFAULT: '#fbf9f5',
          50: '#ffffff',
          100: '#fbf9f5',
          200: '#f5f0e6',
          300: '#ece3d2',
          400: '#ddd0bb',
          500: '#c5b497',
        },
        sapphire: {
          DEFAULT: '#2563eb',
          light: '#60a5fa',
          glow: '#38bdf8',
          dark: '#1d4ed8',
          deep: '#1e3a8a',
        },
        surface: {
          dark: '#060c18',
          card: '#0a1426',
          'card-hover': '#0f1c35',
          border: 'rgba(96, 165, 250, 0.15)',
          'border-highlight': 'rgba(147, 197, 253, 0.35)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
        display: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'navy-card': '0 15px 35px -10px rgba(2, 6, 17, 0.8), 0 0 1px 1px rgba(96, 165, 250, 0.12)',
        'navy-card-hover': '0 25px 45px -12px rgba(2, 6, 17, 0.95), 0 0 25px 2px rgba(56, 189, 248, 0.2)',
        'ivory-glow': '0 0 25px -5px rgba(251, 249, 245, 0.25)',
        'sapphire-glow': '0 0 25px -5px rgba(37, 99, 235, 0.35)',
      }
    },
  },
  plugins: [],
}
