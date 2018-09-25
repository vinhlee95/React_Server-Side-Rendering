// configure webpack to render JSX in node env
const path = require('path');
const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');

const config = {

  // entry point of server 
  entry: './src/client/client.js',

  // tell webpack where to put the output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = merge(baseConfig, config);