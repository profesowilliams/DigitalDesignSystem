const path = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      external: ['bootstrap'],
      input: {
        lit: path.resolve(__dirname, 'src/components/Lit/index.ts'),
      },
      output: [
        {
          dir: 'dist/lit',
          format: 'es',
          entryFileNames: 'lit.js',
        },
      ],
    },
  },
});
