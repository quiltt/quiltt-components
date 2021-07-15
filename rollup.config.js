import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import { terser } from 'rollup-plugin-terser'
import typescriptEngine from 'typescript'

export default {
  input: ['src/index.tsx'],
  output: [
    {
      name: 'index.js',
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
    {
      name: 'index.es.js',
      file: 'dist/index.esm.js',
      format: 'es',
      exports: 'named',
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
      extensions: ['.js', '.ts', 'tsx', 'jsx'],
      babelHelpers: 'runtime',
      exclude: /node_modules/,
      plugins: [
        [
          '@babel/transform-runtime',
          { regenerator: false, useESModules: false },
        ],
      ],
    }),
    postcss({
      modules: false,
      minimize: true,
      extract: true,
      plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }),
    external({
      includeDependencies: true,
    }),
    typescript({
      typescript: typescriptEngine,
      include: ['*.js+(|x)', '**/*.js+(|x)'],
      exclude: [
        'coverage',
        'config',
        'dist',
        'node_modules/**',
        '*.test.{js+(|x), ts+(|x)}',
        '**/*.test.{js+(|x), ts+(|x)}',
      ],
    }),
    url(),
    svgr(),
    resolve(),
    commonjs(),
    terser(),
  ],
}
