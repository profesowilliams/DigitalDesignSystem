import path from 'path';
import { defineConfig } from 'vite';
import terser from '@rollup/plugin-terser';

// Common configuration
const commonConfig = {
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: ['bootstrap'],
      input: {
        lit: path.resolve(__dirname, 'src/components/Lit/index.ts'),
      },
      output: {
        dir: 'dist',
        format: 'iife', // Use a specific format like 'iife' instead of a generic string
        entryFileNames: 'components.js',
      },
    },
    outDir: 'dist/lit',
    emptyOutDir: true,
  },
};

// Development configuration
const devConfig = {
  ...commonConfig,
  build: {
    ...commonConfig.build,
    sourcemap: true,
    minify: false,
  },
};

// Production configuration
const prodConfig = {
  ...commonConfig,
  build: {
    ...commonConfig.build,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove all console.* statements
        drop_debugger: true, // Optional: Remove debugger statements too
      },
    },
    rollupOptions: {
      ...commonConfig.build.rollupOptions,
      plugins: [terser()],
    },
  },
};

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return devConfig;
  }
  return prodConfig;
});
