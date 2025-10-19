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
          // Lower Decks color palette
          purple: '#B388FF',        // Primary purple
          magenta: '#E040FB',       // Bright magenta
          cyan: '#00E5FF',          // Bright cyan/teal
          yellow: '#FFD600',        // Bright yellow
          pink: '#FF4081',          // Hot pink
          teal: '#1DE9B6',          // Teal accent
          violet: '#7C4DFF',        // Deep violet
          lime: '#76FF03',          // Lime green
          // Legacy colors for compatibility
          orange: '#FF9900',
          blue: '#9999FF',
          red: '#CC6666',
          tan: '#FFCC99',
          peach: '#FF9966',
          lightblue: '#99CCFF',
          background: '#0A0014',    // Deep purple-black
          panel: '#1A0F2E',         // Dark purple panel
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
