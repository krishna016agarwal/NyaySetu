/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#dcf3ff',
          200: '#b3e7ff',
          300: '#66d3ff',
          400: '#1ab8ff',
          500: '#00a3ff',
          600: '#0082df',
          700: '#0066b4',
          800: '#005494',
          900: '#004579',
        },
        secondary: {
          50: '#fbf2ff',
          100: '#f6e4ff',
          200: '#edc9ff',
          300: '#e09fff',
          400: '#cd65ff',
          500: '#b52bff',
          600: '#9f00ff',
          700: '#8400d6',
          800: '#6c00ad',
          900: '#4d007d',
        },
        accent: {
          50: '#fff1f3',
          100: '#ffe0e5',
          200: '#ffc7d1',
          300: '#ff9eaf',
          400: '#ff647d',
          500: '#ff2d52',
          600: '#ff1133',
          700: '#e6001f',
          800: '#bf001a',
          900: '#99001b',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};