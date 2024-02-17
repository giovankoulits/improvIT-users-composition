import { createRouter, createWebHistory } from 'vue-router'
import UsersDashBoard from '../views/UsersDashBoard.vue'
import UserInfo from '../views/UserInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UsersDashBoard
    },
    {
      path: '/user/:id',
      name: 'user-info',
      component: UserInfo,
      props: true
    }
  ]
})

export default router
