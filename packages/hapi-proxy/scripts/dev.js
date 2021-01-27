const { fork } = require('child_process')
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const webpackConfig = require('@coexist/webpack-config')

let server

process.on('exit', onExit)
process.on('SIGINT', onExit)
process.on('SIGTERM', onExit)

compile()

function compile() {
  webpack({
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
  }).watch({}, (err, stats) => {
    console.log(
      stats.toString({
        chunks: false,
        colors: true,
        children: false
      })
    )
    if (server) {
      console.log('Restarting proxy server')
      server.kill()
    } else {
      console.log('Starting proxy server')
    }
    server = fork(path.join(__dirname, '../build/proxy.compiled.js'))
  })
}

function onExit() {
  if (server) server.kill()
  process.exit()
}
