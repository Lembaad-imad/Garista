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
      colors: {
        'bgcolor': '#fffdfb',
        'btncollor':'#db281c'
      },
    },
  },
  plugins: [],
}

