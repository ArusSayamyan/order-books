import { createApp } from 'vue'
import { createStore } from 'vuex'
import router from './router'
import App from './App.vue'
import BaseWrapper from './Base/BaseWrapper.vue'
import BaseBtn from './Base/BaseBtn.vue'
import OrderForm from './Base/OrderForm.vue'

const app = createApp(App)
const store  = createStore({
    state() {
        return {
            isShown: false
        }
    },
    mutations: {
        makeShown(state, payload) {
            state.isShown = payload
        }
    },
    getters: {
        isShown(state) {
            return state.isShown
        }
    }
})
app.use(router)
app.use(store)
app.component('base-wrapper', BaseWrapper)
app.component('base-btn', BaseBtn)
app.component('order-form', OrderForm)
app.mount('#app')
