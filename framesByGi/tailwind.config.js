/** @type {import('tailwindcss').Config} */
export default {
  // Efeitos de hover só em dispositivos com mouse; no celular o toque não deixa o hover "preso".
  future: {
    hoverOnlyWhenSupported: true
  },
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#f7e0d6',
        ivory: '#f8f0eb',
        rosewood: '#8b5f49',
        caramel: '#b78f77',
        mocha: '#4b3424',
        cocoa: '#5c4232',
        line: '#dcb8aa'
      },
      fontFamily: {
        serif: ['"Playfair Display Variable"', 'Georgia', 'serif'],
        sans: ['"Jost Variable"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        print: '0 1px 2px rgba(75, 52, 36, 0.08), 0 12px 32px -8px rgba(75, 52, 36, 0.22)'
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
};
