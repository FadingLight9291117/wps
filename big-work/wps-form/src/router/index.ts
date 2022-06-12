import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import MainView from "../views/MainView.vue";
import TestVue from '../views/TestVue.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: MainView,
    },
    {
        path: "/test",
        name: "test",
        component: TestVue,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
