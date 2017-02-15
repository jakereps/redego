const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '../app/js/main.jsx'),
    vendor: ['react']
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
