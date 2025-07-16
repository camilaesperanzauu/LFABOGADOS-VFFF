/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#2d1b2e',
        'light-blue': '#e4b5b5',
        'white': '#ffffff',
        'off-white': '#f7f1f1',
        'coral-pink': '#d19a9a',
        'soft-pink': '#f4ebe9',
        'main-rose': '#c4918e',
        'dark-text': '#5a4a47',
        'medium-text': '#7a6865',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}