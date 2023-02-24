<template>
  <base-wrapper>
    <div class="mainBooks">
      <h1 class="mainBooks__title">Author books</h1>
      <div class="mainBooks__allBooks">
        <book-card/>
        <order-form/>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
import BookList from "@/components/BookList";

export default {
  name: "MainBooks",
  components: BookList
}
</script>

<style scoped lang="scss">
.mainBooks {
  padding: 25px;

  &__allBooks {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__title {
    font-family: 'Cardo';
    font-weight: 400;
    font-size: 42px;
    line-height: 50px;
    text-align: center;
    color: #1B3764;
  }
}

</style>