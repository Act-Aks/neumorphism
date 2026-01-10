import Bun from 'bun'
import dts from 'bun-plugin-dts'

const config = await Bun.build({
    entrypoints: ['./src/components/index.ts'],
    format: 'esm',
    minify: true,
    outdir: './dist',
    plugins: [dts()],
    splitting: true,
    target: 'bun',
})

if (!config.success) {
    console.info('Build failed')
    process.exit(1)
}
console.info('✅ Build succeeded')
