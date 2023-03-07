import { createRouter, createWebHistory , createWebHashHistory} from 'vue-router'
import HomeView from '../views/home/home.vue'
const routes = [
    //路由从定向
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    title: 'HOME',
    component: HomeView,
    children : [
      {path : '/pas',component : () =>import('../views/home/pas/pas.vue')}
    ]
  },
  {
    path: '/login',
    name: 'login',
    title:'登录页',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login.vue')
  },
  // {
  //   path: '/404',
  //   name: '404',
  //   title:'404页',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/not/404.vue')
  // },
  // {
  //   path: '/404',
  //   name: '404',
  //   title:'404页',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/not/404.vue')
  // },
  {
    path: '/404',
    name: '404',
    title:'404页',
    component: () => import(/* webpackChunkName: "about" */ '../views/not/404.vue')
  }
]

const router = createRouter({
  //hash模式
  history: createWebHashHistory(),
  //history模式
  // history : createWebHistory()
  routes
})

export default router
