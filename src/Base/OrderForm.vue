<template>
  <teleport to="body">
  <div class="orderForm" v-if="isShownForm">
    <form action="" class="orderForm__form" @submit.prevent="setOrder">
      <img src="../assets/close.svg" alt="" class="orderForm__close" @click="closeOrderForm">
      <div class="orderForm__inputWrapper">
        <label for="name" class="orderForm__label">Name</label>
        <input type="text" class="orderForm__userInput" name="name" id="name" v-model.trim="userName">
      </div>
      <div class="orderForm__inputWrapper">
        <label for="lastName" class="orderForm__label">Lastname</label>
        <input type="text" class="orderForm__userInput" name="lastName" id="lastName" v-model.trim="lastName">
      </div>
      <div class="orderForm__inputWrapper">
        <label for="phone" class="orderForm__label">Phone number</label>
        <input type="tel" class="orderForm__userInput" name="phone" id="phone" v-model.trim="phoneNumber">
      </div>
      <base-btn btn-title="Order" withBg centered></base-btn>
    </form>
  </div>
  </teleport>
</template>

<script>
import {useStore} from 'vuex'
import {ref,computed} from "vue";
export default {
  name: "OrderForm",
  setup() {
    const store = useStore()
    const userName = ref('')
    const lastName = ref('')
    const phoneNumber = ref(null)
    const closeOrderForm = function () {
      store.commit('makeShown', false)
    }
    const isShownForm = computed(function () {
      return store.getters.isShown
    })
    const setOrder = function() {
      console.log(userName.value)
      console.log(lastName.value)
      console.log(phoneNumber.value)
      store.commit('makeShown', false)
    }

    return {
      store,
      closeOrderForm,
      setOrder,
      userName,
      lastName,
      phoneNumber,
      isShownForm
    }
  }
}
</script>

<style scoped lang="scss">
.orderForm {
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0 0 0 / 77%);

  &__form {
    max-width: 450px;
    width: 100%;
    padding: 29px;
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
    background: #FFFFFF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__inputWrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
  }

  &__label {
    margin-bottom: 14px;
  }

  &__userInput {
    padding: 10px 5px;
  }

  &__close {
    position: absolute;
    right: 27px;
    top: 15px;
    width: 25px;
    cursor: pointer;
  }
}
</style>