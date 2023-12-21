import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from '../views/DestinationView.vue'
import BarChart from '../views/BarChartView.vue'


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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/destination/:pays',
      name: 'destination',
      component: DestinationView
    },
    {
      path: '/bar-chart',
      name: 'chart',
      component: BarChart
    }
  ]
})

export default router
