import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-memo-yellow-text',
    'bg-memo-green-text',
    'bg-memo-purple-text',
    'bg-memo-pink-text',
    'bg-memo-yellow-button',
    'bg-memo-green-button',
    'bg-memo-purple-button',
    'bg-memo-pink-button',
    'bg-memo-yellow',
    'bg-memo-green',
    'bg-memo-purple',
    'bg-memo-pink',
  ],
  theme: {
    extend: {
      colors: {
        lola: {
          50: '#f9f6f8',
          100: '#f4eff2',
          200: '#eae0e6',
          300: '#d7c5cf',
          400: '#c1a5b4',
          500: '#ab899a',
          600: '#946e7f',
          700: '#7d5968',
          800: '#684c57',
          900: '#59424b',
          950: '#33242a',
        },
        conblue: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bbdefc',
          300: '#7ec3fb',
          400: '#3aa4f6',
          500: '#1089e7',
          600: '#046bc5',
          700: '#05569f',
          800: '#08467e',
          900: '#0d3e6d',
          950: '#092748',
        },
        memo: {
          yellow: {
            DEFAULT: '#f8f0cd',
            text: '#82451c',
            button: '#e3b93b',
          },
          green: {
            DEFAULT: '#fafce9',
            text: '#4c5d18',
            button: '#bcd841',
          },
          purple: {
            DEFAULT: '#f1eafb',
            text: '#633790',
            button: '#bb96e9',
          },
          pink: {
            DEFAULT: '#fdf7fc',
            text: '#7b2d6f',
            button: '#eeb9ea',
          },
        },
        button: {
          gray: {
            DEFAULT: '#e6e6eb',
            hover: '#d8d8df',
          },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient( var(--tw-gradient-stops))',
      },
      boxShadow: {
        inner: 'inset 1px 2px 2px 0 rgba(0, 0, 0, 0.25)',
      },
      width: {
        boardlistitem: '200px',
      },
      height: {
        boardlistitem: '200px',
        landingsection: '1000px',
        landingfooter: '200px',
      },
      maxWidth: {
        container: '1200px',
        boardlist: '1000px',
      },
      minHeight: {
        boardlist: '280px',
      },
    },
  },
  plugins: [],
}
export default config
