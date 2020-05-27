const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    home: path.resolve(__dirname, './src/index.js'),
    jsHome: path.resolve(__dirname, './src/js/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: MiniCSSExtractPlugin.loader
        }, 'css-loader']
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Plugins'
    }),
    new MiniCSSExtractPlugin ({
      filename: 'styles/[name].css'
    })
  ]
}