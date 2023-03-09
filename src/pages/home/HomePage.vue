<template>
  <the-header></the-header>
  <book-list></book-list>
  <about-author></about-author>
  <order-form></order-form>
  <BookStore/>
  <BookCopy/>
</template>

<script>
import TheHeader from '../../layout/TheHeader.vue'
import BookList from '../../components/BookList.vue'
import AboutAuthor from '../../components/AboutAuthor.vue'
import BookStore from '../../components/BookStore.vue'
import BookCopy from "@/components/BookCopy";
export default {
  name: "HomePage",
  components: {
    BookCopy,
    TheHeader,
    BookList,
    AboutAuthor,
    BookStore
  }
}
</script>

<style scoped>

</style>