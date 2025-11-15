import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    wasm(),
    topLevelAwait()
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  optimizeDeps: {
    exclude: ['webvowl-wasm']
  },
  build: {
    target: 'esnext'
  }
})
