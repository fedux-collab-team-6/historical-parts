/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      colors: {
        coral: {
          400: "#FB874F",
        },
        spindle: {
          50: "F2F7FC",
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
        default: {
          " bg": "#FCF8F0",
          " white-bg": "#FCFCFC",
        },
      },
    },
    extend: {},
  },
  plugins: [],
};
