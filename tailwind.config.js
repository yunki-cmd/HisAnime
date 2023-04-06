/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {},
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
  },
  plugins: [
      require('tailwind-scrollbar')
  ],
}