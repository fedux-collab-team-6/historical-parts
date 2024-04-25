// import { light } from "@mui/material/styles/createPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {},
    extend: {
      colors: {
        coral: {
          400: "#FB874F",
        },
        spindle: {
          50: "#F2F7FC",
          100: "#E2ECF7",
          200: "#BCD4EC",
          700: "#4567b0",
          800: "#3D5590",
          900: "#354873",
          950: "#242e47",
        },
        stormDust: {
          600: "#616363",
        },
        light: {
          100: "#FCFCFC",
          200: "#FCF8F0",
        },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
