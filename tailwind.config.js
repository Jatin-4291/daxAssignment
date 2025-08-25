/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Roboto Mono"', "monospace"], // or any chosen font
      },
    },
  },
  plugins: [],
};
