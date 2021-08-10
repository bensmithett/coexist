const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpackConfig = require('@coexist/webpack-config')

module.exports = {
  context: __dirname,
  entry: './index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'last 1 Chrome versions' }],
              ['@babel/preset-react', { runtime: 'automatic' }]
            ]
          }
        }
      }
    ]
  },
  target: 'webworker'
}
