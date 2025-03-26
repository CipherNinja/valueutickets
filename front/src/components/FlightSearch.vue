<script setup>
import axios from 'axios';
import box from './searchbox.vue';
import { useHead } from '@vueuse/head';
</script>

<template>
  <div class="container">
    <div class="background-image">
      <div class="content-wrapper">
        <box />
        <div v-if="searchResults.length > 0" class="results">
          <h2>Search Results:</h2>
          <ul>
            <li v-for="(result, index) in searchResults" :key="index">
              {{ result.flight_name }} - {{ result.price }} USD -
              Departure: {{ new Date(result.departure).toLocaleString() }} -
              Arrival: {{ new Date(result.arrival).toLocaleString() }}
              - Duration: {{ result.duration }} mins - Stops: {{ result.stop_count }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Flight Search - ValueUTickets',
      description: 'Book cheap one-way, round-trip, and multicity flights in America with fast 10-minute service at ValueUTickets.',
    }),
  }],
});

export default {
  name: "FlightSearch",
  data() {
    return {
      searchFrom: "",
      searchTo: "",
      travelType: "oneWay",
      date: "",
      returnDate: "",
      personCount: "1 Economy",
      locations: [],
      filteredFrom: [],
      filteredTo: [],
      cities: [{ search: "" }],
      searchResults: [] // To store the search results
    };
  },
  methods: {
    filterLocations(type) {
      if (type === "from") {
        this.filteredFrom = this.locations.filter((location) =>
          location.toLowerCase().includes(this.searchFrom.toLowerCase())
        );
      } else if (type === "to") {
        this.filteredTo = this.locations.filter((location) =>
          location.toLowerCase().includes(this.searchTo.toLowerCase())
        );
      } else if (type.startsWith("city")) {
        const cityIndex = parseInt(type.replace("city", "")) - 2;
        if (this.cities[cityIndex]) {
          this.cities[cityIndex].filtered = this.locations.filter((location) =>
            location.toLowerCase().includes(this.cities[cityIndex].search.toLowerCase())
          );
        }
      }
    },
    selectLocation(type, location) {
      if (type === "from") {
        this.searchFrom = location;
        this.filteredFrom = [];
      } else if (type === "to") {
        this.searchTo = location;
        this.filteredTo = [];
      }
    },
    selectCity(index, location) {
      this.cities[index].search = location;
      this.cities[index].filtered = [];
    },
    addCity() {
      this.cities.push({ search: "" });
    },
    removeCity(index) {
      if (this.cities.length > 1) {
        this.cities.splice(index, 1);
      }
    },
    getFilteredCities(index) {
      return this.cities[index]?.filtered || [];
    },
    async fetchLocations() {
      try {
        const response = await fetch("https://crm.valueutickets.com/api/v1/flight/search/onewaytrip/");
        this.locations = await response.json();
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    },
    async handleSearch() {
      if (!this.searchFrom || !this.searchTo || !this.date || !this.personCount) {
        alert("Please fill in all the required details!");
        return;
      }

      if (this.travelType === "roundTrip" && !this.returnDate) {
        alert("Please select a return date!");
        return;
      }

      if (this.travelType === "multiCity") {
        const filledCities = this.cities.filter(city => city.search !== "").length;
        if (filledCities < 2) {
          alert("Please select at least 2 cities for your multi-city trip!");
          return;
        }
      }

      try {
        const response = await axios.post('https://crm.valueutickets.com/api/v1/flight/search/onewaytrip/', {
          source_iata: this.searchFrom,
          destination_iata: this.searchTo,
          date: this.date,
          adults: parseInt(this.personCount.split(" ")[0]), // assuming personCount format like "2 Economy"
          children: 0, // Adjust as per your requirements
          infants: 0, // Adjust as per your requirements
          ticket_class: this.personCount.split(" ")[1] // assuming personCount format like "2 Economy"
        });

        this.searchResults = response.data;
      } catch (error) {
        console.error("Error searching for flights:", error);
        alert("Failed to search for flights. Please try again.");
      }
    }
  },
  mounted() {
    this.fetchLocations();
  }
};
</script>

<style scoped>
/* Global Styling */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa00; /* Soft background to contrast the form */
}

/* Container and Background */
.container {
  max-width: 100vw;
  width: 100%; /* Ensures it spans the full width of the viewport */
  height: auto;
  display: flex;
  max-width: 2000px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

/* Image inside the container */
.container img {
  width: 100%; /* Ensures the image takes full width */
  height: auto; /* Maintain aspect ratio */
}


.background-image {
  width: 99.15vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  top: 0;
  z-index: 1;

  /* Background Settings */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  /* Ensure no default background (no white screen) */
  background-image: url('../assets/images/beach.jpg'); 
                    /* url('../assets/images/plane.jpg'), 
                    url('../assets/images/city.jpg'), 
                    url('../assets/images/dark.jpg'); */

  /* Animation */
  /* animation: backgroundAnimation 16s infinite; */
}

/* @keyframes backgroundAnimation {
  0%, 100% {
    background-image: url('../assets/images/mountainn.png'), 
                      url('../assets/images/plane.jpg'), 
                      url('../assets/images/city.jpg'), 
                      url('../assets/images/dark.jpg');
  }
  25% {
    background-image: url('../assets/images/plane.jpg'), 
                      url('../assets/images/mountainn.png'), 
                      url('../assets/images/city.jpg'), 
                      url('../assets/images/dark.jpg');
  }
  50% {
    background-image: url('../assets/images/city.jpg'), 
                      url('../assets/images/plane.jpg'), 
                      url('../assets/images/mountainn.png'), 
                      url('../assets/images/dark.jpg');
  }
  75% {
    background-image: url('../assets/images/dark.jpg'), 
                      url('../assets/images/plane.jpg'), 
                      url('../assets/images/city.jpg'), 
                      url('../assets/images/mountainn.png');
  }
} */


.content-wrapper {
  background-color: rgba(255, 255, 255, 0);
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 150px;
  margin-bottom: 10px;
  z-index: 100; /* Ensures it’s above the background image */
}

.advertisement-wrapper {
  width: 90%;
  height: 130px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.advertisement-img {
  max-width: 100%;
  max-height: 100%;
}


</style>

  