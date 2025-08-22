import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@utils": "/src/utils",
      "@components": "/src/components",
      "@baseNavigator": "/src/baseNavigator",
      "@layouts": "/src/layouts",
      "@reduxStore": "/src/reduxStore"
    },
  },
});
