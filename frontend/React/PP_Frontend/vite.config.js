import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Tailwind is handled via postcss.config.js
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
