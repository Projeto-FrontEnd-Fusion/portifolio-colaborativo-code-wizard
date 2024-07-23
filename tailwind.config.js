/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      "mini-screen"   : '430px',
      "small-screen"  : '480px',
      "medium-screen" : '768px',
      "larger-screen" : '976px',
      'super-screen'  : '1024px',
      "mega-screen"   : '1280px'
    },
    colors : {
      "dark-color"        : "#0F0920", 
      "dark-color-second" : "#221C3E",
      "light-color"       : "#f1f1f1",
      "primary-button"    : "#16C586",
      "light-color-text1" : "#F2F0FF",
      "light-color-text2" : "#B5B3BC",
      "border-color"      : "#EBEBEB",
			"second-button": "#0368FF"
    },

    fontFamily: {
      'inconsolata': ["inconsolata-normal"],
      'mulish': ["mulish-bold"]
    },

    extend: {
      fontFamily: {
        'inconsolata': ['Inconsolata', 'monospace'],
        'mulish': ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

