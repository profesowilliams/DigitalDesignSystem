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
      output: [
        {
          dir: 'dist',
          format: 'iife',
          entryFileNames: 'components.js',
        },
      ],
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
