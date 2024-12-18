import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // Ensure that the build output is placed in the correct directory
    sourcemap: true, // Optional: Generate sourcemaps for debugging production build
  },
});
