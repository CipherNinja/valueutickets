import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Resultoneway from '../views/SearchResultViewOneway.vue'
import Resultroundtrip from '../views/SearchResultViewRoundtrip.vue'
import PayView from '../views/PaymentView.vue'

import Booking from '../views/Booking.vue'
import LoginForBooking from '../views/BookingLoginView.vue'
import HotelView from '../views/HotelView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import TermsViewPage from '../views/TermsViewPage.vue'

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
    },
    {
      path: '/result-roundtrip',
      name: 'searchresultroundtrip',
      component: Resultroundtrip,
    },
    {
      path: '/pay',
      name: 'payment',
      component: PayView,
    },
    {
      path: '/login-for-booking',
      name: 'LoginForBooking',
      component: LoginForBooking,
    },
    {
      path: '/hotel',
      name: 'HotelView',
      component: HotelView,
    },
    {
      path: '/contact-us',
      name: 'ContactUsView',
      component: ContactUsView,
    },
    {
      path: '/terms-and-conditions',
      name: 'TermsViewPage',
      component: TermsViewPage,
    }
  ],
})

export default router
