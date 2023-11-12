/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        coolGray: {
          200:'#f5f6f8',
          DEFAULT: '#6a6d75',
        },
        orange:{
          500:'#f26c29',
        },
        blue:{
          700:'#002684;'
        }
      }
    },
  },
  plugins: [],
}

