import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.png', '**/*.ttf'], // Add support for .glb files
  build: {
    rollupOptions: {
      external: ['@react-three/fiber'], // Explicitly externalize @react-three/fiber
    },
  },
});
