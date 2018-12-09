const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseWebpackConfig = require('./webpack.config.base')

const webpackConfig = merge(baseWebpackConfig, {
  target: 'node', // 指定node运行环境
  entry: {
    app: './src/entry-server.js'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['ignore-loader']
      }
    ]
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2' // 打包成commonjs2规范
  },
  externals: [nodeExternals()], // 不绑定node模块，保留为 require()

  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false'
    })
  ]
})

module.exports = webpackConfig
