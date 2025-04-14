/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        text: 'var(--text)',
      },
      backgroundColor: {
        "#0974f1": "#0974f1"
      },
      textDecorationColor: {
        "#0974f1": "#0974f1"
      },
      boxShadow: {
        "#0974f1": "0 4px 6px -1px rgba(9, 116, 241, 0.2), 0 2px 4px -2px rgba(9, 116, 241, 0.2)"
      },
      textColor: {
        "#0974f1": "#0974f1"
      }
    },
  },
  plugins: [require("daisyui")],
}
