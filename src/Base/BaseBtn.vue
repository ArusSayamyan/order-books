<template>
  <button class="orderBtn">{{ btnTitle }}</button>
</template>

<script>
export default {
  name: "BaseBtn",
  props: {
    btnTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.orderBtn {
  background: #FFCA42;
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
</style>