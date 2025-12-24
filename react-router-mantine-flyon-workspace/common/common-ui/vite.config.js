import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwind from "@tailwindcss/vite"
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()],
  resolve: {
    alias: {
      "@common/ui": path.resolve("./src"),
    },
  },
})
