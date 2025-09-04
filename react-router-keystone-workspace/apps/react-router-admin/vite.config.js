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
      "@app/client": path.resolve("./app"),
      "@app/keystone": path.resolve("./node_modules/@app/keystone"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".md"]
  }
});