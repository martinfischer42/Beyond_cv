/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          500: '#2563eb',
          600: '#1d4ed8',
        },
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
