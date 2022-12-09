/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#171717',
      },
      backgroundImage: {
        heroColors: "url('/src/assets/heroColors.png')",
      },
    },
  },
  plugins: [],
};
