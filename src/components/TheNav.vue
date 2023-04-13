<template>
  <base-wrapper isBlue>
    <nav class="nav">
      <div class="nav__wrapper">
        <div class="nav__logoWrapper">
          <router-link to="/home" class="nav__homeLink">
            <img src="../assets/logo.svg" alt="navLogo" class="nav__logo"></router-link>
          <router-link to="/home" class="nav__homeLink">
            <span class="nav__name">Pages</span></router-link>
        </div>
        <div class="nav__socialLinkContent">
          <a href="#" class="nav__socialLink">
            <img src="../assets/fb.svg" alt="facebook" class="nav__fbLink">
          </a>
          <a href="#" class="nav__socialLink">
            <img src="../assets/twitter.svg" alt="facebook" class="nav__fbLink">
          </a>
          <a href="#" class="nav__socialLink">
            <img src="../assets/linkdin.svg" alt="facebook" class="nav__fbLink">
          </a>
        </div>
      </div>
      <ul class="nav__linkList">
        <li>
          <router-link to="/home" class="nav__link">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav__link">About</router-link>
        </li>
        <li class="nav__link">Pages</li>
        <li class="nav__link">Contact Link</li>
        <li class="nav__addProduct"><img src="../assets/bug.svg" alt=""></li>
        <li>
          <base-btn btnTitle="Order Today" to="/books" link withBg></base-btn>
        </li>
      </ul>
    </nav>
  </base-wrapper>
</template>

<script>

export default {
  name: 'TheNav',


}
</script>

<style scoped lang="scss">
.nav {
  padding: 22px 70px;
  display: flex;
  justify-content: space-between;

  &__wrapper {
    display: flex;
    max-width: 544px;
    width: 100%;
    align-items: center;
  }

  &__logoWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 37px;
  }

  &__homeLink {
    text-decoration: none;
  }

  &__logo {
    margin-right: 10px;
  }

  &__name {
    color: #F5F8FC;
    font-size: 28px;
    font-weight: 600;
  }

  &__socialLinkContent {
    display: flex;
    column-gap: 10px;
  }

  &__socialLink {
    background-color: #fff;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__linkList {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0;
  }

  &__link {
    color: #F6F8FC;
    font-size: 17px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #FFCA42;
    }
  }

  &__addProduct {
    cursor: pointer;
  }

}
</style>
