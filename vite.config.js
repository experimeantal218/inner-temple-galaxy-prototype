import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/inner-temple-galaxy-prototype/', // must match your repo name
})
