import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import windiConfig from "./windi.config.mjs"; // also consider renaming the file for clarity
import autoprefixer from "autoprefixer";

// Dynamically import the WindiCSS plugin
const loadWindiCSSPlugin = async () => {
  const windiCSSModule = await import("vite-plugin-windicss");
  return windiCSSModule.default;
};

// Configure Vite
const config = async () => {
  const windiCSSPlugin = await loadWindiCSSPlugin();

  return defineConfig({
    plugins: [
      react(),
      windiCSSPlugin({
        config: windiConfig,
        // ... other WindiCSS plugin options
      }),
    ],
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  });
};

export default config;
