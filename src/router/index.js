import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import AddEssay from '../pages/AddEssay.vue'
import EssayDetail from '../pages/EssayDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add-essay',
      name: 'AddEssay',
      component: AddEssay
    },
    {
      path: '/essay/:id',
      name: 'EssayDetail',
      component: EssayDetail,
      props:true
    }
  ]
})
export default router