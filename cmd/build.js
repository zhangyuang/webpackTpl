require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora') // 生成命令行loading icon
const rm = require('rimraf') // 类似于 rm -rf
const path = require('path') // 不解释
const webpack = require('webpack') // 不解释
const config = require('../build_config')
const minimist = require('minimist') // 格式化命令行参数
const glob = require('glob')
const fs = require('fs')
const args = minimist(process.argv)

if (args.type === 'testing') {
  config.build_type = 'testing'
} else {
  config.build_type = 'build'
}
const webpackConfig = require('./webpack.prod.conf')
const spinner = ora('building for production...')
spinner.start()

rm(path.join(config[config.build_type].assetsRoot, config[config.build_type].assetsSubDirectory), err => {
  // 先删除build/static目录下的旧文件
  if (err) {
    throw err
  }

  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) {
      throw err
    }
    process.stdout.write(`${stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    })}\n\n`)

    const files = glob.sync('*.html', {cwd: path.resolve(__dirname, '../build')}) // glob写一个路径匹配规则，匹配build目录下的所有.html文件

    files.forEach((item) => {
      item = path.resolve(__dirname, `../build/${item}`)
      let string = fs.readFileSync(item).toString()
      string = string.replace(/&#10;/g, '&\\#10;') // 替换html内容中的所有换行符
      fs.writeFileSync(item, string)
    })
  })
})
