/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f9',
          100: '#faeff2',
          200: '#f7dfe5',
          300: '#f0c5d1',
          400: '#e59db3',
          500: '#d67694',
          600: '#c35578',
          700: '#a93c5e',
          800: '#8b344d',
          900: '#73304a',
        },
        secondary: {
          50: '#f9f7f4',
          100: '#f2ede5',
          200: '#e8dfd0',
          300: '#d7c7ad',
          400: '#c6ae89',
          500: '#b79669',
          600: '#a7805a',
          700: '#8a674c',
          800: '#725443',
          900: '#5f463a',
        },
        accent: {
          50: '#faf9f5',
          100: '#f7f4e9',
          200: '#f1ecd2',
          300: '#e8dcac',
          400: '#dcc77d',
          500: '#d1b14f',
          600: '#c39c39',
          700: '#a27b30',
          800: '#85642f',
          900: '#6c532a',
        },
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Cormorant Garamond', 'serif'],
        'script': ['Great Vibes', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};