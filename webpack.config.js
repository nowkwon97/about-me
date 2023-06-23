const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    entry: ['webpack/hot/poll?100', './src/main.ts'],
    watch: true,
    target: 'node',
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    mode: 'development',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js',
    },
  },
  {
    entry: './client/src/index.tsx',
    watch: true,
    target: 'web',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    mode: 'development',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      path: path.join(__dirname, 'client/build'),
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'client/build'),
      port: 3000,
      hot: true,
      historyApiFallback: true,
    },
  },
];
