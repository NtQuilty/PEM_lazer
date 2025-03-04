/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        header:
          '0 20px 60px rgba(0, 0, 0, 0.44), inset 67.3333px -67.3333px 67.3333px rgba(148, 148, 148, 0.027), inset -67.3333px 67.3333px 67.3333px rgba(255, 255, 255, 0.027)',
      },
    },
  },
  plugins: [],
};
