import { defineConfig } from "vite";
import liveReload from "vite-plugin-live-reload";

export default defineConfig({
  server: {
    cors: true,
    port: 5173,
  },
  build: {
    manifest: true,
    emptyOutDir: true,
    outDir: "dist",
    rollupOptions: {
      input: "./src/js/main.js",
    },
  },
  plugins: [liveReload(["**/*.php"])],
});
