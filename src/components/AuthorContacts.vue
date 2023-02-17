<template>
  <div class="authorContacts">
    <img src="../assets/qrCode.png" alt="" class="authorContacts__qrCode">
    <div class="authorContacts__contacts">
      <p class="authorContacts__name">John Abraham , Ph.d</p>
      <p class="authorContacts__mail">Mail: johnabraham@gmail.com</p>
      <p class="authorContacts__phone">Phone: (+2) 123 545 9000</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorContacts"
}
</script>

<style scoped lang="scss">
.authorContacts {
  margin-top: 70px;
  max-width: 450px;
  width: 100%;
  background: #1B3764;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  &__qrCode {
    max-width: 130px;
    width: 100%;
  }

  &__name {
    font-family: 'Cardo';
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #FFCA42;
    margin: 0 0 10px;
  }

  &__mail, &__phone {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.19px;
    color: #B4C7E7;
    margin: 0 0 10px;
  }
}

</style>