
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/', // Base URL for all assets
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    // Externalize browser-only packages during SSR build
    external: ['@calcom/embed-react'],
    // Bundle CJS packages that don't work with Node ESM named imports
    noExternal: ['react-helmet-async'],
  },
}));
