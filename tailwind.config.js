
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        light: {
          white: '#F9F9F9',
          primary: {
            100: '#FF0000',
            200: '#950101',
            300: '#3D0000'
          },
          yellow: '#FFF100',
          black :'#000000',
          blue : {
            100: '#64C4ED',
            200: '#10316B'
          },
        },
        dark: {
          white: 'red',
          primary: {
            100: '#FF0000',
            200: '#950101',
            300: '#3D0000'
          },
          secondary: '#3D0000',
          black :'#000000',
          blue : '#6A7EFC',
        }
      }
    },
    fontFamily:{
      "roboto" : '"Roboto", sans-serif'
    }
  },
  plugins: [],
}