/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'], // Example: using Poppins
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
