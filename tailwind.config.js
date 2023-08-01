/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}",
  ],
  theme: {
    extend: {},
    maxWidth: {
      "3/4": "75%"
    },
    minWidth: {
      "1/4": "25%"
    }
  },
  plugins: [],
}

