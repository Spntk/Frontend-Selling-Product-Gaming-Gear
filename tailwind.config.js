/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'primaryBG': '#1e28320d',
      },
      fontFamily: {
        'primary': ["Roboto", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
