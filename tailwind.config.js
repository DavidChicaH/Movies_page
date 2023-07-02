import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */

const Myclass = plugin(({ addUtilities }) => {
  addUtilities({
    ".float-btn": {
      transition: ".5s, bg-boldBlue .10s",
    },
    ".float-btn-hover": {
      boxShadow: "0 5px 5px 0 #0C134F,0 5px 5px 0 #0C134F",
    },
  });
});
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["NexflixSans-Regular", "sans-serif"],
      logo: ["", "sans-serif"],
    },
    extend: {
      colors: {
        boldBlue: "#0C134F",
        regularOrange: "#F97B22",
        lightPurple: "#5C469C",
        lightPink: "#FFEBEB"

      }
    },
  },
  plugins: [Myclass],
};
