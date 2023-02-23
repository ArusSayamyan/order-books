import { createRouter, createWebHistory } from 'vue-router'

//components

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import MainBooks from './pages/books/MainBooks'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: HomePage
        },
        {
            path: '/about',
            component: AboutPage
        },
        {
            path: '/books',
            component: MainBooks
        },
    ]
})

export default router;