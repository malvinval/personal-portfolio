/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
      },
      backgroundColor: {
        "#0974f1": "#0974f1"
      },
      textDecorationColor: {
        "#0974f1": "#0974f1"
      }
    },
  },
  plugins: [require("daisyui")],
}
