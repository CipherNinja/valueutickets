<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { computed } from "vue";
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
import { usePassengerStore } from "@/stores/passengerStore";

const passengerStore = usePassengerStore();
const passengersmaintemp = computed(() => passengerStore.passengers);
const passengersmain = (passengersmaintemp.value.map(({ type, ...rest }) => rest));

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

const totalamount = flightDetails.price || 0.0;

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
    passengers: passengersmain,
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

const errors = ref({});
const responseMessage = ref("");

const validateForm = () => {
  errors.value = {};

  if (!/^\d{10}$/.test(itineraryDetails.value.phone_number)) {
    errors.value.phone_number = "Please enter a valid 10-digit phone number.";
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(itineraryDetails.value.email)) {
    errors.value.email = "Invalid email format.";
  }

  // Additional validation for required fields, dates, passengers, etc.
  const requiredFields = ["date", "flight_name", "departure_iata", "arrival_iata", "departure_date", "arrival_date"];
  requiredFields.forEach(field => {
    if (!itineraryDetails.value[field]) {
      errors.value[field] = "This field is required.";
    }
  });

  if (flightDetails.departure && flightDetails.arrival) {
    let departure = new Date(flightDetails.departure);
    let arrival = new Date(flightDetails.arrival);

    if (arrival <= departure) {
      errors.value.arrival_date = "Arrival date must be after departure date.";
    }
  }

  // Validate passengers details
  if (passengerDetails.value.length > 8) {
    errors.value.passengers = "A maximum of 8 passengers is allowed.";
  }

  let adults = 0;
  let infants = 0;
  const today = new Date();

  passengerDetails.value.forEach((passenger, index) => {

    if (!passenger.first_name || !passenger.last_name || !passenger.dob || !passenger.gender) {
      errors.value[`passenger_${index}`] = `Passenger ${index + 1} details are incomplete.`;
    }

    let dob = new Date(passenger.dob);
    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    if (age < 3) {
      infants++;
    } else {
      adults++;
    }
  });

  if (infants > 0 && adults === 0) {
    errors.value.passengers = "Infants cannot travel alone.";
  }

  if (infants > 3 && adults < 2) {
    errors.value.passengers = "If there are more than 3 infants, at least 2 adults must travel.";
  }


  // Validate required fields
  const requiredField = [
    { key: "cardholder_name", message: "Cardholder name is required." },
    { key: "address_line1", message: "Address Line 1 is required." },
    { key: "country", message: "Country is required." },
    { key: "state", message: "State is required." },
    { key: "city", message: "City is required." }
  ];

  requiredField.forEach(field => {
    if (!billingDetails.value[field.key]) {
      errors.value[field.key] = field.message;
    }
  });

  // Validate postal code
  if (!/^\d{4,10}$/.test(billingDetails.value.postal_code)) {
    errors.value.postal_code = "Invalid postal code";
  }

  // Validate card number
  if (!/^\d{16}$/.test(billingDetails.value.card_number)) {
    errors.value.card_number = "Card number must be exactly 16 digits.";
  }

  // Validate card expiry month
  if (!/^(0?[1-9]|1[0-2])$/.test(billingDetails.value.card_expiry_month)) {
    errors.value.card_expiry_month = "Enter a valid month.";
  }

  // Validate expiry year
  const currentYear = new Date().getFullYear();
  if (!/^\d{4}$/.test(billingDetails.value.card_expiry_year) || billingDetails.value.card_expiry_year < currentYear) {
    errors.value.card_expiry_year = "Enter a valid expiry year.";
  }

  // Validate CVV
  if (!/^\d{3}$/.test(billingDetails.value.cvv)) {
    errors.value.cvv = "CVV must be exactly 3 digits.";
  }

  // Validate payable amount
  if (billingDetails.value.payble_amount <= 0) {
    errors.value.payble_amount = "Payable amount cannot be 0.";
  }

  return Object.keys(errors.value).length === 0;
};

const sendDataToBackend = async () => {
  const data = collectData();
  console.log("Collected Data:", JSON.stringify(data, null, 2));
  if (validateForm()) {
    const data = collectData();
    console.log("Collected Data:", JSON.stringify(data, null, 2));
    try {
      const response = await axios.post('https://crm.valueutickets.com/api/v2/flight/booking/', data); 
      console.log('Data sent successfully:', response.data);
      responseMessage.value = response.data.message; 
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      responseMessage.value = "Failed to save data. Please try again."; 
    }
  } else {
    alert("Please fill all the details.");
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
    <p class="total-price">Total Price: {{ totalamount }}</p>
    <button class="book-button" @click="sendDataToBackend">Submit</button>
    <Footer />
  </main>
</template>

<style scoped>
main {
  background: #EAF3F2;
  justify-content: center;
  justify-items: center
;
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
.book-button{
  color: white;
  font-size: 20px;
  font-weight: 600;
  background-color: #4B4DC8;
  justify-self: center;
  align-self: center;
  text-align: center;
  margin: 5px;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
}
</style>
