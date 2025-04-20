import { defineConfig } from 'vite'
import { node } from '@liuli-util/vite-plugin-node'
import graphqlLoader from "vite-plugin-graphql-loader";
import path from "path"


export default defineConfig({
  plugins: [node({
    entry: "server.js",
    formats: ["es"]
  }),
  graphqlLoader(),
  ],
  build: {
    rollupOptions: {
      output: {
        format: "es",
        entryFileNames: "server.js",
        dir: "dist"
      }
    }
  },
  resolve: {
    alias: {
      "@perf-gql": path.resolve(".")
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".gql", ".graphql", ".json"],
  }
});