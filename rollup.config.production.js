// rollup.config.js
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: './src/main.js',

    output: {
      file: './build/clientlib-webcomponents.min.js',
      format: 'esm',
      plugins: [
        terser({
          compress: {
            defaults: true,
          },
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
          },
        }),
      ]
    },
    plugins: [
      del({ targets: 'build/*', }),
      nodeResolve({
        extensions: ['.css']
      }) 
    ],
  }
];