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
        lcars: {
          orange: '#FF9900',
          blue: '#9999FF',
          purple: '#CC99CC',
          red: '#CC6666',
          yellow: '#FFCC66',
          tan: '#FFCC99',
          peach: '#FF9966',
          lightblue: '#99CCFF',
          background: '#000000',
          panel: '#1A1A1A',
        },
      },
      fontFamily: {
        lcars: ['Antonio', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
