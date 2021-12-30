import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import externals from 'rollup-plugin-node-externals';
import del from 'rollup-plugin-delete';

import pkg from './package.json';

export default [{
  input: 'src/index.ts',
  
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    del({targets: "dist/*"}),
    externals({deps: true}),
    nodeResolve({ extensions: [ '.js', '.jsx', '.ts', '.tsx' ] }),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: '**/node_modules/**',
      extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
    })
  ]
}];