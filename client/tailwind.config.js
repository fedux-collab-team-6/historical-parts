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
      fontSize: {
        "5xl": [
          "2rem",
          {
            lineHeight: "2em",
            fontWeight: "700",
          },
        ],
        "4xl": [
          "2rem",
          {
            lineHeight: "2em",
            fontWeight: "700",
          },
        ],
        "3xl": [
          "1.75rem",
          {
            lineHeight: "2em",
            fontWeight: "700",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "1.75em",
            fontWeight: "700",
          },
        ],
        xl: [
          "1.35rem",
          {
            lineHeight: "1.75em",
            fontWeight: "600",
          },
        ],
        lg: [
          "1.15rem",
          {
            lineHeight: "1.75em",
            fontWeight: "600",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5em",
            fontWeight: "400",
          },
        ],
        sm: [
          ".8rem",
          {
            lineHeight: "1.25em",
            fontWeight: "400",
          },
        ],
        xs: [
          ".7rem",
          {
            lineHeight: ".8em",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
