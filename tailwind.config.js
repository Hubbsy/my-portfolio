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
        main: "#F8EEE7",
        background: "#94618E",
        navbar: "#94618E",
        navText:"#231f20",
        navBottom: "#E76F51",
        buttonsContact: "none",
        buttonsGaming: "none",
        buttonText: "white",
        buttonsHover: "#F8EEE7",
        skills: "#F4DECB",
        footer: "#49274A"
    },
      variants: {
          extend: {
              visibility: ["group-hover"],
          },
      },
  },
  plugins: [],
}
