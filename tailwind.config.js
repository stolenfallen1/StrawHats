/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gold": "#FFDB58",
        "custom-red": "#960018",
      },
    },
  },
  plugins: [],
};
