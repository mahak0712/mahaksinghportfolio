process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()

// module.exports = {
//     test: /\.styl(us)?$/,
//     use: [
//       MiniCssExtractPlugin.loader,
//       'css-loader',
//       'stylus-loader',
//       'resolve-url-loader'
//     ]
//   }
  