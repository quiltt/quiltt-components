module.exports = {
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
      // plugins: [
      //   '@babel/plugin-transform-runtime',
      //   '@babel/plugin-syntax-dynamic-import',
      //   '@babel/plugin-transform-modules-commonjs',
      //   '@babel/plugin-proposal-optional-chaining',
      //   [
      //     '@babel/plugin-proposal-decorators',
      //     {
      //       legacy: true,
      //     },
      //   ],
      //   [
      //     '@babel/plugin-proposal-class-properties',
      //     {
      //       loose: true,
      //     },
      //   ],
      //   ['@babel/plugin-proposal-private-methods', { loose: true }],
      // ],
    },
  },
}
