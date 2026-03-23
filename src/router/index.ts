import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import NotFound from "../pages/NotFound.vue";
import Krisoyda from "../pages/Krisoyda.vue";

const routes: RouteRecordRaw[] = [
    { path: "/krisoyda", component: Krisoyda },
    { path: "/404", component: NotFound },
    { path: "/:pathMatch(.*)*", redirect: "/404" }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});