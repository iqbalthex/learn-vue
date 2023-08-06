/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "wa-primary": "#25d366",
        "wa-secondary": "#f0f2f5",
        "wa-tertiary": "#d1d7db",
        "wa-dialog": "#efeae0",
        "wa-profile": "#dfe5e7",

        "wa-dark-primary": "#00a884",
        "wa-dark-secondary": "#202c33",
        "wa-dark-tertiary": "#2f3b43",
        "wa-dark-dialog": "#0b141a",
        "wa-dark-profile": "#6a7175",
        "wa-dark-icon": "#94a3b8",
      },
    },
    maxWidth: {
      "3/4": "75%"
    },
    minWidth: {
      "1/4": "25%"
    }
  },
  plugins: [],
}

