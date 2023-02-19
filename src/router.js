import { createRouter, createWebHistory } from 'vue-router'

//components

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
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
    ]
})

export default router;