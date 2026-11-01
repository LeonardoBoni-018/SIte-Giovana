import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [react(), imagetools()],
  build: {
    rollupOptions: {
      output: {
        // Bibliotecas em arquivos próprios: o navegador as guarda em cache e não rebaixa a cada deploy do site.
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true
  }
});
