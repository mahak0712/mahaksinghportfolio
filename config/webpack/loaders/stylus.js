const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  test: /\.styl(us)?$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'stylus-loader'
  ]
}
