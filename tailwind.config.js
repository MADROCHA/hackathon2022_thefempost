/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "*.html"
  ],
  theme: {
    colors: {
      white: "#F5F5F5",
      highlight: "#0AC2FF",
      violet: {
        light: "#9A4C95",
        dark: "#4D2D52" ,
      },
      black: "#1D1A31",

    },
    extend: {},
  },
  plugins: [],
}