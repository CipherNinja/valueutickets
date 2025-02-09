import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchResultView from '../views/SearchResultView.vue'
import PayView from '../views/PaymentView.vue'



import Booking from '../views/Booking.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking,
    },
    {
      path: '/results',
      name: 'searchresult',
      component: SearchResultView,
      //props: route => ({ data: JSON.parse(route.query.data) })
    },
    {
      path: '/pay',
      name: 'payment',
      component: PayView,
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/test.vue'),
    },
  ],
})

export default router
