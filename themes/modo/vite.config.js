import { defineConfig } from "vite";

export default defineConfig({
  build: {
    manifest: true,
    emptyOutDir: true,
    outDir: "dist",
    rollupOptions: {
      input: "./src/js/main.js",
    },
  },
});
