#!/usr/bin/env node

import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildClient() {
  console.log('Building client...');
  await build({
    configFile: path.resolve(__dirname, '../vite.config.js'),
    build: {
      outDir: 'build/client',
      rollupOptions: {
        input: './app/entry.client.jsx'
      }
    }
  });
}

async function buildServer() {
  console.log('Building server...');
  await build({
    configFile: path.resolve(__dirname, '../vite.config.js'),
    build: {
      outDir: 'build/server',
      ssr: true,
      rollupOptions: {
        input: './server/app.js',
        output: {
          format: 'es'
        }
      }
    }
  });
}

async function main() {
  try {
    await buildClient();
    await buildServer();
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

main();
