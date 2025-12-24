import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  server: {
    port: 3200,
  },
  plugins: [reactRouter(), tailwindcss()],
  resolve: {
    alias: {
      "@app": path.resolve("./app"),
      "@server": path.resolve("./server"),
      "@common/ui": path.resolve("./node_modules/@common/ui/src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".md"]
  }
});