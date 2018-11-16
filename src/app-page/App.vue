<template>
  <div id="app">
    <img alt="Vue logo" src="./static/logo.jpeg" class="logo">
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/helloworld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted () {
      
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
    width: 100px;
}
</style>
