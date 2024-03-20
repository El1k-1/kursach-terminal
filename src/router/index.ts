import { createRouter, createWebHistory } from 'vue-router'
import Terminal from '../pages/terminal/index.page.vue'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Home
    },
    {
      path: '/terminal',
      name: 'terminal',
      component: Terminal
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
