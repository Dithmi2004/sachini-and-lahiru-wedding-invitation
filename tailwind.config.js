export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF6EC",
        cream: "#F3E8D2",
        champagne: "#D9C08A",
        gold: { DEFAULT: "#B08D3E", deep: "#8A6A26" },
        maroon: { DEFAULT: "#6E1E2B", deep: "#4E1420" },
        cocoa: { DEFAULT: "#3B2A1E", soft: "#6B5444" },
        foliage: "#6F7D5C",
        lotus: "#E7B7BE",
        blush: "#F7D3DE",
        rosewood: "#B01E55",
        foil: "#A8803A",
      },
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        serif: ['"Cormorant Garamond"', '"Noto Serif Sinhala"', "Georgia", "serif"],
        sinhala: ['"Noto Sans Sinhala"', '"Noto Serif Sinhala"', "sans-serif"],
      },
    },
  },
};
