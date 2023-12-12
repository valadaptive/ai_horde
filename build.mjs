import esbuild from 'esbuild'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const currentDir = dirname(fileURLToPath(import.meta.url))
const packageJson = JSON.parse(readFileSync(join(currentDir, 'package.json'), 'utf-8'))

esbuild.buildSync({
    absWorkingDir: process.cwd(),
    entryPoints: ['index.ts'],
    minifyIdentifiers: true,
    minifyWhitespace: true,
    minifySyntax: false,
    outfile: 'index.js',
    platform: 'node',
    keepNames: true,
    format: 'cjs',
    bundle: true,
    define: {
        // Inject package.json information into the build
        // This makes it browser-compatible since we don't need to read any files at runtime
        PACKAGE_INFO: JSON.stringify({
            name: packageJson.name,
            version: packageJson.version,
            bugs: packageJson.bugs.replace('https://', '')
        })
    }
})