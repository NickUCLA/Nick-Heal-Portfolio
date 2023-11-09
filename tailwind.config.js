import flowbitePlugin from "flowbite/plugin";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#2A0944",
        "primary-green": "#1eddff",
        "light-green": "#A12568",
        "light-gray": "rgba(255, 255, 255, 0.7)",
        "lighter-gray": "#FAF3E3",
        "semi-transparent": "rgba(42, 9, 68, .98)",
        "primary-blue": "#A12568",
      },
    },
  },
  plugins: [flowbitePlugin],
};

export default config;
