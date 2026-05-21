/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#1e0040',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'pulse-once': 'pulseOnce 1.5s ease-out',
        'scan': 'scanMove 2s linear infinite',
        'flicker': 'flicker 4s infinite',
      },
      backgroundImage: {
        'cyber-grid': "linear-gradient(rgba(168,85,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(168,85,247,0.5), 0 0 40px rgba(168,85,247,0.3)',
        'neon-sm': '0 0 10px rgba(168,85,247,0.4)',
      },
    },
  },
  plugins: [],
};
