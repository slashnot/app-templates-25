import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import devtoolsJson from 'vite-plugin-devtools-json';
import path from "node:path";

export default defineConfig({
  server: {
    port: 3200,
  },
  plugins: [reactRouter(), tailwindcss(), devtoolsJson()],
  resolve: {
    alias: {
      "@app": path.resolve("./app"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".md"]
  }
});