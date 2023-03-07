/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          100: '#FF33A1',
          200: '#FF33C1'
        }
      }
    },
  },
  plugins: [],
}
