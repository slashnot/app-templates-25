import Bun from 'bun'
import bunGraphqlLoader from 'bun-graphql-loader';

await Bun.build({
    entrypoints: ["./main.js"],
    outdir: "./build",
    target: "node",
    format: "esm",
    // sourcemap: "linked",
    // external: [],
    packages: "bundle", //bundle | external
    plugins: [bunGraphqlLoader()],
})