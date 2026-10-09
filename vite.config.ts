import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For a project repository, set VITE_BASE=/repository-name/ before building.
// For username.github.io repositories, keep the base as '/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})