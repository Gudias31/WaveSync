import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function normalizeBase(raw) {
  if (!raw || raw === '/') return '/'
  let b = raw.trim()
  if (!b.startsWith('/')) b = `/${b}`
  return b.endsWith('/') ? b : `${b}/`
}

export default defineConfig({
  base: normalizeBase(process.env.VITE_BASE_PATH),
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    cors: true,
    strictPort: true
  },
  preview: {
    host: '0.0.0.0',
    port: 5173
  }
})
