/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#130160',
        secondary: '#FCA34D',
        textlight: '#524B6B',
        white: '#FFFFFF',
        black: '#000000',
        googlecolor: '#D6CDFE',
      },
    },
  },
  plugins: [],
};
