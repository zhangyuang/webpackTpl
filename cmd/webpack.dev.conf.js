const utils = require('./utils')
const webpack = require('webpack')
const glob = require('glob')
const path = require('path')
const config = require('../build_config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach((name) => {
  baseWebpackConfig.entry[name] = ['./cmd/dev-client'].concat(baseWebpackConfig.entry[name])
})

const plugins = [
  new webpack.DefinePlugin({
    'process.env': config.dev.env
  }),
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]

const files = glob.sync('*.html', {cwd: path.resolve(__dirname, '../src')})

for (let i = 0, item; i < files.length; i++) {
  item = files[i]
  plugins.push(
    new HtmlWebpackPlugin({
      filename: item,
      template: `./src/${item}`,
      excludeChunks: files.join(',').replace(`${item}`, '').replace(',,', ',').replace(/\.html/g, '').split(','),
      inject: true
    })
  )
}

plugins.push(new FriendlyErrorsPlugin())

module.exports = merge(baseWebpackConfig, {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js', // 开发环境加载完整版的vue
      '@': resolve('src')
    }
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins
})
