import Bun from 'bun'
import bunGraphqlLoader from 'bun-graphql-loader';

await Bun.build({
    entrypoints: ["./main.js"],
    outdir: "./.dev",
    target: "node",
    format: "esm",
    sourcemap: "linked",
    // external: [],
    packages: "external", //bundle | external
    plugins: [bunGraphqlLoader()],
    watch: true,
})