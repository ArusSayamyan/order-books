<template>
  <base-wrapper>
    <div class="authorBook">
      <h1 class="authorBook__title">The Author’s Book</h1>
      <img src="../assets/yellowLine.svg" alt="" class="authorBook__line">
      <div class="authorBook__cardWrapper">
        <div class="authorBook__card" v-for="card in cards" :key="card.id">
          <div class="authorBook__cardImgContent">
            <img :src="card.bookImg" alt="" class="authorBook__cardImg">
          </div>
          <div class="authorBook__bookInfo">
            <h2 class="authorBook__bookName">{{ card.bookName }}</h2>
            <p class="authorBook__bookPrice">{{ card.bookPrice }}</p>
            <p class="authorBook__bookText">{{ card.bookInfo }}</p>
            <ul class="authorBook__list">
              <li class="authorBook__listItem">{{ card.bookDesc }}</li>
            </ul>
           <base-btn btnTitle="Order Now"></base-btn>
          </div>
        </div>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
import {reactive} from "vue";
import cardImg from '../assets/headerBook.png'
import authorBook from '../assets/authorBook.png'

export default {
  name: "BookList",
  components: {},

  setup() {
    const cards = reactive([
      {
        id: 'book1',
        bookImg: authorBook,
        bookName: 'Atomic One’s',
        bookPrice: '$ 13.84 USD',
        bookInfo: 'As the book contains theoretical content as well as solved questions.',
        bookDesc: 'Printed Book'
      },
      {
        id: 'book1',
        bookImg: cardImg,
        bookName: 'The Dark Light',
        bookPrice: '$ 86.11 USD',
        bookInfo: 'As the book contains theoretical content as well as solved questions.',
        bookDesc: 'Printed Book'
      }
    ])

    return {
      cards
    }
  }

}
</script>

<style scoped lang="scss">
.authorBook {
  padding: 130px 0 90px;

  &__list {
    padding-left: 20px;
  }

  &__listItem {
    font-family: 'Cardo';
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #1B3764;

    &::marker {
      color: #FFCA42;
      font-size: 30px;
    }
}

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

  &__cardImg {
    height: 382px;
  }

  &__card {
    display: flex;
    max-width: 630px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  &__bookName {
    font-family: 'Cardo';
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 0.32px;
    color: #1B3764;
    margin-bottom: 0;
  }

  &__bookPrice {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 33px;
    color: #FFCA42;
    margin: 7px 0 16px;
  }

  &__bookInfo {
    padding: 38px 30px 26px;
  }

  &__bookText {
  font-family: 'Inter';
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;
  color: #969AA0;
}
}
</style>