/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#FFF5F5",
        white: "#fff",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        lead: "#4F4F4F",

        "gray-light": "#d3dce6",
        black: "#000",
        "light-black": "#1c1a1a",
      },
      spacing: {
        'half': '50%',
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      extend: {
        spacing: {
          "8xl": "96rem",
          "9xl": "128rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
      },
    },
  },
};
