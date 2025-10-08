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
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      animation: {
        ripple: 'ripple 0.6s linear',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};