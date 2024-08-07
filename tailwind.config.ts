import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lola: {
          50: 'hsl(var(--lola-50))',
          100: 'hsl(var(--lola-100))',
          200: 'hsl(var(--lola-200))',
          300: 'hsl(var(--lola-300))',
          400: 'hsl(var(--lola-400))',
          500: 'hsl(var(--lola-500))',
          600: 'hsl(var(--lola-600))',
          700: 'hsl(var(--lola-700))',
          800: 'hsl(var(--lola-800))',
          900: 'hsl(var(--lola-900))',
          950: 'hsl(var(--lola-950))',
        },
        conblue: {
          50: 'hsl(var(--conblue-50))',
          100: 'hsl(var(--conblue-100))',
          200: 'hsl(var(--conblue-200))',
          300: 'hsl(var(--conblue-300))',
          400: 'hsl(var(--conblue-400))',
          500: 'hsl(var(--conblue-500))',
          600: 'hsl(var(--conblue-600))',
          700: 'hsl(var(--conblue-700))',
          800: 'hsl(var(--conblue-800))',
          900: 'hsl(var(--conblue-900))',
          950: 'hsl(var(--conblue-950))',
        },
        memo: {
          yellow: {
            DEFAULT: 'hsl(var(--memo-yellow))',
            text: 'hsl(var(--memo-yellow-text))',
            button: 'hsl(var(--memo-yellow-button))',
          },
          green: {
            DEFAULT: 'hsl(var(--memo-green))',
            text: 'hsl(var(--memo-green-text))',
            button: 'hsl(var(--memo-green-button))',
          },
          purple: {
            DEFAULT: 'hsl(var(--memo-purple))',
            text: 'hsl(var(--memo-purple-text))',
            button: 'hsl(var(--memo-purple-button))',
          },
          pink: {
            DEFAULT: 'hsl(var(--memo-pink))',
            text: 'hsl(var(--memo-pink-text))',
            button: 'hsl(var(--memo-pink-button))',
          },
        },
        button: {
          gray: {
            DEFAULT: 'hsl(var(--button-gray))',
            hover: 'hsl(var(--button-gray-hover))',
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
        boardlist: '1000px',
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
