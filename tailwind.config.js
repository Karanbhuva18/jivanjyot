/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-xl': `
          0px 0px 30px 9px rgba(0,0,0,0.45),
          25px 0px 20px -20px rgba(0,0,0,0.45),
          0px 25px 20px -20px rgba(0,0,0,0.45),
          -25px 0px 20px -20px rgba(0,0,0,0.45)
        `,
      },
    },
  },
  plugins: [],
};
