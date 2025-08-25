import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@utils": "/src/utils",
      "@components": "/src/components",
      "@baseNavigator": "/src/baseNavigator",
      "@layouts": "/src/layouts",
      "@reduxStore": "/src/reduxStore",
      "@constants": "/src/constants",
      "@services": "/src/services",
    },
  },
});
