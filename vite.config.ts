/// <reference types="vitest/config" />
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
    const isLibrary = mode === 'library'

    return {
        base: './',
        build: isLibrary
            ? {
                  cssCodeSplit: false,
                  emptyOutDir: true,
                  lib: {
                      entry: path.resolve(__dirname, 'src/components/index.ts'),
                      fileName: format => {
                          if (format === 'es') {
                              return 'index.mjs'
                          }
                          if (format === 'cjs') {
                              return 'index.cjs'
                          }
                          return 'index.js'
                      },
                      formats: ['es', 'cjs'],
                      name: 'NeumorphismUI',
                  },
                  rollupOptions: {
                      // Mark these as external so they're not bundled
                      external: [
                          'react',
                          'react-dom',
                          'react/jsx-runtime',
                          '@base-ui/react',
                          'tailwindcss',
                          'tailwind-merge',
                          'class-variance-authority',
                          'lucide-react',
                      ],
                      output: [
                          {
                              entryFileNames: 'index.mjs',
                              format: 'es',
                              globals: {
                                  '@base-ui/react': 'BaseUI',
                                  'class-variance-authority': 'cva',
                                  'lucide-react': 'lucideReact',
                                  react: 'React',
                                  'react-dom': 'ReactDOM',
                                  'react/jsx-runtime': 'react/jsx-runtime',
                                  'tailwind-merge': 'twMerge',
                                  tailwindcss: 'tailwindcss',
                              },
                          },
                          {
                              entryFileNames: 'index.cjs',
                              format: 'cjs',
                              globals: {
                                  '@base-ui/react': 'BaseUI',
                                  'class-variance-authority': 'cva',
                                  'lucide-react': 'lucideReact',
                                  react: 'React',
                                  'react-dom': 'ReactDOM',
                                  'react/jsx-runtime': 'react/jsx-runtime',
                                  'tailwind-merge': 'twMerge',
                                  tailwindcss: 'tailwindcss',
                              },
                          },
                      ],
                  },
                  sourcemap: true,
              }
            : undefined,
        plugins: [
            react({
                jsxRuntime: 'automatic',
            }),
            tailwindcss(),
            ...(isLibrary
                ? [
                      dts({
                          include: ['src/components'],
                          tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
                      }),
                  ]
                : []),
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
                        storybookTest({
                            configDir: path.join(__dirname, '.storybook'),
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
