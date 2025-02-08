<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { RouterLink, useRouter } from 'vue-router'
import { useFlightStore } from "@/stores/flightStore";
import { usePostDataStore } from "@/stores/postDataStore";
import PassClass from './passclass.vue'
import AirportAuto from './AirportAuto.vue'

// API Data
const postdata = ref(null)
const getApiData = ref(null)

// Trip Details
const source_iata = ref("")
const destination_iata = ref("")
const oneWay = ref({ date: '', from: '', to: '' })
const roundTrip = ref({ date: '', returnDate: '', from: '', to: '' })
const multiCity = ref([{ from: '', to: '', date: '' }])

const tripType = ref('oneWay')

// ✅ Initialize `passengerData` to prevent `null` errors
const passengerData = ref({
  adults: 1,
  children: 0,
  infants: 0,
  ticket_class: 'Economy'
})

// Handle Passenger Data from Child Component
function handlePassengerUpdate(data) {
  passengerData.value = data || { adults: 1, children: 0, infants: 0, ticket_class: 'Economy' }
  console.log("Received data from child:", data)
}

// Collect and Prepare Data for API Request
function collectPostData() {
  if (!passengerData.value) {
    console.error("Passenger data is missing!")
    return
  }

  let tripDetails = {}

  if (tripType.value === 'oneWay') {
    tripDetails = {
      source_iata: source_iata.value,
      destination_iata: destination_iata.value,
      date: oneWay.value.date,
      adults: passengerData.value.adults || 1,
      children: passengerData.value.children || 0,
      infants: passengerData.value.infants || 0,
      ticket_class: passengerData.value.ticket_class || 'Economy'
    }
  } else if (tripType.value === 'roundTrip') {
    tripDetails = {
      source_iata: roundTrip.value.from,
      destination_iata: roundTrip.value.to,
      date: roundTrip.value.date,
      return_date: roundTrip.value.returnDate,
      adults: passengerData.value.adults || 1,
      children: passengerData.value.children || 0,
      infants: passengerData.value.infants || 0,
      ticket_class: passengerData.value.ticket_class || 'Economy'
    }
  } else if (tripType.value === 'multiCity') {
    tripDetails = multiCity.value.map((segment) => ({
      source_iata: segment.from,
      destination_iata: segment.to,
      date: segment.date,
      adults: passengerData.value.adults || 1,
      children: passengerData.value.children || 0,
      infants: passengerData.value.infants || 0,
      ticket_class: passengerData.value.ticket_class || 'Economy'
    }))
  }

  postdata.value = tripDetails
  console.log('Post Data:', postdata.value)

  const postDataStore = usePostDataStore()
  const flightStore = useFlightStore()
  const router = useRouter()

  postDataStore.setPostData(postdata.value) // Store it in Pinia
  console.log("Stored postdata:", postDataStore.postdata)

  // API Call
  axios.post("https://crm.valueutickets.com/api/v1/flight/search/onewaytrip/", postdata.value)
    .then(response => {
      flightStore.setFlightData(response.data) // Store data in Pinia
      router.push({ name: "results" }) // Navigate to results page
    })
    .catch(error => console.error('Error:', error))
}


  const today = new Date().toISOString().split('T')[0]

  const activeTab = ref('flight')

  function formatTripType(type) {
    const tripTypes = {
      oneWay: "One Way",
      roundTrip: "Round Trip",
      multiCity: "Multi-City"
    };
    return tripTypes[type] || "Unknown";
  }

  function addSegment() {
    if (multiCity.value.length < 4) {
      multiCity.value.push({ from: '', to: '', date: '' })
    }
  }

  function removeSegment(index) {
    multiCity.value.splice(index, 1)
  }

  function autoFillFrom(index) {
    if (index > 0 && !multiCity.value[index].from) {
      multiCity.value[index].from = multiCity.value[index - 1].to
    }
  }

  function swap(segment) {
    if (segment.from && segment.to) {
      [segment.from, segment.to] = [segment.to, segment.from];
    }
  }
</script>

<template>
  <div class="container">
    <div class="tabs">
      <button @click="activeTab = 'flight'" :class="{ active: activeTab === 'flight' }">
        <i class="fas fa-plane"></i> Flight
      </button>
      <button @click="activeTab = 'tour'" :class="{ active: activeTab === 'tour' }">
        <i class="fas fa-globe"></i> Tour
      </button>
    </div>
    
    <div v-if="activeTab === 'flight'">
      <div class="trip-type">
        <label v-for="type in ['oneWay', 'roundTrip', 'multiCity']" :key="type">
          <input type="radio" v-model="tripType" :value="type" /> {{ formatTripType(type) }}
        </label>
      </div>

      <!-- One Way Trip -->
        <div v-if="tripType === 'oneWay'" class="input-group">
          <div class="input-box">
            <label>From</label>
            <span>
              <i class="fas fa-plane-departure"></i>
              <AirportAuto @update:iata="source_iata = $event" />
              <button class="swap-btn" @click="swap(oneWay)">🔄</button>
            </span>
          </div>
          <div class="input-box">
            <label>To</label>
            <span>
              <i class="fas fa-plane-arrival"></i>  
              <AirportAuto @update:iata="destination_iata = $event" />
            </span>
          </div>
          <div class="input-box">
            <label>Departure Date</label>
            <span>
              <i class="fas fa-calendar-alt"></i>
              <input type="date" v-model="oneWay.date" :min="today" />
            </span>
          </div>
          <div class="input-box">
            <label>Traveller's Class</label>
            <PassClass @update-passenger="handlePassengerUpdate" />
          </div>
        </div>
      <!-- Round Trip -->
        <div v-if="tripType === 'roundTrip'" class="input-group">
          <div class="input-box">
            <label>From</label>
            <span>
              <i class="fas fa-plane-departure"></i>
              <AirportAuto @update:iata="roundTrip.from = $event" />
              <button class="swap-btn" @click="swap(roundTrip)">🔄</button>
            </span>
          </div>
          <div class="input-box">
            <label>To</label>
            <span>
              <i class="fas fa-plane-arrival"></i>
              <AirportAuto @update:iata="roundTrip.to = $event" />
            </span>
          </div>
          <div class="input-box">
            <label>Departure Date</label>
            <span>
              <i class="fas fa-calendar-alt"></i>
              <input type="date" v-model="roundTrip.date" :min="today" />
            </span>
          </div>
          <div class="input-box">
            <label>Return Date</label>
            <span>
              <i class="fas fa-calendar-alt"></i>
              <input type="date" v-model="roundTrip.returnDate" :min="roundTrip.date || today" />
            </span>
          </div>
          <div class="input-box">
            <label>Traveller's Class</label>
            <PassClass @update-passenger="handlePassengerUpdate" />
          </div>
        </div>

      <!-- Multi-City -->
      <div v-if="tripType === 'multiCity'">
        <div v-for="(segment, index) in multiCity" :key="index" class="multi-city-segment">
          <AirportAuto v-model="segment.from" @input="autoFillFrom(index)" />
          <AirportAuto v-model="segment.to" />
          <input type="date" v-model="segment.date" :min="today" />
          <button v-if="index >= 1" @click="removeSegment(index)">➖</button>
          <button v-if="index === multiCity.length - 1 && index < 3" @click="addSegment">➕</button>
        </div>
      </div>

      <router-link to="/results"><button class="search-button" @click="collectPostData">Search Flight</button></router-link>
    </div>

    <div v-else>
      <p>Tour section (same content for now)</p>
    </div>
  </div>
</template>



<style scoped>
/* (Your existing styles remain unchanged) */
.container {
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 15px;
}
.tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  justify-content: center;
}
.tabs button {
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  border: none;
}
.tabs i {
  font-size: 18px;
}
.active {
  font-weight: bold;
  text-decoration: underline;
  color: #007bff;
}
.flight-section {
  width: 100%;
  display: flex;
  justify-content: center;
}
.trip-type {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
}
.trip-type label {
  cursor: pointer;
}
.input-group {
  display: flex;
  gap: 5px;
  justify-self: center;
  margin-bottom: 10px;
  justify-content: center;
}
.input-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.input-box label {
  margin-bottom: 5px;
  font-weight: bold;
  text-align: left;
  width: 100%;
  padding-left: 5px;
}
.input-box span {
  display: flex;
  align-items: center;
  width: 200px;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #000;
  background: #fff;
  font-size: 15px;
  justify-content: center;
}
.input-box input[type="text"],
.input-box input[type="date"] {
  border: none;
  outline: none;
  font-size: 18px;
  width: 100%;
}
.input-box i {
  margin-right: 5px;
}
.swap-btn {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  position: absolute;
  z-index: 100;
  right: -23px;
  top: 36px;
}
.search-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  border: none;
}
.multi-city-segment {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  width: 100%;
  justify-content: flex-start;
}
.multi-city-segment .input-group {
  justify-content: flex-start;
}
.multi-city-segment button {
  background-color: #007bff;
  color: white;
  border: none;
  line-height: 30px;
  font-size: 30px;
  margin-top: 35px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.trip-type label {
  display: flex;
  align-items: center;
  justify-content: center;
}
input[type="radio"] {
  margin-right: 5px;
}
</style>
