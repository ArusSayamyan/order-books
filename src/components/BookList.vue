<template>
  <base-wrapper>
    <div class="authorBook">
      <h1 class="authorBook__title">The Author’s Book</h1>
      <img src="../assets/yellowLine.svg" alt="" class="authorBook__line">
      <div class="authorBook__cardWrapper">
        <book-card></book-card>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
import {ref} from "vue";

export default {
  name: "BookList",

  setup() {
    const isShown = ref(false)

    return {
      isShown,
    }
  }

}
</script>

<style scoped lang="scss">
.authorBook {
  padding: 130px 0 90px;

  &__line {
    display: block;
    margin: 0 auto;
  }

  &__title {
    font-family: 'Cardo';
    font-weight: 400;
    font-size: 42px;
    line-height: 50px;
    text-align: center;
    color: #1B3764;
  }

  &__cardWrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    padding: 0 90px;
  }
}
</style>