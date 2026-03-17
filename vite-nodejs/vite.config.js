import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
    server: {
        port: 3000
    },
    build: {
        target: 'esnext',
        outDir: 'dist',
        ssr: true,
        rollupOptions: {
            output: {
                format: 'es',
                entryFileNames: '[name].js',
            }
        }
    },
    plugins: [VitePluginNode({
        adapter: 'express',
        appPath: './server/index.js',
        exportName: 'viteNodeApp',
        outputFormat: 'es'
    })]
})