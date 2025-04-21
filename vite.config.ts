import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss(), 
    react(), 
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      '@': '/src' // Este alias se usa para resolver las rutas de la carpeta 'src'
    }
  }
})
