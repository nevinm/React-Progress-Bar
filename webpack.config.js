/*eslint-disable */
var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssLoaderQuery = {
  modules: true,
  importLoaders: 2,
  sourceMap: true,
  localIdentName: '[local]_[hash:base64:3]',
};

const sassLoaderQuery = {
  outputStyle: 'expanded',
  sourceMap: true,
};

module.exports = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: APP_DIR,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.jsx$/,
      include: APP_DIR,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract([
        'css-loader?' + JSON.stringify(cssLoaderQuery),
        'sass-loader?' + JSON.stringify(sassLoaderQuery),
      ]),
    }]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  // Configure webpack to import React when it is referenced
  // in a module that doesn't explicitly import it
  // (e.g. stateless component functions)
  plugins: [
    new webpack.ProvidePlugin({
        React: "react"
    }),
    new ExtractTextPlugin([], 'styles.css'),
  ]
};
