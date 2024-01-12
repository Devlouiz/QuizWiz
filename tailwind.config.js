/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-bg': '#63e',
        'black-text': 'rgba(27,27,27,0.54)',
        'gray-text': 'rgba(58,57,57,0.8)',
        'light-green': 'rgba(188, 249, 190, 0.8)',
        'white-transparent': 'rgba(255,255,255,0.2)'
      },
    },
  },
  plugins: [],
}

