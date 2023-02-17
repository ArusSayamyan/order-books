<template>
  <div class="baseWrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseWrapper"
}
</script>

<style scoped>
.baseWrapper {
  max-width: 1440px;
  width: 100%;
  background-color: #1B3764;
  margin: 0 auto;
}
</style>