import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.png', '**/*.ttf'], // Add support for .glb, .png, and .ttf files
  build: {
    rollupOptions: {
      external: ['@react-three/fiber'], // Explicitly externalize @react-three/fiber
    },
  },
});
