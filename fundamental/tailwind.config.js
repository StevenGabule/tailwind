/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    theme: {},
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
