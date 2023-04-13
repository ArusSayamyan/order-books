<template>
  <base-wrapper>
    <div class="authorBook">
      <section-title mainTitle="The Author’s Book"></section-title>
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
  components: {},

  setup() {
    const isShown = ref(false)

    return {
      isShown
    }

  }
}
</script>

<style scoped lang="scss">
.authorBook {
  padding: 130px 0 90px;

  &__cardWrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 90px;
  }
}
</style>