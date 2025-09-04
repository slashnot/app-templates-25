import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import devtoolsJson from 'vite-plugin-devtools-json';
import path from "node:path";

export default defineConfig({
  server: {
    port: 3200,
  },
  plugins: [tailwindcss(), devtoolsJson()],
  resolve: {
    alias: {
      "@app/client": path.resolve("./app"),
      "@app/keystone": path.resolve("./node_modules/@app/keystone"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".md"]
  },
  build: {
    rollupOptions: {
      input: {
        client: './app/entry.client.jsx',
        server: './app/entry.server.jsx'
      },
      onwarn(warning, warn) {
        // Suppress "use client" directive warnings from Mantine
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('"use client"')) {
          return;
        }
        warn(warning);
      }
    }
  },
  ssr: {
    noExternal: ['react-router']
  }
});