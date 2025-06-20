import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.png', '**/*.ttf'], // Add support for .glb, .png, and .ttf files
  resolve: {
    alias: {
      '@react-three/fiber': require.resolve('@react-three/fiber'), // Resolve @react-three/fiber
    },
  },
  build: {
    rollupOptions: {
      external: ['@react-three/fiber'], // Explicitly externalize @react-three/fiber
    },
  },
});
