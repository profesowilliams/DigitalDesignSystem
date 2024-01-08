// rollup.config.js
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete'

const devMode = (process.env.NODE_ENV === 'development');
console.log(`${devMode ? 'development' : 'production'} mode bundle`);

export default [
  {

    input: './src/index.js',

    output: {
      file: './build/clientlib-webcomponents.js',
      format: 'es',
      sourcemap: devMode ? 'inline' : false,
      plugins: [
        terser({
          ecma: 2020,
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
            drop_console: !devMode,
            drop_debugger: !devMode,
          },
          output: { quote_style: 1 },
        }),
        del({ targets: 'build/*' }),
      ],
    },

  },
];
