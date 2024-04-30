// rollup.config.mjs
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: './src/index.ts',
    output: {
      file: './build/clientlib-webcomponents.js',
      format: 'esm',
      sourcemap: true,
      plugins: [
        terser({
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
            drop_console: true,
            drop_debugger: true,
          },
          output: { quote_style: 1 },
        }),
      ],
      assetFileNames: '[name][extname]',
    },
    plugins: [
      del({ targets: 'build/*' }),
      nodeResolve({
        extensions: ['.css'],
      }),
    ],
  },
];
