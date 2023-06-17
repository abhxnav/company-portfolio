/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        128: '32rem',
      },
      colors: {
        background: '#111',
        accent_primary: '#6b59a2',
        accent_secondary: '#dcbcff',
        text_dark: 'rgb(17, 24, 39)',
        text_light: '#bbb',
      },
    },
  },
  plugins: [],
}
