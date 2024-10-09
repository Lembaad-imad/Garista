/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        nexa :['Nexa', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '100': '100',
        '1000': '1000',
      },
      colors: {
        'bgcolor': '#fffdfb',
        'btncollor':'#db281c',
        "secondary":"#fff0f0",
        "footer" :"#fff8eb"
      },
    },
    screens: {
      'hsm': '375px',

      'hmd': '300x',

      'hlg': '350px',

      'hxl': '400px',

      'h2xl': '450px',
    }
  },
  plugins: [],
})

