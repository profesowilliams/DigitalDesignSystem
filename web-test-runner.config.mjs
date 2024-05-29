import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  files: 'test/**/*.test.ts', // Adjust the path to your test files
  nodeResolve: true,
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    // playwrightLauncher({ product: 'firefox' }),
    // playwrightLauncher({ product: 'webkit' }),
  ],
  plugins: [
    esbuildPlugin({
      ts: true,
      tsconfig: 'tsconfig.json',
      loaders: {
        '.ts': 'ts',
      },
    }),
  ],
  testFramework: {
    config: {
      ui: 'bdd',
      timeout: '60000',
    },
  },
  middleware: [
    async (context, next) => {
      if (context.request.url.includes('/node_modules/')) {
        await next();
      } else {
        await next();
      }
    },
  ],
  exclude: [
    '**/node_modules/**/*', // Ignore all files in node_modules
  ],
  preserveSymlinks: true,
  debug: false, // Enable debug mode for more detailed logs
};
