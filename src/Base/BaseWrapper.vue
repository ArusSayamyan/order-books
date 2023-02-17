<template>
  <div class="baseWrapper" :class="{ isBlue: isBlue, isGray: isGray}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseWrapper",
  props: {
    isBlue: {
      type: Boolean,
      required: false
    },
    isGray: {
      type: Boolean,
      required: false
    }
  }

}
</script>

<style scoped>
.baseWrapper {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto
}

.isBlue {
  background-color: #1B3764;
}

.isGray {
  background-color: #F5F8FC;

}
</style>