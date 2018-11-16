const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const glob = require('glob')
const config = require('../build_config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
let plugins = [
  new webpack.DefinePlugin({
    'process.env': config.build.env
  }),
  // 提取css为单独的文件
  new ExtractTextPlugin({
    filename: config.build.notCoverPublishMode
      ? utils.assetsPath('css/[name].[contenthash].css')
      : utils.assetsPath('css/[name].css'),
    allChunks: true
  }),
  // 压缩css文件，并且去除重复打包的css，例如多个文件引入相同的css文件
  new OptimizeCSSPlugin({
    cssProcessorOptions: {
      safe: true
    }
  }),
  new webpack.NamedModulesPlugin(),
  // babel-minify webpack插件，压缩js
  new MinifyPlugin({
    removeConsole: true // 去除代码中的console
  })
]

const files = glob.sync('*.html', {cwd: path.resolve(__dirname, '../src')})

let vendorArr = []
for (let i = 0; i < files.length; i++) {
  const item = files[i]
  const filename = item.split('.')[0]
  const vendorChunk = 'vendor-' + filename.split('-')[0]
  vendorArr.push(filename)
  const chunks = ['manifest', 'vendor', vendorChunk, filename]
  const config = {
    filename: `../build/${item}`,
    template: `src/${item}`,
    chunks: chunks,
    inject: true,
    minify: {
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    },
    chunksSortMode: function (chunk1, chunk2) {
      // 定义chunk的加载顺序,使其按chunks的顺序加载
      var order1 = chunks.indexOf(chunk1.names[0])
      var order2 = chunks.indexOf(chunk2.names[0])
      return order1 - order2
    }
  }
  plugins.push(
    new HtmlWebpackPlugin(config)
  )
}

let vendorObj = {}
vendorArr.forEach(fileName => {
  // vendorArr = ['app-page', 'out-page']
  // vendorObj = {'app-page': {}, 'out-page': {}}
  vendorObj[fileName] = {}
})

plugins = plugins.concat([
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module, count) {
      // 把所有的node_modules模块打包进vendor.js，然后把只有一个页面用到的模块单独拆分到该页面的vendor
      if (count == 1 && module.issuer && module.resource.match('node_modules')) {
        // count为1代表该模块只有一个页面用到
        vendorArr.forEach(fileName => {
          if (module.issuer.resource.match(fileName) || vendorObj[fileName][module.issuer.resource]) {
            // 如果一个模块的加载来源匹配到指定fileName，或该模块的加载来源的加载来源匹配到指定fileName
            // 例如a.js 被a页面加载 b.js被a.js加载，b.js也需要打包到a页面的vendor chunk中
            vendorObj[fileName][module.resource] = true
          }
        })
      }
      return (
        module.resource &&
        /\.js$/.test(module.resource) &&
        module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
      )
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity
  })
])
for (let i = 0; i < files.length; i++) {
  const item = files[i]
  const filename = item.split('.')[0]
  const vendorChunk = 'vendor-' + filename.split('-')[0]
  plugins = plugins.concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: vendorChunk,
      chunks: ['vendor'],
      minChunks: function (module) {
        return (
          vendorObj[filename][module.resource] // 如果为true则该模块打包进该页面的vendor chunk中
        )
      }
    })
  ])
}

const webpackConfig = merge(baseWebpackConfig, {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.runtime.min.js', // 生产环境只需要加载包含运行时的vue，不需要带编译器，可以大大减小体积
      '@': resolve('src')
    }
  },
  module: {
    // css less scss stylus
    rules: utils.styleLoaders({
      sourceMap: config[config.build_type].productionSourceMap,
      extract: true
    })
  },
  devtool: config[config.build_type].productionSourceMap ? '#source-map' : false,
  output: {
    path: config[config.build_type].assetsRoot,
    filename: config.build.notCoverPublishMode
      ? utils.assetsPath('js/[name].[chunkhash].js')
      : utils.assetsPath('js/[name].js'),
    chunkFilename: config.build.notCoverPublishMode
      ? utils.assetsPath('js/[id].[chunkhash].js')
      : utils.assetsPath('js/[id].js')
  },
  plugins
})

if (config[config.build_type].productionGzip) {
  // 开启gzip压缩
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        `\\.(${config[config.build_type].productionGzipExtensions.join('|')})$`
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config[config.build_type].bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

// 解决build出错但webpack exit code不是0的问题
webpackConfig.plugins.push({
  'apply': (compiler) => {
    compiler.plugin('done', (stats) => {
      if (stats.compilation.errors.length > 0) {
        throw new Error(stats.compilation.errors.map((err) => err.message || err))
        // process.exit(1);
      }
    })
  }
})

module.exports = webpackConfig
