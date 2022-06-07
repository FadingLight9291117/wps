import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import MainView from "../views/MainView.vue";
import MainViewInput from "../views/MainViewComponents/MainViewInput.vue"
import MainViewSingleSelect from '../views/MainViewComponents/MainViewSingleSelect.vue';


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
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
