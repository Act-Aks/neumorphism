/// <reference types="vitest/config" />
import path from 'node:path'
// https://vite.dev/config/
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const dirname =
    typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig(({ mode }) => {
    const isLibrary = mode === 'library'

    return {
        // Use relative paths so the built site works when deployed under a subpath
        base: './',
        build: isLibrary
            ? {
                  emptyOutDir: true,
                  lib: {
                      entry: path.resolve(__dirname, 'src/components/index.ts'),
                      fileName: format => `index.${format === 'es' ? 'esm.js' : 'js'}`,
                      formats: ['es', 'cjs'],
                      name: 'NeumorphismUI',
                  },
                  rollupOptions: {
                      external: ['react', 'react-dom', 'react/jsx-runtime'],
                      output: {
                          globals: {
                              react: 'React',
                              'react-dom': 'ReactDOM',
                              'react/jsx-runtime': 'react/jsx-runtime',
                          },
                      },
                  },
                  sourcemap: true,
              }
            : undefined,
        plugins: [
            react(),
            tailwindcss(),
            ...(isLibrary ? [dts({ include: ['src/components/**/*'] })] : []),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        test: {
            projects: [
                {
                    extends: true,
                    plugins: [
                        // The plugin will run tests for the stories defined in your Storybook config
                        // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                        storybookTest({
                            configDir: path.join(dirname, '.storybook'),
                        }),
                    ],
                    test: {
                        browser: {
                            enabled: true,
                            headless: true,
                            instances: [
                                {
                                    browser: 'chromium',
                                },
                            ],
                            provider: playwright({}),
                        },
                        name: 'storybook',
                        setupFiles: ['.storybook/vitest.setup.ts'],
                    },
                },
            ],
        },
    }
})
