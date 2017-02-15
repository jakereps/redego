const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/js/main.jsx'],
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    // new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  target: 'electron-renderer'
};
