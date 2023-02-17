import { createRouter, createWebHistory } from 'vue-router'

//components

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
// import CoachesList from "@/pages/coaches/CoachesList";
// import CoachRegistration from "@/pages/coaches/CoachRegistration";
// import ContactCoach from "@/pages/requests/ContactCoach";
// import RequestsReceived from "@/pages/requests/RequestsReceived";
// import NotFound from "@/pages/NotFound";
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