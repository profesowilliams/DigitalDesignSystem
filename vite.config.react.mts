import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Adjust this value as needed
    rollupOptions: {
      external: ['bootstrap'],
      input: {
        lit: path.resolve(__dirname, 'src/components/React/index.ts'),
      },
      output: [
        {
          dir: 'dist/react',
          format: 'umd',
          entryFileNames: 'react.js',
        },
      ],
    },
  },
});
