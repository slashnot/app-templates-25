import { defineConfig } from "vite";
import { expressPlugin } from "./express-plugin.js";
import graphqlLoader from "vite-plugin-graphql-loader";
import path from "node:path";

export default defineConfig({
    plugins: [
        expressPlugin({
            entry: "./server.js"
        }),
        graphqlLoader()
    ],
    server: {
        port: 3000,
    },
    resolve:{
        alias:{
            "@graphql": path.resolve("./graphql"),
            "@prisma": path.resolve("./prisma/client"),
        }
    }
});
