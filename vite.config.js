import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // This maps '@' to the 'src' directory
    }
  },
  build: {
    outDir: 'dist',  // This ensures the output directory is `dist`
  },
  base: './',  // Ensure relative paths are used for assets
});
