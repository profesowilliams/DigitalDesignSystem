// Import rollup plugins
import { copy } from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import summary from 'rollup-plugin-summary';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';

// Function to strip ?inline from paths
const stripInline = (path) => path.replace('?inline', '');

export default {
  input: 'src/components/Lit/index.ts', // specify the entry point for the app
  plugins: [
    // Alias to remove ?inline from import paths
    alias({
      entries: [
        {
          find: /^(.*)\?inline$/,
          replacement: (match, p1) => stripInline(p1),
        }
      ]
    }),
    // Resolve bare module specifiers to relative paths
    resolve({
      extensions: ['.js', '.ts', '.tsx'],
    }),
    // TypeScript support
    typescript(),
    // Handle SCSS files
    postcss({
      extensions: ['.css', '.scss'],
      extract: true,
      minimize: true,
      use: [
        ['sass', { includePaths: ['./src/styles', './node_modules'] }]
      ]
    }),
    // Print bundle summary
    summary(),
    // Optional: copy any static assets to build directory
    copy({
      patterns: ['images/**/*'],
    }),
  ],
  output: {
    dir: 'build/lit',
    format: 'es',
    sourcemap: true,
  },
  preserveEntrySignatures: 'strict',
};
