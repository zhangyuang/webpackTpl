const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseWebpackConfig = require('./webpack.config.base')

const webpackConfig = merge(baseWebpackConfig, {
  target: 'node', // 指定node运行环境
  entry: {
    app: './src/entry-server.js'
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2' // 打包成commonjs2规范
  },
  externals: [nodeExternals()], // 不绑定node模块，保留为 require()

  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_ENV': JSON.stringify('server') // 指定React环境为服务端
    })
  ]
})

module.exports = webpackConfig
