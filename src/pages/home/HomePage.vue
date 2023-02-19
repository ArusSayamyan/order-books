<template>
  <the-header></the-header>
  <book-list></book-list>
  <about-author></about-author>
  <order-form></order-form>
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