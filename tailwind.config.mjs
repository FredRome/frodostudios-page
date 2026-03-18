/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fredoka', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        space: {
          950: '#070810',
          900: '#0A0B14',
          800: '#0F1120',
          700: '#13152A',
          600: '#1a1d35',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-md': 'float 7s ease-in-out 1.5s infinite',
        'float-lg': 'float 9s ease-in-out 3s infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        'twinkle-fast': 'twinkle 2.5s ease-in-out 1s infinite',
        'twinkle-slow': 'twinkle 5s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.25', transform: 'scale(0.7)' },
        },
      },
    },
  },
  plugins: [],
};
