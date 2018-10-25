const path = require('path')

module.exports = {
  build_type: 'build',
  daily_cdn: '//g-assets.daily.taobao.net/',
  publish_cdn: '//g.alicdn.com/',
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../build/index.html'),
    assetsRoot: path.resolve(__dirname, '../build'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    cssSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    // 是否非覆盖发布
    notCoverPublishMode: true
  },
  testing: {
    env: require('./testing.env'),
    index: path.resolve(__dirname, '../build/index.html'),
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
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
