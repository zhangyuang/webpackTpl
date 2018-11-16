const path = require('path')

module.exports = {
  build_type: 'build',
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../build'), // 输出的文件目录
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    cssSourceMap: true,
    productionGzip: false, // 构建时开启gzip
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report, // 可视化分析打包结果
    notCoverPublishMode: true // 是否为文件生成hash后缀
  },
  testing: {
    env: require('./testing.env'),
    assetsRoot: path.resolve(__dirname, '../build'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    cssSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8081,
    autoOpenBrowser: false,
    assetsRoot: path.resolve(__dirname, '../build'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}
