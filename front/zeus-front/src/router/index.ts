import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Site/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/Site/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Site/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/System/Dashboard.vue')
    }
  ]
})

export default router
