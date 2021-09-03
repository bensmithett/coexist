const path = require('path')
const webpackConfig = require('@coexist/webpack-config')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: path.join(__dirname, '../proxy.js'),
  externals: [
    nodeExternals({
      additionalModuleDirs: [path.join(__dirname, '../../../node_modules/')],
      allowlist: [/^@coexist/]
    })
  ],
  target: 'node',
  mode: 'none',
  module: {
    rules: [webpackConfig.module.rules.js]
  },
  output: {
    filename: 'proxy.compiled.js',
    path: path.join(__dirname, '../build')
  }
}
