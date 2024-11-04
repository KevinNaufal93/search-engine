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
        background: "#243642",
        foreground: "#387478",
        colorSet1: "#629584",
        colorSet2: "#E2F1E7"
      },
    },
  },
  plugins: [],
};
