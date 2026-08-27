/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050d1a',
          900: '#0a1f44',
          800: '#0f2a5c',
          700: '#15336c',
          600: '#1e4287',
          500: '#2a5699',
          400: '#3a6db5',
          300: '#5a8fd0',
          200: '#8fb4e0',
          100: '#c4d8ee',
          50: '#e8f0fa',
        },
        gold: {
          600: '#b8860b',
          500: '#d4a017',
          400: '#e6b832',
          300: '#f0cd5c',
          200: '#f5db85',
          100: '#fae9b8',
        },
        accent: {
          600: '#0d7c66',
          500: '#12a087',
          400: '#1ec4a8',
          300: '#5adbc4',
        },
        success: {
          600: '#15803d',
          500: '#22c55e',
          400: '#4ade80',
        },
        warning: {
          600: '#b45309',
          500: '#f59e0b',
          400: '#fbbf24',
        },
        error: {
          600: '#b91c1c',
          500: '#dc2626',
          400: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-delayed': 'fadeInUp 0.7s ease-out 0.2s both',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
