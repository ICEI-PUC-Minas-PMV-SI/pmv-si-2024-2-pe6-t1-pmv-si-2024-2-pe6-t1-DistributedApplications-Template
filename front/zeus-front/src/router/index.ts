import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Site/Home.vue'
import Login from '../views/Site/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/Site/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Site/Login.vue')
    }
  ]
})

export default router
