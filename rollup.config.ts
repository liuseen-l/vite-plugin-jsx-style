import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import path from 'node:path'
import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'

export default defineConfig([
  {
    input: './src/index.ts',
    output: [
      {
        file: path.resolve('./dist/index.mjs'),
        format: 'es',
      },
    ],
    plugins: [typescript(), nodeResolve(), commonjs()],
  },
  {
    input: './src/index.ts',
    plugins: [dts()],
    output: [
      {
        format: 'esm',
        file: 'dist/index.d.ts',
      },
    ],
  },
])
