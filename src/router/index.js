import { createRouter, createWebHistory } from 'vue-router'
import CategoryView from '../views/Meals/CategoryView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: CategoryView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
