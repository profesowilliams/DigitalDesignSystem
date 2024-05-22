const path = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        react: path.resolve(__dirname, 'src/components/React/index.ts'),
      },
      output: [
        {
          dir: 'dist/react',
          format: 'es',
          entryFileNames: 'react.js',
        },
      ],
    },
  },
});
