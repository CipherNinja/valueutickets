<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import LoginForBooking from '@/components/MyBookingForm/LoginForBooking.vue';
</script>

<template>
  <div class="page-container">
    <Header />
    <main>
      <LoginForBooking />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
