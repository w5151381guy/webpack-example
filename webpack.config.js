const path = require('path');
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'), 
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015-without-strict']
          }
        },
        { test: /\.json$/, loader: 'json-loader' }
      ]
    },
    plugins: [
      new UglifyJSPlugin()
    ]
}