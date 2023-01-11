module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-green': '#020d02',
        'bright-green': '#1eff61',
        'bright-blue': '#773dff',
        'light-bright-blue': '#8e5fff',
        'transp-bright-blue': 'rgba(119, 61, 255, 0.15)',
        'transp-light-bright-blue': 'rgba(142, 95, 255, 0.5)',
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        rubik: 'Rubik Mono One',
        play: 'Play Regular',
        'play-bold': 'Play Bold',
      },
      boxShadow: {
        tl: '-10px -10px 35px 0px',
      },
    },
  },
  plugins: [],
}
