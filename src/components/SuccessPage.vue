<template>
  <div class="successPage">
    <h1 class="successPage__title">Success order</h1>
    <div class="book">
      <span class="page turn"></span>
      <span class="page turn"></span>
      <span class="page turn"></span>
      <span class="page turn"></span>
      <span class="page turn"></span>
      <span class="page turn"></span>
      <span class="cover"></span>
      <span class="page">Thank you for your order</span>
      <span class="cover turn"></span>
    </div>
  </div>

</template>

<script>

export default {
  name: "SuccessPage",
}
</script>

<style scoped lang="scss">
.successPage {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;


  &__title {
    font-family: 'Cardo';
    font-weight: 600;
    font-size: 50px;
    line-height: 50px;
    text-align: center;
    color: #1B3764;
  }
}

.book {
  margin: auto;
  width: 23.5rem;
  height: 17.5rem;
  perspective: 90rem;
}
.cover {
  background-color: darkorange;
  transform: rotateY(0deg);
  width: 24.25rem;
  height: 26.5rem;
}
.page {
  top: 0.25rem;
  left: 0.25rem;
  background-color: #e9e6c4;
  transform: rotateY(0deg);
  width: 23rem;
  height: 26rem;
  text-align: right;
  font-size: 25px;
  color: #ff678b;
  font-family: monospace;
}
.page::before, .page::after {
  display: block;
  border-top: 1px dashed rgba(0, 0, 0, 0.3);
  content: "";
  padding-bottom: 1rem;
}
.cover, .page {
  position: absolute;
  padding: 1rem;
  transform-origin: 0 100%;
  border-radius: 5px 0 0 5px;
  box-shadow: inset 3px 0px 20px rgba(0, 0, 0, 0.2),
  0px 0px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
.cover.turn {
  animation: bookCover 4s forwards;
}
.page.turn {
  animation: bookOpen 4s forwards;
}
.page:nth-of-type(1) {
  animation-delay: 0.05s;
}
.page:nth-of-type(2) {
  animation-delay: 0.33s
}
.page:nth-of-type(3) {
  animation-delay: 0.66s;
}
.page:nth-of-type(4) {
  animation: bookOpen150deg 3s forwards;
  animation-delay: 0.99s;
}
.page:nth-of-type(5) {
  animation: bookOpen30deg 3s forwards;
  animation-delay: 1.2s;
}
.page:nth-of-type(6) {
  animation: bookOpen55deg 3s forwards;
  animation-delay: 1.25s;
}
@keyframes bookOpen {
  30% { z-index: 999 }
  100% {  transform: rotateY(180deg);
    z-index: 999;}
}
@keyframes bookCover {
  30% { z-index: 999 }
  100% {  transform: rotateY(-180deg);
    z-index: 1;}
}
@keyframes bookOpen150deg {
  30% { z-index: 999 }
  100% {  transform: rotateY(
          -150deg);
    z-index: 999;}
}
@keyframes bookOpen65deg {
  30% { z-index: 999 }
  100% {  transform: rotateY(-65deg);
    z-index: 999;}
}
@keyframes bookOpen50deg {
  50% { z-index: 999 }
  100% {  transform: rotateY(-50deg);
    z-index: 999;}
}

</style>