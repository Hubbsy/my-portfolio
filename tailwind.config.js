/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}","./public/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        extraLarge: '9rem'
      },
    },
    colors: {
        main: "#13293D",
        background: "#E0E0E2",
        navbar: "#416788",
        buttons: "#81D2C7",
        skills: "#B5BAD0"
    },
      variants: {
          extend: {
              visibility: ["group-hover"],
          },
      },
  },
  plugins: [],
}
