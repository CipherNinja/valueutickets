import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Resultoneway from '../views/SearchResultViewOneway.vue'
import Resultroundtrip from '../views/SearchResultViewRoundtrip.vue'
import PayView from '../views/PaymentView.vue'

import Booking from '../views/Booking.vue'
import LoginForBooking from '../views/BookingLoginView.vue'


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
      path: '/result-oneway',
      name: 'searchresultoneway',
      component: Resultoneway,
      //props: route => ({ data: JSON.parse(route.query.data) })
    },
    {
      path: '/result-roundtrip',
      name: 'searchresultroundtrip',
      component: Resultroundtrip,
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
