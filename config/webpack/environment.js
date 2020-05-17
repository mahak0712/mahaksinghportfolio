const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
const coffee = require('./loaders/coffee')

environment.loaders.append('coffee', coffee)
environment.plugins.append('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
  })
)

module.exports = environment


// // const { environment } = require('@rails/webpacker')




// // const webpack = require('webpack')
// // environment.plugins.prepend('Provide',
// //   new webpack.ProvidePlugin({
// //     $: 'jquery/src/jquery',
// //     jQuery: 'jquery/src/jquery'
// //   })
// // )

// // const aliasConfig = {
// //     'jquery': 'jquery-ui-dist/external/jquery/jquery.js',
// //     'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
// // };

// // environment.config.set('resolve.alias', aliasConfig);

// // module.exports = environment

// const { environment } = require('@rails/webpacker');
// const merge = require('webpack-merge')

// const coffee = require('./loaders/coffee')
// const styl =  require('./loaders/stylus')

// environment.loaders.append('coffee', coffee)
// const webpack = require('webpack');


// // resolve-url-loader must be used before sass-loader
// environment.loaders.get('sass').use.splice(-1, 0, {
//     loader: 'resolve-url-loader'
//   });

// const myCssLoaderOptions = {
// modules: {
//     localIdentName: '[name]__[local]___[hash:base64:5]'
// },
// sourceMap: true,
// }

// const CSSLoader = environment.loaders.get('sass').use.find(el => el.loader === 'css-loader')

// CSSLoader.options = merge(CSSLoader.options, myCssLoaderOptions)

// environment.loaders.prepend('stylus', styl)
  
// // module: {
// //     loaders: [
// //         {
// //             test: /\.css$/,
// //             include: [
// //                 path.resolve(__dirname, "not_exist_path")
// //             ],
// //             loader: "style!css"
// //         }


  

// // Add an additional plugin of your choosing : ProvidePlugin

// environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
//         $: 'jquery',
//         JQuery: 'jquery',
//         jquery: 'jquery',
//         'window.Tether': "tether",
//         Popper: ['popper.js', 'default'], // for Bootstrap 4
//     })
// )



// const aliasConfig = {
//     'jquery': 'jquery/src/jquery',
//     'jquery-ui': 'jquery-ui-dist/jquery-ui.js'

// };

// environment.config.set('resolve.alias', aliasConfig);

// //
// module.exports = environment;