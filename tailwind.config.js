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
          DEFAULT: '#6a6d75',
        },
        orange:{
          500:'#f26c29',
        }
      }
    },
  },
  plugins: [],
}

