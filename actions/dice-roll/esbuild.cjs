const { build } = require('esbuild');

build({
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: 'node',
    entryPoints: ['index.js'],
    outfile: 'dist/index.js',
    target: 'node16',
}).catch(() => process.exit(1));