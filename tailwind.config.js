/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust as needed for your framework
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], // Add DM Sans as the default sans font
      },
      backgroundImage: {
        'main': 'linear-gradient(180deg, #FFFFFF 0%, #F1FBFF 100%)',
        'custom-gradient': 'linear-gradient(180deg, #EFF5FF 0%, rgba(239, 245, 255, 0) 100%)',
        'hr-gradient': 'linear-gradient(90deg, #FFFFFF 50%, #8FDFFF 100%, )',
      },
      boxShadow: {
        'custom-shadow': '0px 4px 20px 0px rgba(23, 43, 77, 0.1)', // Adjusted for rgba format
      },
    },
  },
  plugins: [],
};
