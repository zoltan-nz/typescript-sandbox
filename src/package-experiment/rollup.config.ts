import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('../../package.json');

export default {
  input: './src/package-experiment/age-calculator.ts',
  output: [{ file: pkg.main, name: 'AgeCalculator', format: 'umd', sourcemap: 'inline' }],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: './**',
  },
  plugins: [
    // Allow json resolution
    json(),

    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve({ browser: true }),

    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true, inlineSourceMap: true }),

    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
};
