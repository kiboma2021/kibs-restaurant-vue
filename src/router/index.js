import { createRouter, createWebHistory } from 'vue-router'
import FoodCategoryView from '../views/Meals/FoodCategoryView.vue'
import CategoryView from '../views/Meals/CategoryView.vue'
import AreaView from '../views/Meals/AreaView.vue'
import IngredientView from '../views/Meals/IngredientView.vue'
import CategoryDetailView from '../views/Meals/CategoryDetailsView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: FoodCategoryView
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoryView
  },
  {
    path: '/area',
    name: 'area',
    component: AreaView
  },
  {
    path: '/ingredients',
    name: 'ingredients',
    component: IngredientView
  },
  {
    path: '/:id',
    name: 'categoryDetails',
    component: CategoryDetailView,
    props: true
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
