import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.png', '**/*.ttf'], // Add support for .glb, .png, and .ttf files
  resolve: {
    alias: {
      '@react-three/fiber': path.resolve('node_modules/@react-three/fiber'),
    },
  },
  build: {
    rollupOptions: {
      external: ['@react-three/fiber'], // Explicitly externalize @react-three/fiber
    },
  },
});
