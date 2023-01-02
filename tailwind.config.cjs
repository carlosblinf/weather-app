/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgLightGrey: '#DCDFE0',
        bgYellou: '#FFB703',
        bgDarkBlue: '#023047',
        bgBlue: '#219EBC',
        bgGrey: '#99A4A9',
        bgGrey1: '#9FAAAE',
        darkGrey: '#6F6969',
        lightBlue: '#8ECAE6',
        darkYellou: '#FB8500',
      },
    },
  },
  plugins: [],
};
