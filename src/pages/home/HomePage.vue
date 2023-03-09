<template>
  <the-header></the-header>
  <book-list></book-list>
  <about-author></about-author>
  <order-form></order-form>
  <BookStore/>
  <BookCopy/>
  <GoalList/>
  <VisionBlock/>
</template>

<script>
import TheHeader from '../../layout/TheHeader.vue'
import BookList from '../../components/BookList.vue'
import AboutAuthor from '../../components/AboutAuthor.vue'
import BookStore from '../../components/BookStore.vue'
import BookCopy from "@/components/BookCopy";
import GoalList from "@/components/GoalList";
import VisionBlock from "@/components/VisionBlock";
export default {
  name: "HomePage",
  components: {
    VisionBlock,
    GoalList,
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