import { defineConfig } from "vite";
import { expressPlugin } from "./express-plugin.js";
import graphqlLoader from "vite-plugin-graphql-loader";

export default defineConfig({
    plugins: [
        expressPlugin({
            entry: "./server.js"
        }),
        graphqlLoader()
    ],
    server: {
        port: 3000,
    }
});
