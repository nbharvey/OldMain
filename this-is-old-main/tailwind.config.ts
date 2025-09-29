import {colors} from "./src/utils/colors"

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brandBlack: colors.black,
        brandSilver: colors.silver,
        brandBrick: colors.brick,
        brandWood: colors.wood,
        brandTeal: colors.teal,
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};