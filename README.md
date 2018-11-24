# webpack + Vue多页面应用脚手架模版

## 开发规范
项目结构按照xxx.html对应src/xxx文件夹规范开发。一个html页面文件对应src下同名的目录

## 已有功能
- [x] 自动分析加载不同页面所需要的第三方模块，防止重复打包
- [x] 支持postcss处理浏览器兼容性问题
- [x] 支持sass less 等css预处理器
- [x] 开发环境热重载
- [x] 生产环境css提取为单独文件 静态资源文件压缩
- [x] babel使用transform-runtime代替polyfill，按需加载使用到的babel特性大大减少打包文件体积
- [x] 预置常用babel插件
- [x] vue-router使用懒加载，减少初次加载的文件体积
- [x] 根据生产环境和开发环境使用不同版本的vue源文件
- [x] 执行 npm run analyze 生成可视化打包文件
- [x] webpack关键配置处皆附有注释，可根据实际需要修改配置

## 后续考虑支持功能
- [ ] 支持React多页面应用
- [ ] 加入Vue服务端渲染
- [ ] 引入Dll加快构建速度
- [ ] 升级到webpack4

## 内置babel插件
- [@babel/preset-env](https://www.baidu.com/link?url=YV7CjHPZWlg3fWk_p5qwdHx4vQgYJDAXb_ldokM4tf1P-ItVo0piyqPdxcY6_JrnAL4sa7Whs7uNJpUaWWcIo_&wd=&eqid=e4b71adc00003376000000045bf8247e) 将基于你的实际浏览器及运行环境，自动的确定babel插件及polyfills，转译ES2015及此版本以上的语言
- [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime/) 使用transform-runtime代替babel-polyfill目的是按需引入你需要babel转换的特性，而不是将整个polyfill引入，并且不会像polyfill一样重写原本的API。缺点是某些不支持的API，例如Object.assign Array.includes, 需要引入单独插件
- [@babel/plugin-transform-object-assign](https://babeljs.io/docs/en/babel-plugin-transform-object-assign/) 为不包含Object.assign的浏览器注册该API
- [@babel/plugin-proposal-json-strings](https://babeljs.io/docs/en/next/babel-plugin-proposal-json-strings.html)
- [@babel/plugin-proposal-decorators](http://npm.taobao.org/package/babel-plugin-transform-decorators-legacy) 给class提供装饰器功能
- [@babel/plugin-proposal-export-namespace-from](https://babeljs.io/docs/en/next/babel-plugin-proposal-export-namespace-from.html) 提供export * as ns from 'mod' 语法
- [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/) vue-router懒加载需要用到的babel插件

## 文章总结
[webpack+Vue多页面应用打包优化实战](https://zhuanlan.zhihu.com/p/46971923)

## 优化前后对比

### 不对多页面应用做任何优化

![优化前](https://img.alicdn.com/tfs/TB1ak1Np4TpK1RjSZR0XXbEwXXa-2874-1580.png)
可以看出，只有app-page页面用到了vue-router但是out-page页面也加载了vendor.js中的vue-router

### 对多页面应用做分离打包优化
![优化后](https://img.alicdn.com/tfs/TB1z5qSp3HqK1RjSZJnXXbNLpXa-2874-1570.png)
可以看出vue-router被单独打包到vendor-app.js文件并且只在app-page中加载
