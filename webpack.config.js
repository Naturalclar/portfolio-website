const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/client/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test:/\jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test:/\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: {importLoaders: 1}},
          'postcss-loader'
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Jesse's Portfolio Page",
      template: 'assets/index.html'
    })
  ]
}