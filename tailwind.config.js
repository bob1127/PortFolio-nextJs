const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       clipPath: {
        'polygon': 'polygon(85% 0%, 0% 0%, 0% 50%, 85% 50%)',
        'polygon-hover': 'polygon(90% 0%, 10% 0%, 10% 50%, 90% 50%)',
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          400: '#00E0F3',
          500: '#00c4fd',
        },
        dark: '#222222',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
