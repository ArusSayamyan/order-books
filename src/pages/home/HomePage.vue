<template>
  <the-header></the-header>
  <book-list></book-list>
  <about-author></about-author>
</template>

<script>
import TheHeader from '../../layout/TheHeader.vue'
import BookList from '../../components/BookList.vue'
import AboutAuthor from '../../components/AboutAuthor.vue'
export default {
  name: "HomePage",
  components: {
    TheHeader,
    BookList,
    AboutAuthor
  }
}
</script>

<style scoped>

</style>