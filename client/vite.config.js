import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist', // Specify the output directory as "dist"
  },
  plugins: [react()],
});
