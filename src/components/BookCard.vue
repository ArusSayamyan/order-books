<template>
    <div class="authorBook__card" v-for="item in items" :key="item.id">
      <div class="authorBook__cardImgContent">
        <img :src="item.thumbnailUrl" alt="" class="authorBook__cardImg">
      </div>
      <div class="authorBook__bookInfo">
        <h2 class="authorBook__bookName">{{ item.id }}</h2>
        <p class="authorBook__bookPrice">{{ item.bookPrice }}</p>
        <p class="authorBook__bookText">{{ item.bookInfo }}</p>
        <ul class="authorBook__list">
          <li class="authorBook__listItem">{{ item.title }}</li>
        </ul>
        <base-btn btnTitle="Order Now" @click="makeShownForm"></base-btn>
      </div>
    </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";


export default {
  name: "BookCard",
  emits: ['makeShownForm'],
  props: ['isActive'],
  setup() {
    const store = useStore()

    let items = computed(function () {
      return store.state.cards
    })

    if(window.location.href.includes('home')) {
      items = items.value.filter(val => val.bookName)
    }
    const makeShownForm = function () {
      store.commit('makeShown', true)
    }




    return {
      makeShownForm,
      items,
    }
  }
}
</script>

<style scoped lang="scss">
.authorBook {

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