import { createRouter, createWebHistory } from "vue-router";
import { routeBase } from "../utils/const";

const routes = [
    {
        path: '/',
        component: () => import("../views/home/index.vue")
    },
    {
        path: '/about',
        component: () => import("../views/about/index.vue")
    }
]

export const router = createRouter({
    history: createWebHistory(routeBase),
    routes,
})