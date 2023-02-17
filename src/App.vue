<template>
  <Nav></Nav>
  <router-view>
    <the-header>
    </the-header>
  </router-view>
</template>

<script>
import Nav from './components/TheNav.vue'
import TheHeader from './layout/TheHeader.vue'

export default {
  name: 'App',
  components: {
    Nav,
    TheHeader
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
