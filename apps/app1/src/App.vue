<template>
  <h1>我是子应用app1</h1>
  <img alt="test" :src="resolveAbsPath('/static/img/aoligei.jpg')">
  <img alt="Vue logo" src="./assets/logo.png">
  <br/>
  <router-link to="/">去首页</router-link>
  <router-link to="/about" style="margin-left:20px">去关于页</router-link>
  <br/>
  <router-view />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import { resolveAbsPath } from './utils/path'
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    resolveAbsPath
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
