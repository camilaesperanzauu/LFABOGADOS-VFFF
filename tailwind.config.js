/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1a202c',
        'light-blue': '#4a5568',
        'white': '#ffffff',
        'off-white': '#e2e8f0',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}