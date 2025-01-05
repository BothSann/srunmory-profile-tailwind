/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
      colors: {
        primary: "#1a1a1d",
        secondary: "#212124",
      },
    },
  },
  plugins: [],
};
