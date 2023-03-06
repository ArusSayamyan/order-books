<template>
  <the-header></the-header>
  <book-list></book-list>
  <about-author></about-author>
  <order-form></order-form>
  <BookStore/>
</template>

<script>
import TheHeader from '../../layout/TheHeader.vue'
import BookList from '../../components/BookList.vue'
import AboutAuthor from '../../components/AboutAuthor.vue'
import BookStore from '../../components/BookStore.vue'
export default {
  name: "HomePage",
  components: {
    TheHeader,
    BookList,
    AboutAuthor,
    BookStore
  }
}
</script>

<style scoped>

</style>