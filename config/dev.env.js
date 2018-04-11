'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_HOST: '//localhost:8080/api'
  API_HOST: '//192.168.2.112:8080/api'
})
