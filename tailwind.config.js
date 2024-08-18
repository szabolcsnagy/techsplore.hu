/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // important: be specific with these patterns to avoid scanning CSS files.
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier New', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
};
