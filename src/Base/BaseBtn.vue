<template>
  <button class="orderBtn" :class="{withBg: withBg, centered:centered}">{{ btnTitle }}</button>
</template>

<script>
export default {
  name: "BaseBtn",
  props: {
    btnTitle: {
      type: String,
      required: true
    },
    withBg: {
      type: Boolean,
      required: false
    },
    centered: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
.orderBtn {
  background: none;
  border: 2px solid #FFCA42;
  width: 222px;
  padding: 18px 0;
  font-size: 19px;
  font-family: Cardo;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}

.withBg {
  background: #FFCA42;
}
.centered {
  margin: 0 auto;
  display: block;
}
</style>