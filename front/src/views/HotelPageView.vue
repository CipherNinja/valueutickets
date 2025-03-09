<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import FacilitiesRoomVue from '../components/Hotel/FacilitiesRoom.vue'
import HotelFome from '../components/Hotel/HotelFome.vue'
import HotelAboutVue from '../components/Hotel/HotelAbout.vue'
import ourRoomsVue from '../components/Hotel/ourRooms.vue'
import ServiceRoomVue from '../components/Hotel/ServiceRoom.vue'
import testimonialVue from '../components/Hotel/testimonial.vue'
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
