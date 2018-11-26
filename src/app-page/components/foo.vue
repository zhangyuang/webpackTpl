<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
     webpack + vue 项目性能优化指南
      <a href="https://zhuanlan.zhihu.com/p/46971923" target="_blank" rel="noopener">webpack+vue多页面应用打包优化实战</a>.
    </p>
    <h3>开发规范</h3>
      <p>项目结构按照xxx.html对应src/xxx文件夹规范开发。一个html页面文件对应src下同名的目录</p>
    <h3>有何亮点</h3>
    <ul>
     <li class="active">自动分析打包页面依赖的模块，保证该页面引用的js资源只包含该页面所需的模块</li>
     <li>添加postcss-loader，无需手动添加浏览器前缀</li>
     <li>升级到了babel7，使用transform-runtime代替polyfill，大大减少打包文件体积</li>
     <li>webpack配置文件关键配置皆附带中文注释</li>
     <li>根据生产环境和开发环境使用不同版本的vue源文件</li>
     <li>开发规范定制 eslint or standard</li>
     <li>开发工具定制 是否需要添加vuex or vue-router</li>
     <li>执行 npm run analyze 生成可视化打包文件</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'foo'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
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
}
.active {
  color: red;
}
</style>
