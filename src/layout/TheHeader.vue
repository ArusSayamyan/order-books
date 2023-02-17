<template>
<base-wrapper>
  <header class="header">
    <div class="header__infoWrapper">
      <div class="header__infoBlock">
        <img src="../assets/yellowLine.svg" alt="" class="header__line">
        <span class="header__openText">Welcome to Pages!!!</span>
      </div>
      <h2 class="header__title">Your Books From The Best Writer.</h2>
      <p class="header__desc">We believe that reading books are essential to a healthy culture. They’re where authors can connect with readers.</p>
      <div class="header__links">
        <base-btn btnTitle="Order Today"></base-btn>
        <a href="#" class="header__readBook">Read Free Demo</a>
      </div>
      <ul class="header__info">
        <li class="header__infoItem">Pages
          <p class="header__infoDesc">250pages</p>
        </li>
        <li class="header__infoItem">Length <p class="header__infoDesc">10 Hours</p></li>
        <li class="header__infoItem">Rating <p class="header__infoDesc">4.5/5 (305 ratings)</p></li>
      </ul>
    </div>
    <div class="header__bookImgContainer">
      <img src="../assets/headerBook.png" alt="" class="header__bookImg">
    </div>
  </header>
</base-wrapper>
</template>

<script>
export default {
  name: "TheHeader",
  components: {}

}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
.header {
  display: flex;
  justify-content: space-between;
  padding: 100px 90px;
  align-items: center;

  &__infoWrapper {
    max-width: 588px;
    width: 100%;
  }

  &__infoBlock {
    display: flex;
    align-items: center;
  }

  &__line {
    margin-right: 10px;
  }

  &__openText {
    font-family: 'Cardo';
    font-size: 21px;
    line-height: 36px;
    letter-spacing: 1.2px;
    color: #FFFFFF;
  }

  &__title {
    font-family: 'Cardo';
    font-size: 64px;
    line-height: 78px;
    letter-spacing: 1.3px;
    color: #FFFFFF;
    margin: 10px 0;
  }

  &__desc {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: #B4C7E7;
  }

  &__links {
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  &__readBook {
    margin-left: 50px;
    font-family: 'Cardo';
    font-size: 19px;
    line-height: 30px;
    letter-spacing: 0.38px;
    color: #FFFFFF;
    text-decoration: none;
    border-bottom: 1px solid #ffffff;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 516px;
    width: 100%;
    margin-top: 40px;
    list-style: none;
    padding-left: 25px;
  }

  &__infoItem {
    font-family: 'Cardo';
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.48px;
    color: #FFFFFF;
    position: relative;

    &::before {
      position: absolute;
      left: -25px;
      top: 5px;
      content: '';
      width: 16px;
      height: 16px;
      background: #FFCA42;
      border-radius: 50%;
    }
  }

  &__infoDesc {
    margin: 7px 0;
    font-family: 'Inter';
    font-size: 17px;
    line-height: 27px;
    color: #B4C7E7;
  }
}
</style>