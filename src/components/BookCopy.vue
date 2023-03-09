<template>
  <base-wrapper isBlue>
    <div class="bookCopy">
      <div class="bookCopy__infoWrapper">
        <div class="bookCopy__infoBlock">
          <h1 class="bookCopy__openText">Get Book Copy Today!</h1>
          <img src="../assets/yellowLine.svg" alt="" class="bookCopy__line">
        </div>
        <p class="bookCopy__desc">We believe that reading books are essential to a healthy culture. They’re where authors can connect with readers.</p>
        <div class="bookCopy__links">
          <base-btn btnTitle="Order Today" to="/books" link></base-btn>
        </div>
      </div>
      <div class="bookCopy__bookImgContainer">
        <img src="../assets/bookCopy.png" alt="" class="bookCopy__bookImg">
      </div>
    </div>
  </base-wrapper>
</template>

<script>
export default {
  name: "BookCopy"
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
.bookCopy {
  display: flex;
  justify-content: space-between;
  padding: 100px 90px;
  align-items: center;

  &__infoWrapper {
    max-width: 588px;
    width: 100%;
  }

  &__line {
    display: block;
  }

  &__openText {
    font-family: 'Cardo';
    font-weight: 400;
    font-size: 42px;
    line-height: 50px;
    color: #ffff;
    margin: 24px 0;
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
}
</style>