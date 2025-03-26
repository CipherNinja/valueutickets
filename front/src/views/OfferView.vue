<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useHead } from '@vueuse/head';
import OfferPromo from '../components/Offer/OfferPromo.vue'

// Hardcoded offers data
const offers = [
  {
    title: '10% Cashback on Bank Cards',
    description: 'Get 10% cashback on travel bookings with select bank cards.',
    validity: '2025-06-10',
    type: 'bank',
    // url: '/booking',
  },
  {
    title: 'Bank Cashback Offer',
    description: 'Exclusive cashback on flights and hotels with bank cards.',
    validity: 'Limited Time',
    type: 'bank',
    // url: '/booking',
  },
  {
    title: 'Hotel Deal: 50% Off',
    description: 'Save 50% on luxury hotel bookings across the USA.',
    validity: '2025-07-05',
    type: 'hotel',
    // url: '/hotel-booking',
  },
  {
    title: 'Buy 1 Get 1 Free on Flights',
    description: 'Book one flight and get another free with promo code VUFLY.',
    validity: '2025-05-20',
    type: 'flight',
    // url: '/flights',
  },
  {
    title: 'Hotel Weekend Offer',
    description: 'Enjoy a weekend getaway with discounted hotel stays.',
    validity: '2025-07-10',
    type: 'hotel',
    // url: '/hotel-booking',
  },
  {
    title: 'Exclusive Bank Card Offer',
    description: 'Special discounts on travel bookings with bank cards.',
    validity: 'Limited Time',
    type: 'bank',
    // url: '/booking',
  },
  {
    title: 'Luxury Peaceful Hotels: 40% Off',
    description: 'Book luxury hotels at 40% off for a serene escape.',
    validity: '2025-09-01',
    type: 'hotel',
    // url: '/hotel-booking',
  },
  {
    title: 'Flat $100 Off on Flights',
    description: 'Save $100 on domestic and international flights.',
    validity: 'Limited Time',
    type: 'flight',
    // url: '/flights',
  },
  {
    title: 'Bank Card EMI Offer',
    description: 'Book now, pay later with EMI options on bank cards.',
    validity: '2025-06-01',
    type: 'bank',
    // url: '/booking',
  },
  {
    title: 'Flight Flash Sale',
    description: 'Hurry! Limited-time flash sale on flights across the USA.',
    validity: 'Limited Time',
    type: 'flight',
    // url: '/flights',
  },
  {
    title: 'Airport Cab Discount: 20% Off',
    description: 'Get 20% off on airport cab bookings for seamless travel.',
    validity: '2025-07-20',
    type: 'cab',
    // url: '/services',
  },
  {
    title: 'Flight Deals for Students',
    description: 'Special flight discounts for students traveling in the USA.',
    validity: 'Limited Time',
    type: 'flight',
    // url: '/flights',
  },
];

// Filter offers by type
const flightOffers = offers.filter(offer => offer.type === 'flight');
const hotelOffers = offers.filter(offer => offer.type === 'hotel');
const cabOffers = offers.filter(offer => offer.type === 'cab');
const bankOffers = offers.filter(offer => offer.type === 'bank');

// SEO with useHead, including structured data for each offer
useHead({
  title: 'ValueUTickets Offers - Save on Flights, Hotels, and Cabs in the USA',
  meta: [
    { name: 'description', content: 'Discover exclusive travel offers with ValueUTickets. Save on connected hotel and flight bookings, luxury hotel stays, cab services, and more across the USA.' },
    { name: 'keywords', content: 'ValueUTickets travel offers, flight discounts USA, hotel deals, cab discounts, connected hotel flight bookings, bank card travel offers' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        'name': 'ValueUTickets',
        'description': 'ValueUTickets offers exclusive discounts on connected hotel and flight bookings, luxury stays, and cab services across the USA.',
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
    // Structured data for each offer
    ...offers.map(offer => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Offer',
        'name': offer.title,
        'description': offer.description,
        'url': `https://valueutickets.com${offer.url}`,
        'validThrough': offer.validity === 'Limited Time' ? '2025-12-31' : offer.validity,
        'offeredBy': { '@type': 'TravelAgency', 'name': 'ValueUTickets' },
      }),
    })),
    // Highlight the main flight offer
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Offer',
        'name': 'Upto $429.40 Off on Flights',
        'description': 'Save up to $429.40 on domestic and international flights with ValueUTickets using promo code VUFLY.',
        'url': 'https://valueutickets.com/offers',
        'price': '429.40',
        'priceCurrency': 'USD',
        'validThrough': '2025-12-31',
        'offeredBy': { '@type': 'TravelAgency', 'name': 'ValueUTickets' },
      }),
    },
  ],
});
</script>

<template>
  <main>
    <Header />
    <OfferPromo/>
    
    <Footer/>
  </main>
</template>

<style scoped>

main{  background: #F9F2F2;  }

</style>
