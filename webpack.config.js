const path = require('path');

module.exports = {
  entry: './src/dislexicon.js',
  mode: 'production',
  output: {
    filename: 'dislexicon.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  }, };
