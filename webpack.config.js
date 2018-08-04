const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'app.[chunkhash].js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css'
    })
  ],
  devServer: {
    stats: 'minimal',
    contentBase: 'src/assets',
    overlay: true,
    historyApiFallback: true
  },
  watchOptions: {
    ignored: /node_modules/
  }
}

module.exports = config