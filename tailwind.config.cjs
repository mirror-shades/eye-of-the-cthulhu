/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
      },
    },
  },

  plugins: [require("daisyui")],  
  experimental: {
    multiColumn: true,
  },
  

  daisyui: {
    themes: [
      "dim",
    ],
  },

};

module.exports = config;
