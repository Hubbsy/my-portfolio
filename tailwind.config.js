/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}","./public/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        extraLarge: '11rem'
      }
    },
  },
  plugins: [],
}
