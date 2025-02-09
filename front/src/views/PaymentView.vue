<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import PremiumSupport from '../components/PremiumSupp.vue';
import BookingNumSMS from '../components/BookingNumSMS.vue';
import Review_Itinerary from '../components/Review_Itinerary.vue';
import WhosFlying from '../components/WhosFlying.vue';
import TravelProtection from '../components/TravelProtection.vue';
import lost_cancel from '../components/lost_baggage_and_extended_cancellation.vue';
import Bill_Pay from '../components/Billing_payment.vue';
import T_C from '../components/Terms_condition.vue';

// Refs for child component data
const itineraryDetails = ref({});
const passengerDetails = ref([]);
const travelProtection = ref(false);
const lostBaggageProtection = ref(false);
const cancellationProtection = ref(false);
const premiumSupport = ref(false);
const billingDetails = ref({});
const termsAccepted = ref(false);

// Method to collect data from components
const collectData = () => {
  return {
    phone_number: "+1234567890", // Placeholder, replace with actual value
    email: "example@email.com", // Placeholder, replace with actual value
    date: new Date().toISOString(),
    flight_name: itineraryDetails.value.flight_name || '',
    departure_iata: itineraryDetails.value.departure_iata || '',
    arrival_iata: itineraryDetails.value.arrival_iata || '',
    departure_date: itineraryDetails.value.departure_date || '',
    arrival_date: itineraryDetails.value.arrival_date || '',
    passengers: passengerDetails.value.map(passenger => ({
      first_name: passenger.first_name,
      middle_name: passenger.middle_name,
      last_name: passenger.last_name,
      dob: passenger.dob,
      gender: passenger.gender,
    })),
    payment: {
      address_line1: billingDetails.value.addressLine1 || '',
      address_line2: billingDetails.value.addressLine2 || '',
      country: billingDetails.value.country || '',
      state: billingDetails.value.state || '',
      city: billingDetails.value.city || '',
      postal_code: billingDetails.value.postalCode || '',
      card_number: billingDetails.value.cardNumber || '',
      card_expiry_month: billingDetails.value.expiryMonth || '',
      card_expiry_year: billingDetails.value.expiryYear || '',
      cvv: billingDetails.value.cvv || '',
      cardholder_name: billingDetails.value.cardHolderName || '',
    },
    flight_cancellation_protection: cancellationProtection.value,
    sms_support: false, // Placeholder, replace with actual value if needed
    baggage_protection: lostBaggageProtection.value,
    premium_support: premiumSupport.value,
    total_refund_protection: travelProtection.value,
    payble_amount: 850.00 // Placeholder, replace with actual value
  };
};

// Method to send data to the backend API
const sendDataToBackend = async () => {
  const data = collectData();
  try {
    const response = await axios.post('https://crm.valueutickets.com/api/v2/flight/booking/', data);
    console.log('Data sent successfully:', response.data);
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Error request:', error.request);
    } else {
      // Something else triggered the error
      console.error('Error message:', error.message);
    }
    console.error('Error config:', error.config);
  }
};
</script>

<template>
  <main>
    <Header />
    <div class="header-bar">
      <span href="#" class="text">&#60;&nbsp;Back</span>
      <div class="task-group">
        <div class="task">
          <span class="number">&#9312;
            <span class="tick">&#9989;</span>
          </span>
          <span class="task-text">Ticket Selection</span>
        </div>
        <div class="dash"></div>
        <div class="task">
          <span class="number">&#9313;</span>
          <span class="task-text">Payment</span>
        </div>
        <div class="dash"></div>
        <div class="task">
          <span class="number">&#9314;</span>
          <span class="task-text">Confirmation</span>
        </div>
      </div>
    </div>
    <Review_Itinerary v-model="itineraryDetails"/>
    <WhosFlying v-model="passengerDetails"/>
    <TravelProtection v-model="travelProtection"/>
    <lost_cancel v-model="lostBaggageProtection" v-model:cancellationProtection="cancellationProtection"/>
    <PremiumSupport v-model="premiumSupport"/>
    <BookingNumSMS/>
    <Bill_Pay v-model="billingDetails"/>
    <T_C v-model="termsAccepted"/>
    <button @click="sendDataToBackend">Submit</button>
    <Footer />
  </main>
</template>

<style scoped>
main {
  background: #EAF3F2;
}
.header-bar {
  display: flex;
  flex-direction: row;
  height: 100px;
  border-radius: 20px;
  color: white;
  align-items: center;
  background-color: #4B4DC8;
  margin: 7px;
  margin-top: 14px;
  font-size: 20px;
  padding: 6px;
}
.header-bar .text {
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  margin-right: 5%;
}
.task-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.task {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: large;
  margin: 0px;
}
.number {
  position: relative;
  font-size: 40px;
  font-weight: 50;
}
.tick {
  position: absolute;
  top: 5px;
  left: -5px;
  font-size: 34px;
}
.task-text {
  font-size: 16px;
  font-weight: bold;
}
.dash {
  align-items: center;
  align-self: center;
  width: 37%;
  height: 2px;
  background-color: white;
  margin-top: 0px;
}
</style>
