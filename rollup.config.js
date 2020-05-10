import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
const babel = require('rollup-plugin-babel');

module.exports = [{
    input: `src/index.js`,
    output: {
        file: `dist/lazy-tube.esm.js`,
        format: 'esm',
    },
    plugins: [
        resolve(),
        terser(),
    ]
}, {
    input: `src/index.js`,
    output: {
        file: `dist/lazy-tube.es5.js`,
        format: 'iife',
    },
    plugins: [
        resolve(),
        babel({
            externalHelpers: false,
            sourceMap: false,
            exclude: [/\/core-js\//],
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false,
                        targets: {
                            browsers: ['ie 11'],
                        },
                    },
                ],
            ],
        }),
        terser(),
    ]
}];
