import json from 'rollup-plugin-json';

import pkg from './package.json';

export default [
    // browser-friendly UMD build
    {
        input: 'src/index.js',
        output: {
            name: 'bem-classnames-maker',
            file: pkg.browser,
            format: 'umd',
        },
        plugins: [json()],
    },

    // CommonJS (for Node) and ES module (for bundlers) build.
    {
        input: 'src/index.js',
        output: [{ file: pkg.main, format: 'cjs' }, { file: pkg.module, format: 'es' }],
        plugins: [json()],
    },
];
