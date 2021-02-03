const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'frontend', 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'frontend', 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'frontend', 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_module/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ],
  },
};