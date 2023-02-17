<template>
  <Nav></Nav>
  <router-view>
    <the-header>
    </the-header>
    <book-list></book-list>
  </router-view>
</template>

<script>
import Nav from './components/TheNav.vue'
import TheHeader from './layout/TheHeader.vue'
import BookList from './components/BookList.vue'

export default {
  name: 'App',
  components: {
    Nav,
    TheHeader,
    BookList
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
