/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2563eb",

          "secondary": "#dee579",

          "accent": "#e83e35",

          "neutral": "#392D39",

          "base-100": "#EFEDF7",

          "info": "#5776CB",

          "success": "#189150",

          "warning": "#D17A10",

          "error": "#E77476",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
