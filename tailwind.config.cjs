/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily:{
      'body': '"Times New Roman"',
    },
    letterSpacing:{
      widest:'0.7em',
      wider:'0.25em'
    },
    extend: {
      colors:{
        primary:"#F45454",
        blacklight:"#565461",
        secondary:'#474654',
        babyBlue:"#FAF9FF",
        blueGray:'#7F7FFF'
      }
    },
  },
  plugins: [],
}
