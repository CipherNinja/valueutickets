import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchResultView from '../views/SearchResultView.vue'
import PayView from '../views/PaymentView.vue'
import LoginForBooking from '../components/MyBookingForm/LoginForBooking.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
      path: '/booking',
      name: 'LoginForBooking',
      component: LoginForBooking,
    }
  ],
})

export default router
