/** @type {import('tailwindcss').Config} */
import lineClamp from "@tailwindcss/line-clamp"; // Import the plugin here

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [lineClamp], // Use the imported plugin
};
