<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
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

const itineraryDetails = ref({});
const passengerDetails = ref([]);
const travelProtection = ref(false);
const lostBaggageProtection = ref(false);
const cancellationProtection = ref(false);
const premiumSupport = ref(false);
const smsSupport = ref(false);
const billingDetails = ref({});
const termsAccepted = ref(false);

const handleContactUpdate = (data) => {
  itineraryDetails.value = { ...itineraryDetails.value, ...data };
};

const updatePersonalDetails = (data) => {
  passengerDetails.value = data;
};

const updateProtection = (value) => {
  travelProtection.value = value;
};

const updateBaggageProtection = (value) => {
  lostBaggageProtection.value = value;
};

const updateCancellationProtection = (value) => {
  cancellationProtection.value = value;
};

const updateSupport = (value) => {
  premiumSupport.value = value;
};

const updateSmsSupport = (value) => {
  smsSupport.value = value;
};

const updatePaymentDetails = (data) => {
  billingDetails.value = data;
};

const route = useRoute();
const flightDetails = route.query;

const collectData = () => {
  return {
    phone_number: itineraryDetails.value.phone_number || 'NA',
    email: itineraryDetails.value.email || 'NA',
    date: new Date().toISOString(),
    flight_name: flightDetails.flight_name || 'NA',
    departure_iata: flightDetails.src || 'NA',
    arrival_iata: flightDetails.dest || 'NA',
    departure_date: flightDetails.departure || 'NA',
    arrival_date: flightDetails.arrival || 'NA',
    passengers: passengerDetails.value.length > 0 ? passengerDetails.value : [{
      first_name: 'NA', middle_name: 'NA', last_name: 'NA', dob: 'NA', gender: 'NA'
    }],
    payment: {
      address_line1: billingDetails.value.address_line1 || 'NA',
      address_line2: billingDetails.value.address_line2 || 'NA',
      country: billingDetails.value.country || 'NA',
      state: billingDetails.value.state || 'NA',
      city: billingDetails.value.city || 'NA',
      postal_code: billingDetails.value.postal_code || 'NA',
      card_number: billingDetails.value.card_number || 'NA',
      card_expiry_month: billingDetails.value.card_expiry_month || 'NA',
      card_expiry_year: billingDetails.value.card_expiry_year || 'NA',
      cvv: billingDetails.value.cvv || 'NA',
      cardholder_name: billingDetails.value.cardholder_name || 'NA',
    },
    flight_cancellation_protection: cancellationProtection.value,
    sms_support: smsSupport.value,
    baggage_protection: lostBaggageProtection.value,
    premium_support: premiumSupport.value,
    total_refund_protection: travelProtection.value,
    payble_amount: flightDetails.price || 0.0,
  };
};

const sendDataToBackend = async () => {
  const data = collectData();
  console.log("Collected Data:", JSON.stringify(data, null, 2));
  try {
    const response = await axios.post('https://crm.valueutickets.com/api/v2/flight/booking/', data);
    console.log('Data sent successfully:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
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
          <span class="number">&#9312;<span class="tick">&#9989;</span></span>
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
    <Review_Itinerary v-model="itineraryDetails" @update-contact="handleContactUpdate" />
    <WhosFlying v-model="passengerDetails" @update-personal="updatePersonalDetails" />
    <TravelProtection v-model="travelProtection" @update-protection="updateProtection" />
    <lost_cancel 
      v-model="lostBaggageProtection" v-model:cancellationProtection="cancellationProtection" 
      @update-baggage="updateBaggageProtection"  @update-cancellation="updateCancellationProtection" 
    />
    <PremiumSupport v-model="premiumSupport" @update-support="updateSupport" />
    <BookingNumSMS @update-sms-support="updateSmsSupport" />
    <Bill_Pay v-model="billingDetails" @update-payment="updatePaymentDetails" />
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
