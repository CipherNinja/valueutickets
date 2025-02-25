<script setup>
import { computed, watch, ref, onMounted } from "vue";
import { useFlightStore } from "@/stores/flightStore";
import { usePostDataStore } from "@/stores/postDataStore";
import { useRouter } from "vue-router";

const flightStore = useFlightStore();
const postDataStore = usePostDataStore();
const router = useRouter();
const loading = ref(true); 

const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);
};

const flights = computed(() => flightStore.flightData || []);

// Placeholder for airline logos
const airlineLogos = {
  "jetBlue": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/JetBlue_Airways_Logo.svg/220px-JetBlue_Airways_Logo.svg.png",
  "American Airlines": "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/American_Airlines_logo_2013.svg/1920px-American_Airlines_logo_2013.svg.png",
  "Delta": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/220px-Delta_logo.svg.png",
  "United Airlines": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/United_Airlines_Logo.svg/464px-United_Airlines_Logo.svg.png",
  "Frontier Airlines": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Frontier_Airlines_logo.svg/220px-Frontier_Airlines_logo.svg.png",
  "Hawaiian Airlines": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Hawaiian_Airlines_logo_2017.svg/137px-Hawaiian_Airlines_logo_2017.svg.png",
  "Southwest Airlines": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Southwest_Airlines_logo_2014.svg/220px-Southwest_Airlines_logo_2014.svg.png",
  "Alaska Airlines": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Alaska_Airlines_logo.svg/220px-Alaska_Airlines_logo.svg.png",
};

// Default logo for undefined airlines
const defaultLogo = "https://via.placeholder.com/150?text=No+Logo";

onMounted(() => {
  console.log("Flight data:", flights.value); // Check the length and content of flights array
  if (!flights.value.length) {
    console.warn("No flight data found!");
  }
});

// New method to handle booking
const bookFlight = (flight) => {
  router.push({
    path: "/pay",
    query: {
      flight_name: flight.legs[0].flight_name,
      src: postDataStore.postdata?.source_iata,
      departure: flight.legs[0].departure,
      dest: postDataStore.postdata?.destination_iata,
      arrival: flight.legs[0].arrival,
      return_departure: flight.legs[1].departure,
      return_arrival: flight.legs[1].arrival,
      duration: flight.legs[0].duration,
      return_duration: flight.legs[1].duration,
      stop_count: flight.legs[0].stop_count,
      return_stop_count: flight.legs[1].stop_count,
      price: flight.total_price,
    },
  });
};
// Watch flights data and update loading state
watch(flights, (newFlights) => {
  if (newFlights.length > 0) {
    loading.value = false;
  }
});
</script>

<template>
  <div v-if="loading" class="loading-container">
    <div class="loading-card" v-for="n in 3" :key="n">
      <div class="loading-bar"></div>
      <div class="loading-content"></div>
    </div>
  </div>
  <div v-else class="results-container">
    <div v-for="(flight, index) in flights" :key="index" class="flight-card">
      <div class="color-bar"></div>
      <div class="airline-info" style="text-align: center;">
        <img :src="airlineLogos[flight.legs[0].flight_name] || defaultLogo" alt="Airline Logo" class="airline-logo" />
        <span style="font-size: 25px;">&nbsp;&nbsp;&nbsp;{{ flight.legs[0].flight_name }}</span>
      </div>
      <div class="flight-details">
        <div class="departure">
          <i class="fas fa-plane-departure"></i>
          <p><strong>Departure:</strong> From: {{ postDataStore.postdata?.source_iata || "N/A" }}</p>
          <p>{{ formatDateTime(flight.legs[0].departure) || "N/A" }}</p>
        </div>
        <div class="duration">
          <i class="fas fa-stopwatch"></i>&nbsp;
          <strong>Duration:</strong> {{ formatDuration(flight.legs[0].duration) || "N/A" }}
          <p><strong>Stops:</strong> {{ flight.legs[0].stop_count || 0 }}</p>
        </div>
        <div class="arrival">
          <i class="fas fa-plane-arrival"></i>
          <p><strong>Arrival:</strong> To: {{ postDataStore.postdata?.destination_iata || "N/A" }}</p>
          <p>{{ formatDateTime(flight.legs[0].arrival) || "N/A" }}</p>
        </div>
      </div>
      <div class="flight-details">
        <div class="departure">
          <i class="fas fa-plane-departure"></i>
          <p><strong>Return Departure:</strong> From: {{ postDataStore.postdata?.destination_iata || "N/A" }}</p>
          <p>{{ formatDateTime(flight.legs[1].departure) || "N/A" }}</p>
        </div>
        <div class="duration">
          <i class="fas fa-stopwatch"></i>&nbsp;
          <strong>Return Duration:</strong> {{ formatDuration(flight.legs[1].duration) || "N/A" }}
          <p><strong>Stops:</strong> {{ flight.legs[1].stop_count || 0 }}</p>
        </div>
        <div class="arrival">
          <i class="fas fa-plane-arrival"></i>
          <p><strong>Return Arrival:</strong> To: {{ postDataStore.postdata?.source_iata || "N/A" }}</p>
          <p>{{ formatDateTime(flight.legs[1].arrival) || "N/A" }}</p>
        </div>
      </div>
      <div class="pricing">
        <button class="office-number">+1 (833)931-6548</button>
        <div>
          <span><strong>Price per Person:</strong></span>
          <br /><span>Incl. Taxes and Fees</span>
        </div>
        <p><strong>${{ flight.total_price || "N/A" }}</strong></p>
        <button @click="bookFlight(flight)" class="book-now">Book Now</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.results-container {
  width: 100%;
  margin: auto;
}

.flight-card {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 0%;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.color-bar {
  height: 35px;
  width: 100%;
  border-radius: 8px 8px 0 0;
  background-color: #ff7b00;
}

.airline-info {
  font-size: 18px;
  font-weight: bold;
  padding: 15px;
  text-align: center;
}

.airline-logo {
  max-width: 100px;
  max-height: 50px;
}

.flight-details {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

/* Pricing Section */
.pricing {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}

.pricing p {
  margin: 0;
  color: #ff7b00;
  font-size: 27px;
}

.office-number {
  background-color: #ff7b00;
  color: white;
  font-weight: 700;
  padding: 7px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: auto;
  margin-top: 10px;
}

.book-now {
  background-image: linear-gradient(to right, #dbac13, #e77911);
  color: white;
  padding: 7px;
  font-weight: 700;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 100px;
  margin-top: 10px;
  transform: scale(1.2);
  margin-right: 20px;
}

/* Responsive Styles */
@media (max-width: 620px) {
  .results-container {
    display: flex;
    flex-direction: column;
  }

  .flight-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .flight-details {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .pricing {
    flex-direction: column;
    align-items: center;
  }

  .office-number,
  .book-now {
    width: 100%;
    max-width: 250px;
  }
}
/* Loading Skeleton */
.loading-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  justify-content: center;
  text-align: center;
}

.loading-card {
  background: #f3f3f3;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  animation: pulse 1.5s infinite ease-in-out;
}

.loading-bar {
  height: 20px;
  width: 80%;
  background: #ddd;
  border-radius: 5px;
}

.loading-content {
  margin-top: 10px;
  width: 90%;
  height: 60px;
  background: #ddd;
  border-radius: 5px;
}

@keyframes pulse {
  0% {
    background-color: #f3f3f3;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f3f3f3;
  }
}
</style>