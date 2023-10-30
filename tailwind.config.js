/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        play: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
