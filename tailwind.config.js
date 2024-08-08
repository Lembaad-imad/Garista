/** @type {import('tailwindcss').Config} */
export default {
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
  },
  plugins: [],
}

