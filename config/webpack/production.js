process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

config.log_level = debug
module.exports = environment.toWebpackConfig()