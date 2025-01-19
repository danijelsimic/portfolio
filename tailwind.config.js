/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#2980B9',
        'gitlab-color': '#fca326',
      },
    },
  },
  plugins: [],
}