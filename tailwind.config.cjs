/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    "./src/**/*.{js,ts,jsx,tsx,astro}",
    "./public/**/*.{js,ts,jsx,tsx,astro}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    }
  },

  plugins: [],
}
