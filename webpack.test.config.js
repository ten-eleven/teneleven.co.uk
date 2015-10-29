var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool:"inline-source-map",
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/'
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader?instance=jsx',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['null-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(jpg|png)$/,
        loaders: [
            'file-loader?name=[path][name].[ext]'
        ],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};