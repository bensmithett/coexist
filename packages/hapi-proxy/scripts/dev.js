const { fork } = require('child_process')
const path = require('path')
const webpack = require('webpack')
const hapiProxyWebpackConfig = require('./webpack.config.js')

let server

process.on('exit', onExit)
process.on('SIGINT', onExit)
process.on('SIGTERM', onExit)

compile()

function compile() {
  webpack(hapiProxyWebpackConfig).watch({}, (err, stats) => {
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
