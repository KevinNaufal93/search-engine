/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1D",
        foreground: "#3B1C32",
        darkPurple: "#6A1E55",
        lightPurple: "#A64D79"
      },
    },
  },
  plugins: [],
};
