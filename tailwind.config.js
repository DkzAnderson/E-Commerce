/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white: '#EDF2F6',
        primary: {
          100: '#FF0000',
          200: '#950101',
          300: '#3D0000'
        },
        secondary: '#3D0000',
        black :'#000000',
        blue : '#6A7EFC',

      }
    },
    fontFamily:{
      "roboto" : '"Roboto", sans-serif'
    }
  },
  plugins: [],
}