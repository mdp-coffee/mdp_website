/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F9F0E1",
        paper2: "#F5E8D0",
        parchment: "#EDE0C8",
        brown: {
          DEFAULT: "#411915",
          dark: "#411915",
        },
        darkbrown: "#411915",
        rust: "#70120E",
        gold: {
          DEFAULT: "#FEC87F",
          light: "#FEC87F",
        },
        cream: "#F9F0E1",
        black: "#0C0C0C",
      },
      fontFamily: {
        condensed: ["'Arpona'", "sans-serif"],
        sans: ["'Montserrat'", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        10000: "10000ms",
      },
    },
  },
  plugins: [],
};
