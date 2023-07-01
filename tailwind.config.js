import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */

const Myclass = plugin(({ addUtilities }) => {
  addUtilities({
    ".float-btn": {
      transition: ".5s, bg-indigo-800 .10s"
    },
    ".float-btn-hover": {
      boxShadow: "0 5px 5px 0 #000,0 5px 5px 0 #000"
    }
  });
});
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["NexflixSans-Regular", "sans-serif"],
    },
  },
  plugins: [Myclass],
};
