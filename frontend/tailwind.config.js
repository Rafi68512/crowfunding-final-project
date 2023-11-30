/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#1DAA97",
        secondary: "#51D7C5",
        greybg: "#D9D9D9",
        hint: "#595656",
      },
      fontSize: {
        "2xs": "8px",
      },
    },
  },
  daisyui: {
    themes: ["cupcake", "cmyk"],
  },
  plugins: [require("daisyui")],
});
