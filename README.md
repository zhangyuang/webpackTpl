## webpack + vue多页面应用脚手架模版

### 开发规范
项目结构按照xxx.html对应src/xxx文件夹规范开发。一个html页面文件对应src下同名的目录

### 有何亮点
- 自动分析打包页面依赖的模块，保证该页面引用的js资源只包含该页面所需的模块 一般来说加载的js包括manifest.js vendor.js(多个页面共同依赖的模块) vendor-app.js(该页面用到的第三方模块) app-page.js
- 添加postcss-loader，无需手动添加浏览器前缀
- 升级到了babel7，使用transform-runtime代替polyfill，大大减少打包文件体积
- webpack配置文件关键配置皆附带中文注释
- 根据生产环境和开发环境使用不同版本的vue源文件
- 开发规范定制 eslint or standard
- 开发工具定制 是否需要添加vuex or vue-router
- 执行 npm run analyze 生成可视化打包文件

### 文章总结
[webpack+vue多页面应用打包优化实战](https://zhuanlan.zhihu.com/p/46971923)