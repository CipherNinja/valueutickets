<script setup>
import Header from '../components/Header.vue'
import HotelAbout from '../components/Hotel/HotelAbout.vue'
import ourRoom from '../components/Hotel/ourRooms.vue'

import FacilitiesRoom from '../components/Hotel/FacilitiesRoom.vue'
import ServiceRoom from '../components/Hotel/ServiceRoom.vue'
import tesimonial from '../components/Hotel/tesimonial.vue'
import HotelFome from '../components/Hotel/HotelFome.vue'


import Footer from '../components/Footer.vue'

</script>

<template>
  <main>
    <Header />
<HotelFome/>
    <HotelAbout/>
    <ourRoom/>
    <FacilitiesRoom/>
    <ServiceRoom/>
    <tesimonial/>
    <Footer/>
    
  </main>
</template>

<style scoped>

main{  background: #F9F2F2;  }

</style>
