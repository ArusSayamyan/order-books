<template>
<div class="sectionTitle">
  <h1 class="sectionTitle__title">{{ mainTitle }}</h1>
  <img src="../assets/yellowLine.svg" alt="" class="sectionTitle__line">
</div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    mainTitle: {
      type: String,
      required: false
    }
  },
  setup() {

  }
}
</script>

<style scoped lang="scss">
.sectionTitle {
  margin-bottom: 60px;

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
}
</style>