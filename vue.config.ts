const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: config => {
    Object.assign(config, {
      resolve: {
        alias: { '@': path.resolve(__dirname, './src') }
      }
    })
  }
}
