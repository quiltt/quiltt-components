const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: ['src/**/*.{js,ts,jsx,tsx}'],
    safelist: [],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          50: 'var(--secondary-50)',
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--secondary-400)',
          500: 'var(--secondary-500)',
          600: 'var(--secondary-600)',
          700: 'var(--secondary-700)',
          800: 'var(--secondary-800)',
          900: 'var(--secondary-900)',
        },
        light: colors.gray[100],
        dark: colors.gray[800],
        yellow: {
          // Opting for a truer yellow compared to tailwind's default amber tones
          DEFAULT: '#FFCC35',
          50: '#FFFAED',
          100: '#FFF5D8',
          200: '#FFEBAF',
          300: '#FFE187',
          400: '#FFD65E',
          500: '#FFCC35',
          600: '#FFC20C',
          700: '#E2A900',
          800: '#BA8B00',
          900: '#916C00',
        },
      },
      ringWidth: {
        DEFAULT: '2px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
