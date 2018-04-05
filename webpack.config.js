'use strict';

const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const LANG = process.env.LANGUAGE || 'ru';

module.exports = {
  mode: NODE_ENV == 'development' ? 'development' : 'production',

  entry: './js/main.js',

  output: {
    path: __dirname + '/build/js',
    filename: 'app.js'
  },

  // watch: NODE_ENV == 'development',
  // watchOptions: {
  //   aggregateTimeout: 100
  // },

  devtool: NODE_ENV == 'development' ? 'source-map' : false,

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  resolve: {
    modules: ['node_modules'],
    extensions: [' ', 'js']
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: JSON.stringify(LANG)
    })
  ]
}
