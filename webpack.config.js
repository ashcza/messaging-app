// var path = require("path");
//
// module.exports = {
//   entry: [
//     "./frontend/index.jsx"
//   ],
//   output: {
//     path: path.join(__dirname, 'app', 'assets', 'javascripts'),
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       exclude: /node_modules/,
//       loader: 'babel-loader',
//       query: {
//         presets: ['react', 'es2015', 'stage-1']
//       }
//     }]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   devServer: {
//     historyApiFallback: true,
//     contentBase: './'
//   }
// };


var path = require('path');

module.exports = {
  entry: './frontend/index.jsx',
  output: {
    filename: './bundle.js',
  },
  output: {
      path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};