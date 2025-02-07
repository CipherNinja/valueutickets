<script setup>
import box from './searchbox.vue'
</script>
<template>
  <div class="container">
    <!-- Background Section -->
    <div class="background-image">
      <div class="content-wrapper">
        <box />
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
      travelType: "oneWay", // Default set to one way
      date: "",
      returnDate: "",
      personCount: "1 Economy",
      locations: [], // All flight locations worldwide
      filteredFrom: [],
      filteredTo: [],
      cities: [{ search: "" }], // Array to store dynamic cities
    };
  },
  methods: {
    // Filter locations based on search input
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
    // Select location and set it in the respective field
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
    // Add another city to the multi city list
    addCity() {
      this.cities.push({ search: "" });
    },
    // Remove a city from the multi city list
    removeCity(index) {
      if (this.cities.length > 1) {
        this.cities.splice(index, 1);
      }
    },
    // Get the filtered cities for a specific city input field
    getFilteredCities(index) {
      return this.cities[index]?.filtered || [];
    },
    // Fetch flight locations when the component loads
    async fetchLocations() {
      try {
        // Fetching all flight destinations (for simplicity, use a mock API or static JSON)
        const response = await fetch(
          "https://api.example.com/all-flight-locations"
        );
        this.locations = await response.json();
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    },
    // Handle the Search Flight action
    handleSearch() {
      // Check if all the required fields are filled
      if (!this.searchFrom || !this.searchTo || !this.date || !this.personCount) {
        alert("Please fill in all the required details!");
        return;
      }

      // For round trip, check return date
      if (this.travelType === "roundTrip" && !this.returnDate) {
        alert("Please select a return date!");
        return;
      }

      // For multi city, ensure there are at least 2 cities filled
      if (this.travelType === "multiCity") {
        const filledCities = this.cities.filter(city => city.search !== "").length;
        if (filledCities < 2) {
          alert("Please select at least 2 cities for your multi-city trip!");
          return;
        }
      }

      // Proceed with the search (For now, just log the data)
      console.log("Searching for flights...");
      // You can call your search API here or trigger further actions
    }
  },
  mounted() {
    // Fetch locations when the component is mounted
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
  height: 65%;
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
  background-image: url('@/assets/images/mountainn.png'), 
                    url('@/assets/images/plane.jpg'), 
                    url('@/assets/images/city.jpg'), 
                    url('@/assets/images/dark.jpg');

  /* Animation */
  animation: backgroundAnimation 16s infinite;
}

@keyframes backgroundAnimation {
  0%, 100% {
    background-image: url('@/assets/images/mountainn.png'), 
                      url('@/assets/images/plane.jpg'), 
                      url('@/assets/images/city.jpg'), 
                      url('@/assets/images/dark.jpg');
  }
  25% {
    background-image: url('@/assets/images/plane.jpg'), 
                      url('@/assets/images/mountainn.png'), 
                      url('@/assets/images/city.jpg'), 
                      url('@assets/images/dark.jpg');
  }
  50% {
    background-image: url('@/assets/images/city.jpg'), 
                      url('@/assets/images/plane.jpg'), 
                      url('@/assets/images/mountainn.png'), 
                      url('@/assets/images/dark.jpg');
  }
  75% {
    background-image: url('@/assets/images/dark.jpg'), 
                      url('@/assets/images/plane.jpg'), 
                      url('@/assets/images/city.jpg'), 
                      url('@/assets/images/mountainn.png');
  }
}


.content-wrapper {
  background-color: rgba(255, 255, 255, 0);
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
  margin-bottom: 10px;
  z-index: 100; /* Ensures it’s above the background image */
}


</style>


