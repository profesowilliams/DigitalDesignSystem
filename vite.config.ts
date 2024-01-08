import { resolve } from 'path';
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  root: 'src',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      formats: ['es', 'umd'],
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'react',
        },
      },
    },
  },
  plugins: [react({
    // Exclude storybook stories
    exclude: /\.stories\.(t|j)sx?$/,
    // Only .tsx files
    include: '**/*.tsx',
  })],
  server: {
    port: 6001,
    https: false,
    host: true,
    hmr: {
      port: 443,
      protocol: "ws",
    },
  },
});
