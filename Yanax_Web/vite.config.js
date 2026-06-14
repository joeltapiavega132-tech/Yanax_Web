import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Si está en modo "serve" (localhost) usa '/', si va a producción usa './'
  base: command === 'serve' ? '/' : './',
}))
