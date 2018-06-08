  var path = require('path');
  var webpack = require("webpack");

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    mode: 'development',
    //mode: 'production',
    module: {
      rules: [{
        test: /\.js$/,
        type: "javascript/auto",
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: "babel-loader"
      }, {
        test: /\.less$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'less-loader'
        ]
      }]
    }
  }
