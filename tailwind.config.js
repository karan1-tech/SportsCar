/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        carbon: {
          50: '#f5f5f6',
          100: '#e5e5e7',
          200: '#cdced1',
          300: '#abadb2',
          400: '#83858c',
          500: '#686a71',
          600: '#585960',
          700: '#4b4c52',
          800: '#424247',
          900: '#3a3a3e',
          950: '#0a0a0b',
        },
        accent: {
          red: '#e63946',
          glow: '#ff4d5a',
          amber: '#f5a623',
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', textShadow: '0 0 20px rgba(230,57,70,0.3)' },
          '50%': { opacity: '1', textShadow: '0 0 40px rgba(230,57,70,0.6)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
