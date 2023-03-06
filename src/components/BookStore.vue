<template>
  <base-wrapper>
    <div class="bookStore">
      <section-title mainTitle="Trusted By The Best"></section-title>
      <div class="bookStore__container">
        <div class="bookStore__wrapper" v-for="book in bookStore" :key="book.bookTitle">
          <img :src="book.bookLogo" alt="" class="bookStore__logo">
          <p class="bookStore__title">{{ book.bookTitle }}</p>
          <p class="bookStore__desc">{{ book.bookDesc }}</p>
        </div>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
import amazen from '@/assets/amazen.png'
import megan from '@/assets/megan.png'
import meganK from '@/assets/meganK.png'
import urban from '@/assets/urban.png'
import {reactive} from "vue";

export default {
  name: "BookStore",
  setup() {
    const bookStore = reactive([
      {
        bookLogo: amazen,
        bookTitle: "Amazen Corp.",
        bookDesc: "They has been helping readers, music lovers, and videophiles find quality material."
      },
      {
        bookLogo: megan,
        bookTitle: "Megan Books.",
        bookDesc: "They has been helping readers, music lovers, and videophiles find quality material."
      },
      {
        bookLogo: meganK,
        bookTitle: "MeganK",
        bookDesc: "They has been helping readers, music lovers, and videophiles find quality material."
      },
      {
        bookLogo: urban,
        bookTitle: "Urban Store",
        bookDesc: "They has been helping readers, music lovers, and videophiles find quality material."
      }
    ])
    return {
      bookStore
    }
  }
}
</script>

<style scoped lang="scss">
.bookStore {
  padding: 130px 0 130px;

  &__container {
    display: flex;
    justify-content: space-between;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 313px;
    width: 100%;
  }

  &__title {
    font-family: 'Cardo';
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #1B3764;
  }

  &__desc {
    text-align: center;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 19px;
    line-height: 28px;
    color: #969AA0;
    margin: 0;
  }
}
</style>