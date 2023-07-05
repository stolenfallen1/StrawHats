/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gold": "#FFDB58",
        "custom-red": "#960018",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1248px",
        "2xl": "1536px",
        "custom-400": { min: "400px", max: "500px" },
        "custom-300": { min: "300px", max: "399px" },
      },
    },
  },
  plugins: [],
};
