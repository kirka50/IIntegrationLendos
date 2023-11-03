import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '@/views/MainPage'
const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPageView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
