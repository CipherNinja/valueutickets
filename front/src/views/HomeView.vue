<script setup>
import { useHead } from '@vueuse/head';
import Header from '../components/Header.vue';
import FlightSearch from '../components/FlightSearch.vue';
import Offers from '../components/offers.vue';
import DealsReview from '../components/DealsReview.vue';
import FAQ from '../components/Faq.vue';
import Footer from '../components/Footer.vue';
import PopularDestination from '../components/popular_destination.vue';


useHead({
  title: 'ValueUTickets - Cheap One-Way & Round-Trip Flights in America',
  meta: [
        {
          name: 'description',
          content: "Book one-way, round-trip & multicity flight tickets in America with ValueUTickets! Track your flight booking status and access your flight booking ticket details in 10 minutes",
        },
        {
          name: 'keywords',
          content: 'cheap one way flights America ValueUTickets, affordable round trip flights USA, cancun to new york flights today, new york to los angeles flight, los angeles to mexico city flights today, on call flights Los Angeles Mexico City',
        },
  ],
});
</script>

<template>
  <main>
    <Header />
    <FlightSearch />
    <offers/>
    <PopularDestination />
    <DealsReview />
    <FAQ />
    <Footer/>
  </main>
</template>

<style scoped>

main{  background: #F9F2F2;  }

</style>
