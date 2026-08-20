/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0d5c6b',
          50: '#f2f8f9',
          100: '#d9ebee',
          200: '#b2d8de',
          300: '#7bbcc6',
          600: '#0d5c6b',
          700: '#0a4a57',
          800: '#073843',
          900: '#052a32',
        },
        gold: {
          DEFAULT: '#f5c842',
          100: '#fdf4d9',
          200: '#fbe7a8',
          500: '#f5c842',
          600: '#e2b32a',
        },
        // Contrast-checked text colours. No grey-on-grey.
        ink: '#101f26',
        slate: '#41535b',
      },
      fontFamily: {
        heading: ['"Source Serif 4"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1160px' },
    },
  },
  plugins: [],
};
