const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.png$/,
        loader: 'file-loader?name=/img/[name].[ext]'
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  target: 'electron-main'
};
