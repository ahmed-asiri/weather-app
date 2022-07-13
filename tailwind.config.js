/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        card: "#1794F4",
        primary: "#F0F0F0",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
