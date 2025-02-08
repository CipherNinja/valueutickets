<script setup>
import axios from 'axios';
import box from './searchbox.vue';
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
