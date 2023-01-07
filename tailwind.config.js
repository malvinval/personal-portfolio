/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
      },
      backgroundColor: {
        "#205295": "#205295"
      }
    },
  },
  plugins: [require("daisyui")],
}
