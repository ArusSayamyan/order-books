<template>
  <router-link href="" to="router" class="pageLink" v-if="link" :class="{withBg: withBg, centered:centered}">{{ btnTitle }}</router-link>
  <button class="orderBtn" v-else :class="{withBg: withBg, centered:centered}">{{ btnTitle }}</button>
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
    },
    link: {
      type: Boolean,
      required: false
    },
    router: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
.orderBtn,
.pageLink{
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

.pageLink {
  display: block;
  text-align: center;
  text-decoration: none;
  color: #000;
}

.withBg {
  background: #FFCA42;
}
.centered {
  margin: 0 auto;
  display: block;
}
</style>