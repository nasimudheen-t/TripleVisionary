import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      'framer-motion': fileURLToPath(new URL('./src/static-motion.jsx', import.meta.url)),
    },
  },
})
