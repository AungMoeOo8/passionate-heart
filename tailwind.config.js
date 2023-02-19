/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        default: "0 10px 35px -5px rgb(0 0 0 / 6%)",
      },
      colors: {
        azure: "#F1FDFF",
      },
      borderRadius: {
        sm: "12px",
        lg: "20px",
      },
      // screens: {
      //   "sm": "425px",
      //   "md": "768px",
      //   "lg": "1024px",
      // },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
