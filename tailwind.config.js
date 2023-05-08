/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './build/*.html',
    "./src/**/*.html", 
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '550px',
      },
      colors: {
        primary: '#672280',
        secondary: '#8224A3',
        tertialry: '#A626D3',
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif']
      },
    },
  },
  plugins: [],
}

