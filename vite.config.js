import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/moon-tantra',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  plugins: [vue()],
})
