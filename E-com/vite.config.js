import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: "/E-com/", // Ensure GitHub Pages serves files from the correct path
  plugins: [react()],
})
