import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/components/Lit/index.ts'),
      },
      output: {
        dir: 'dist/resources',
        format: 'es',
        entryFileNames: 'components.js',
        chunkFileNames: '[name].js',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('components')) {
            const componentName = id.split('/').slice(-2, -1)[0];
            return `${componentName}`;
          }
        },
      },
    },
    outDir: 'dist/lit/components',
    emptyOutDir: true,
  },
});
