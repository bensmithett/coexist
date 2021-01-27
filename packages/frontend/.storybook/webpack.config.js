const shared = require('@coexist/webpack-config')

module.exports = async ({ config, mode }) => {
  return {
    ...config,
    module: {
      rules: [shared.module.rules.js]
    }
  }
}
