<template>
  <Nav></Nav>
  <router-view>
  </router-view>
</template>

<script>
import Nav from './components/TheNav.vue';
import {useStore} from 'vuex';


export default {
  name: 'App',
  components: {
    Nav,
  },
  setup() {
    const store = useStore();
    return {
      store
    }
  },
  created() {
    this.store.dispatch('getNewCard')
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
