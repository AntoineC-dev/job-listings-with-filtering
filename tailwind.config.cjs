/** @type {import('tailwindcss').Config} **/
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/app.html", "./src/**/*.{svelte,ts}"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        DEFAULT: "hsl(180, 29%, 50%)",
      },
      neutral: {
        DEFAULT: "hsl(0, 0%, 100%)",
        100: "hsl(180, 52%, 96%)",
        200: "hsl(180, 31%, 95%)",
        300: "hsl(180, 8%, 52%)",
        400: "hsl(180, 14%, 20%)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["League\\ Spartan", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
