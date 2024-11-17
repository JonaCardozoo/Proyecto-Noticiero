// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://apinode-production-5616.up.railway.app',  // Aquí va la URL de tu API en Railway
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')  // Reescribe /api a la raíz de tu API
      },
    },
  },
});
