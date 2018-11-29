<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
     webpack + Vue 项目性能优化指南
      <a href="https://zhuanlan.zhihu.com/p/46971923" target="_blank" rel="noopener">webpack + Vue多页面应用打包优化实战</a>
    </p>
    <h3>开发规范</h3>
    <p>项目结构按照xxx.html对应src/xxx文件夹规范开发。一个html文件对应src目录下同名文件夹</p>
    <ul>
      <li><h3>已有功能</h3></li>
      <li class="active"> 自动分析加载不同页面所需要的第三方模块，防止重复打包</li>
      <li> 支持postcss处理浏览器兼容性问题</li>
      <li> 支持sass less 等css预处理器</li>
      <li> 开发环境热重载</li>
      <li> 生产环境css提取为单独文件 静态资源文件压缩</li>
      <li> babel使用transform-runtime代替polyfill，按需加载使用到的babel特性大大减少打包文件体积</li>
      <li> 预置常用babel插件</li>
      <li> vue-router使用懒加载，减少初次加载的文件体积</li>
      <li> 根据生产环境和开发环境使用不同版本的vue源文件</li>
      <li> 执行 npm run analyze 生成可视化打包文件</li>
      <li> webpack关键配置处皆附有注释，可根据实际需要修改配置</li>
      <li><h3>后续待支持功能</h3></li>
      <li> 支持React多页面应用</li>
      <li> 加入Vue服务端渲染</li>
      <li> 引入Dll加快构建速度</li>
      <li> 升级到webpack4</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'foo',
    data () {
        return {
            msg: 'webpack + Vue 多页面应用项目基础配置 foo页面'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  display: block;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 0;
}
li {
  margin: 5px 10px;
  text-align: left;
}
a {
  color: #42b983;
  text-decoration: none;
}
.active {
  color: red;
}
</style>
