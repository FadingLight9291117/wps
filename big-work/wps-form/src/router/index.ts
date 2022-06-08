import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import MainView from "../views/MainView.vue";
import MainViewInput from "../views/MainViewComponents/MainViewInput.vue"
import MainViewSingleSelect from '../views/MainViewComponents/MainViewSingleSelect.vue';
import TestVue from '../views/TestVue.vue'
import MainViewMultiSelect from "../views/MainViewComponents/MainViewMultiSelect.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: MainView,
    },
    {
        path: "/input",
        name: "input",
        component: MainViewInput,
    },
    {
        path: "/singleSelect",
        name: "singleSelect",
        component: MainViewSingleSelect,
    },
    {
        path: "/multiSelect",
        name: "multiSelect",
        component: MainViewMultiSelect
    },
    {
        path: "/test",
        name: "test",
        component: TestVue
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
