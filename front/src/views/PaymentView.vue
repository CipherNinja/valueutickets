<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import PremiumSupport from '../components/PremiumSupp.vue'
import BookingNumSMS from '../components/BookingNumSMS.vue'
import Review_Itinerary from '../components/Review_Itinerary.vue'
import WhosFlying from '../components/WhosFlying.vue'
import TravelProtection from '../components/TravelProtection.vue'
import lost_cancel from '../components/lost_baggage_and_extended_cancellation.vue'
import Bill_Pay from '../components/Billing_payment.vue'
import T_C from '../components/Terms_condition.vue'
</script>

<template>
  <main>
    <Header />
    <Review_Itinerary/>
    <WhosFlying/>
    <TravelProtection/>
    <lost_cancel/>
    <PremiumSupport/>
    <BookingNumSMS/>
    <Bill_Pay/>
    <T_C/>
    <Footer/>
</main>
</template>

<style scoped>

main{  background: #EAF3F2;  }

</style>
