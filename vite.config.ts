/// <reference types="vitest/config" />
import UnpluginTypia from '@ryoppippi/unplugin-typia/vite';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { playwright } from '@vitest/browser-playwright';
import autoprefixer from 'autoprefixer';
import path, { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  base: "/game-event",
  assetsInclude: ["**/*.atlas", "**/*.skel"],
  plugins: [tsconfigPaths(), react(), tailwindcss(), UnpluginTypia()],
  css: {
    postcss: {
      plugins: [autoprefixer()]
    }
  },
  build: {
    rollupOptions: {
      input: {
        // main: resolve(__dirname, 'index.html'),
        explorer: resolve(__dirname, 'apps/explorer/index.html')
      }
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
        // The plugin will run tests for the stories defined in your Storybook config
        // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
        storybookTest({
          configDir: path.join(__dirname, '.storybook')
        })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright(),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});