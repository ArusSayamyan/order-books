import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import BaseWrapper from './Base/BaseWrapper.vue'
import BaseBtn from './Base/BaseBtn.vue'

const app = createApp(App)
app.use(router)
app.component('base-wrapper', BaseWrapper)
app.component('base-btn', BaseBtn)
app.mount('#app')
