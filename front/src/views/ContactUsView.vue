<script setup>
import Header from '../components/Header.vue'
import Contactus from '../components/ContactUS/contactUS.vue'
import Footer from '../components/Footer.vue'
import { useHead } from '@vueuse/head';

useHead({
  title: 'Reach ValueUTickets - Affordable Flight Assistance',
  meta: [
    { name: 'description', content: 'Connect with ValueUTickets for personalized flight booking help and exclusive travel deals across the USA.' },
    { name: 'keywords', content: 'ValueUTickets support, affordable flights USA, travel assistance' },
  ],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Reach ValueUTickets',
      'description': 'Contact ValueUTickets for expert assistance with affordable flights and travel plans.',
      'publisher': {
        '@type': 'TravelAgency',
        'name': 'ValueUTickets',
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
      },
    }),
  }],
});
</script>

<template>
  <main>
    <Header />
    <Contactus />
    <Footer/>
  </main>
</template>

<style scoped>

main{  background: #F9F2F2;  }

</style>
