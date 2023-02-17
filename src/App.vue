<template>
  <Nav></Nav>
  <router-view></router-view>
</template>

<script>
import Nav from './components/TheNav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
