<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import LoginForBooking from '@/components/MyBookingForm/LoginForBooking.vue';
import confirmedStamp from '@/assets/images/Confirmed-Stamp.webp';
import cancelledStamp from '@/assets/images/Cancelled-Stamp.png';
import { useHead } from '@vueuse/head';
import { ref, watch } from 'vue'; // Import `watch`


useHead({
  title: 'My Booking - ValueUTickets Flight Status',
  meta: [
    { name: 'description', content: 'View your flight status and itinerary details with ValueUTickets for seamless travel across America.' },
    { name: 'keywords', content: 'ValueUTickets my booking, flight status USA, travel itinerary' },
  ],
});


const ticketStatus = ref('');

// Reactive variable for Background Image
const backgroundImage = ref('');
watch(ticketStatus, (newStatus) => {
  if (newStatus === 'Confirmed') {
    backgroundImage.value = `url(${confirmedStamp})`;
  } else if (newStatus === 'Cancelled') {
    backgroundImage.value = `url(${cancelledStamp})`;
  } else {
    backgroundImage.value = ''; // Default or no background
  }
});
</script>

<template>
  <div
    class="page-container"
    :style="{
      backgroundImage: backgroundImage,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }"
  >
    <Header />
    <main>
      <!-- Listen for the Ticket Status from LoginForBooking -->
      <LoginForBooking @update-ticket-status="ticketStatus = $event" />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f2f2; /* Fallback background color */
}

main {
  flex-grow: 1;
}
</style>
