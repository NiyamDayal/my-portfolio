module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('../public/bg.webp')", // Reference the .webp image in the public folder
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
