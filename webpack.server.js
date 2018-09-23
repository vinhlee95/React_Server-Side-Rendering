// configure webpack to render JSX in node env
const path = require('path');

module.exports = {
  // inform webpack to render a bundle.js for node, not for browser
  target: 'node',

  // entry point of server 
  entry: './src/server.js',

  // tell webpack where to put the output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // tell webpack to run babel on every file it runs thru
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browser: ['last 2 versions'] }}]
          ]
        }
      }
    ]
  }
}