/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "white",
        default: "#612BD3",
        secondary: "#37CEFF",
      },
    },
  },
  plugins: [],
};
