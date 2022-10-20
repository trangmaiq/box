/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // foreground: "hsl(0, 0%, 100%)",
        // gray300: "hsl(246, 8%, 35%)",
        background: "hsl(251, 24%, 9%)",
        gray250: "hsl(250, 21%, 11%)",
        gray200: "hsl(246, 11%, 22%)",
        pink200: "hsl(270, 45%, 24%)",
        pink300: "hsl(270, 50%, 32%)",
        pink50: "hsl(270, 38%, 12%)",
      },
    },
  },
  plugins: [],
};
