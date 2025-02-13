<script setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import LoginForBooking from '../components/MyBookingForm/LoginForBooking.vue';
</script>

<template>
    <main>
      <Header />
      <LoginForBooking />
      <Footer/>
    </main>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
}

main {
  background: #F9F2F2;
}
</style>
