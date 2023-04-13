import {createApp, defineAsyncComponent} from 'vue'
import {createStore} from 'vuex'
import router from './router'
import App from './App.vue'
import BaseWrapper from './Base/BaseWrapper.vue'
import BaseBtn from './Base/BaseBtn.vue'
import BookCard from "@/components/BookCard";
import authorBook from "@/assets/authorBook.png";
import cardImg from "@/assets/headerBook.png";
import SectionTitle from "@/components/SectionTitle";

const OrderForm = defineAsyncComponent(() => import('./Base/OrderForm.vue'))

const app = createApp(App)
const store = createStore({
    state() {
        return {
            isShown: false,
            orders: [],
            cards: [
                {
                    id: 'book1',
                    bookImg: authorBook,
                    bookName: 'Atomic One’s',
                    bookPrice: '$ 13.84 USD',
                    bookInfo: 'As the book contains theoretical content as well as solved questions.',
                    bookDesc: 'Printed Book'
                },
                {
                    id: 'book2',
                    bookImg: cardImg,
                    bookName: 'The Dark Light',
                    bookPrice: '$ 86.11 USD',
                    bookInfo: 'As the book contains theoretical content as well as solved questions.',
                    bookDesc: 'Printed Book'
                }
            ]
        }
    },
    mutations: {
        makeShown(state, payload) {
            state.isShown = payload
        },
        addNewOrder(state, payload) {
            state.orders = payload
        },
        addNewBookCard(state, payload) {
            state.cards.push(payload)
        }
    },
    actions: {

        // CREATE NEW ORDER
       async createOrder(context, payload) {
            const newOrder = {
                id: payload.id,
                uName: payload.uName,
                lName: payload.lName,
                phone: payload.phone
            }

            const response = await fetch(`https://order-books-131fc-default-rtdb.firebaseio.com/users.json`, {
                method: 'POST',
                body: JSON.stringify(newOrder)
            });
            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to send request.');
                throw error;
            }

             context.commit('addNewOrder', newOrder);
             await router.push('/success')

        },

        //GET CARD INFO FROM PLACEHOLDER JSON

       async getNewCard(context) {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
                method: 'GET',
            });
            const responseData = await response.json();

            for(let i = 0; i < responseData.length - (responseData.length - 12); i++) {
                context.commit('addNewBookCard', responseData[i]);
            }
        }

    },
    getters: {
        isShown(state) {
            return state.isShown
        },
        cards(state) {
            return state.cards
        }
    }
})
app.use(router)
app.use(store)
app.component('base-wrapper', BaseWrapper)
app.component('base-btn', BaseBtn)
app.component('order-form', OrderForm)
app.component('book-card', BookCard)
app.component('section-title', SectionTitle)
app.mount('#app')
