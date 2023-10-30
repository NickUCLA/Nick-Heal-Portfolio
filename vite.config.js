import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";

// Configure Vite
const config = () => {
  return defineConfig({
    plugins: [react()],
    css: {
      postcss: {
        plugins: [postcssImport, tailwindcss, autoprefixer],
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  });
};

export default config;
