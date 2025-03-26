/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          'ef-dark': '#0e141d',
          'ef-yellow': '#ffc103',
          'ef-orange': '#ff7902',
          'ef-blue': '#4eb3ee',
          'ef-navy': '#32719d',
          'ef-gray': '#eceff5',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'slide-up': 'slideUp 0.5s ease-out',
          'slide-left': 'slideLeft 0.5s ease-out',
          'slide-right': 'slideRight 0.5s ease-out',
          'scale': 'scale 0.5s ease-out',
          'bounce-soft': 'bounceSoft 2s infinite',
          'gradient': 'gradient 8s linear infinite',
          'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'spin-slow': 'spin 3s linear infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideLeft: {
            '0%': { transform: 'translateX(50px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          slideRight: {
            '0%': { transform: 'translateX(-50px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          scale: {
            '0%': { transform: 'scale(0.9)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
          bounceSoft: {
            '0%, 100%': { transform: 'translateY(-5%)' },
            '50%': { transform: 'translateY(0)' },
          },
          gradient: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          pulseSoft: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.8' },
          },
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  };