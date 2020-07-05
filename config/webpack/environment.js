// const { environment } = require('@rails/webpacker')




// const webpack = require('webpack')
// environment.plugins.prepend('Provide',
//   new webpack.ProvidePlugin({
//     $: 'jquery/src/jquery',
//     jQuery: 'jquery/src/jquery'
//   })
// )

// const aliasConfig = {
//     'jquery': 'jquery-ui-dist/external/jquery/jquery.js',
//     'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
// };

// environment.config.set('resolve.alias', aliasConfig);

// module.exports = environment

const { environment } = require('@rails/webpacker');


const coffee = require('./loaders/coffee')

environment.loaders.append('coffee', coffee)
const webpack = require('webpack');


// resolve-url-loader must be used before sass-loader
environment.loaders.get('sass').use.splice(-1, 0, {
    loader: 'resolve-url-loader',
    options: {
      attempts: 1
    }
  });
  
// module: {
//     loaders: [
//         {
//             test: /\.css$/,
//             include: [
//                 path.resolve(__dirname, "not_exist_path")
//             ],
//             loader: "style!css"
//         }
// remote:        warning " > mini-css-extract-plugin@0.8.2" has unmet peer dependency "webpack@^4.4.0".
// remote:        warning " > webpack-dev-server@3.11.0" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
// remote:        warning "webpack-dev-server > webpack-dev-middleware@3.7.2" has unmet peer dependency "webpack@^4.0.0".



// Add an additional plugin of your choosing : ProvidePlugin

environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
        $: 'jquery',
        JQuery: 'jquery',
        jquery: 'jquery',
        'window.Tether': "tether",
        Popper: ['popper.js', 'default'], // for Bootstrap 4
    })
)



const aliasConfig = {
    'jquery': 'jquery/src/jquery',
    'jquery-ui': 'jquery-ui-dist/jquery-ui.js'

};

environment.config.set('resolve.alias', aliasConfig);

//
module.exports = environment;