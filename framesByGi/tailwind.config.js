export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#f7e0d6',
        rosewood: '#8b5f49',
        caramel: '#b78f77',
        mocha: '#4b3424',
        ivory: '#f8f0eb'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
