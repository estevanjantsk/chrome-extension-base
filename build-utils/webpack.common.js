/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '..', './src/index.js'),
    'content-script': path.resolve(__dirname, '..', './src/content-script.js'),
    background: path.resolve(__dirname, '..', './src/background.js'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: '[name].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello Webpack bundled JavaScript Project',
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', './src/manifest.json'),
          to: path.resolve(__dirname, '..', './dist'),
        },
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, '..', './dist'),
    allowedHosts: 'all',
    hot: true,
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
  },
};
