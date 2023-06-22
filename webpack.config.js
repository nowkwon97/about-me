import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        exclude: /node_modules|dist/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
