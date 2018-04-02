'use strict';

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './js/main.js',

  output: {
    path: __dirname + '/build/js',
    filename: 'build.js'
  },

  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: 'source-map',
  // devServer: {
  //   contentBase: './build',
  //   inline: true
  // },

  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['build'] }
    })
  ]
}
