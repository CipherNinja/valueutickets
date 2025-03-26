<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import FacilitiesRoomVue from '../components/Hotel/FacilitiesRoom.vue'
import HotelFome from '../components/Hotel/HotelFome.vue'
import HotelAboutVue from '../components/Hotel/HotelAbout.vue'
import ourRoomsVue from '../components/Hotel/ourRooms.vue'
import ServiceRoomVue from '../components/Hotel/ServiceRoom.vue'
import testimonialVue from '../components/Hotel/testimonial.vue'
import { useHead } from '@vueuse/head';

useHead({
  title: 'Hotel Bookings with ValueUTickets - Luxury Stays & Resorts in the USA',
  meta: [
    { name: 'description', content: 'Book luxury hotels, resorts, villas, and rooms with ValueUTickets. Enjoy connected hotel and flight bookings, cab services, and more for seamless stays across the USA.' },
    { name: 'keywords', content: 'ValueUTickets hotel bookings, luxury stays USA, book resorts villas, connected hotel flight bookings, cab services travel' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        'name': 'ValueUTickets',
        'description': 'ValueUTickets specializes in hotel bookings, offering luxury stays, resorts, villas, and connected hotel and flight bookings across the USA.',
        'url': 'https://valueutickets.com',
        'telephone': '+18339316548',
        'email': 'support@valueutickets.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '30 N Gould St #36918',
          'addressLocality': 'Sheridan',
          'addressRegion': 'WY',
          'postalCode': '82801',
          'addressCountry': 'US',
        },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Hotel',
        'name': 'Luxury Stays with ValueUTickets',
        'description': 'Book luxury hotels, resorts, and villas with ValueUTickets for an unforgettable stay in the USA.',
        'starRating': { '@type': 'Rating', 'ratingValue': '5' },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Review',
        'itemReviewed': { '@type': 'TravelAgency', 'name': 'ValueUTickets' },
        'review': [
          {
            '@type': 'Review',
            'author': { '@type': 'Person', 'name': 'Emily Davis' },
            'datePublished': '2025-03-23',
            'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
            'reviewBody': 'ValueUTickets made my hotel booking seamless and stress-free!',
          },
          {
            '@type': 'Review',
            'author': { '@type': 'Person', 'name': 'Charles Daniels' },
            'datePublished': '2025-03-23',
            'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
            'reviewBody': 'The best luxury stay experience with ValueUTickets!',
          },
        ],
      }),
    },
  ],
});
</script>

<template>
  <main>
    <Header />
    <HotelFome />
    <HotelAboutVue/>
    <ourRoomsVue/>
    <ServiceRoomVue/>
    <testimonialVue/>
    <FacilitiesRoomVue />
    <Footer/>
  </main>
</template>

<style scoped>

main{  background: #F9F2F2;  }

</style>
