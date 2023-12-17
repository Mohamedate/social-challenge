/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        toggle: " hsl(230, 22%, 74%)",
        vDBlue: "hsl(230, 17%, 14%)",
        dGrayishT: "hsl(228, 12%, 44%)",
        "pale-blue": "hsl(225, 100%, 98%)",
        "light-grayish": "hsl(227, 47%, 96%)",
        green: "hsl(163, 72%, 41%)",
        red: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youtube: " hsl(348, 97%, 39%)",
        from: "hsl(37, 97%, 70%)",
        to: "hsl(329, 70%, 58%)",
        topBgL: "hsl(225, 100%, 98%)",
        topBgD: "hsl(232, 19%, 15%)",
        dBgCard: "hsl(228, 28%, 20%)",
        bgDark: "hsl(230, 17%, 14%)",
        toggleF: "hsl(210, 78%, 56%)",
        toggleT: "hsl(146, 68%, 55%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "my-grid": "repeat(auto-fill, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [],
};
