// configure webpack to render JSX in node env
const path = require('path');
const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');

const config = {
  // inform webpack to render a bundle.js for node, not for browser
  target: 'node',

  // entry point of server 
  entry: './src/server.js',

  // tell webpack where to put the output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}

module.exports = merge(baseConfig, config);