module.exports = {
  module: {
    rules: {
      js: {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'node >15' }],
              ['@babel/preset-react', { runtime: 'automatic' }]
            ]
          }
        }
      }
    }
  }
}
