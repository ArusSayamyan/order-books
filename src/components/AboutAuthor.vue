<template>
  <base-wrapper isGray>
    <section class="aboutAuthor">
      <div class="aboutAuthor__imgWrapper">
        <img src="../assets/author.png" alt="" class="aboutAuthor__authorImg">
        <div class="aboutAuthor__yellowBlock"></div>
      </div>
      <div class="aboutAuthor__info">
        <h2 class="aboutAuthor__title">About the Author</h2>
        <img src="../assets/yellowLine.svg" alt="" class="aboutAuthor__mark">
        <p class="aboutAuthor__desc">We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.</p>
        <div class="aboutAuthor__booksInfo">
          <div class="aboutAuthor__publishedCount">
            <p class="aboutAuthor__count">02</p>
            <p class="aboutAuthor__countText">Books Published</p>
          </div>
          <div class="aboutAuthor__publishedCount aboutAuthor__publishedCount--withBorder">
            <p class="aboutAuthor__count">4.5</p>
            <p class="aboutAuthor__countText">User Reviews</p>
          </div>
          <div class="aboutAuthor__publishedCount">
            <p class="aboutAuthor__count">04</p>
            <p class="aboutAuthor__countText">Best Seller Awards</p>
          </div>
        </div>
        <author-contacts/>
      </div>
    </section>
  </base-wrapper>
</template>

<script>
import AuthorContacts from '../components/AuthorContacts'
export default {
  name: "AboutAuthor",
  components: {AuthorContacts}

}
</script>

<style scoped lang="scss">
.aboutAuthor {
  display: flex;
  justify-content: space-between;
  padding: 150px 40px 150px 70px;

  &__imgWrapper {
    position: relative;
    width: 100%;
  }

  &__yellowBlock {
    max-width: 500px;
    width: 100%;
    height: 590px;
    border: 10px solid #FFCA42;
  }

  &__authorImg {
    position: absolute;
    max-width: 525px;
    width: 100%;
    bottom: 45px;
    right: 245px;
  }

  &__info {
    max-width: 605px;
    width: 100%;
  }

  &__title {
    font-family: 'Cardo';
    font-weight: 400;
    font-size: 42px;
    line-height: 50px;
    color: #1B3764;
    margin: 0;
  }

  &__desc {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 19px;
    line-height: 34px;
    color: #969AA0;
  }

  &__booksInfo {
    display: flex;
    justify-content: space-between;
  }

  &__count {
    font-family: 'Cardo';
    font-weight: 400;
    font-size: 54px;
    line-height: 77px;
    color: #1B3764;
    margin: 0;
  }

  &__countText {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    color: #969AA0;
    margin: 0;
  }

  &__publishedCount {
    padding: 0 25px;

    &--withBorder {
      border-right: 1px solid #FFCA42;
      border-left: 1px solid #FFCA42;
    }
  }
}

</style>