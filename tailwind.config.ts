import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B4513',
        secondary: '#D2B48C',
        accent: '#FF6B35',
        surface: '#FFFFFF',
        background: '#FDF8F3',
        foreground: '#2C1810',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;