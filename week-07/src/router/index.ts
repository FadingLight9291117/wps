import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name:'home',
    component: HomeView,
    redirect: '/posts',
    children: [
      {
        path:'/posts',
        name: 'posts',
        component: () => import(/* webpackChunkName: "posts" */ '../views/Posts/PostsView.vue'),
      },
      {
        path:'/news',
        name: 'news',
        component: () => import(/* webpackChunkName: "news" */ '../views/News/NewsView.vue'),
      }
    ]
  },

  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '@/views/Details/DetailView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: HomeView,
    redirect:'/posts'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // 控制滚动条行为，让跳转到新路由之后页面滚动条起始位置
  scrollBehavior(to,from,savePosition){
    return {top:0};
}
})

export default router
