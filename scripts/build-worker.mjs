import { build } from 'esbuild';
await build({ entryPoints: ['server/index.ts'], outfile: 'dist/worker/index.js', bundle: true, format: 'esm', jsx: 'automatic', platform: 'browser', target: 'es2022', conditions: ['worker', 'browser'], loader: { '.html': 'text' }, alias: { '@': './src' }, define: { 'process.env.NODE_ENV': '"production"' }, minify: true });
