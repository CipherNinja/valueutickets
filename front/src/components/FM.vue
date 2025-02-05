<template>
  <div class="FM">
    <!-- Mobile Filter Button -->
    <button class="mobile-filter-btn" @click="isMobileMenuOpen = true">
      <i class="bi bi-filter-left"></i> Filter
    </button>

    <!-- Mobile Filter Menu -->
    <div v-if="isMobileMenuOpen" class="mobile-filter-menu">
      <div class="mobile-filter-header">
        <h5>Filters</h5>
        <i class="bi bi-x" @click="isMobileMenuOpen = false"></i>
      </div>

      <div class="mobile-filter-body">
        <!-- Stops Filter -->
        <div class="filter-section">
          <div class="d-flex justify-content-between align-items-center">
            <p class="filter-title">STOPS</p>
            <i
              :class="isStopsOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"
              class="fs-5"
              @click="toggleStops"
            ></i>
          </div>
          <div v-if="isStopsOpen">
            <div class="form-check">
              <input
                type="checkbox"
                id="1stop"
                v-model="oneStop"
                class="form-check-input"
              />
              <label for="1stop" class="form-check-label">1 Stop</label>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                id="2stop"
                v-model="twoStops"
                class="form-check-input"
              />
              <label for="2stop" class="form-check-label">2 Stops</label>
            </div>
          </div>
        </div>

        <!-- Flight Time Filter (Moved Above Pricing) -->
        <div class="filter-section">
          <div class="d-flex justify-content-between align-items-center">
            <p class="filter-title">FLIGHT TIME</p>
            <i
              :class="
                isFlightTimeOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'
              "
              class="fs-5"
              @click="toggleFlightTime"
            ></i>
          </div>
          <div v-if="isFlightTimeOpen">
            <ul>
              <li>3:00 PM</li>
              <li>4:00 PM</li>
              <li>5:00 PM</li>
              <li>6:00 PM</li>
            </ul>
          </div>
        </div>

        <!-- Pricing Filter -->
        <div class="filter-section">
          <div class="d-flex justify-content-between align-items-center">
            <p class="filter-title">PRICING</p>
            <i
              :class="isPricingOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"
              class="fs-5"
              @click="togglePricing"
            ></i>
          </div>
          <div v-if="isPricingOpen">
            <input
              type="range"
              v-model="sliderValue"
              min="0"
              max="100"
              class="form-range"
            />
            <p>Selected Price: {{ formattedPrice }}</p>
          </div>
        </div>

        <!-- Airline Filter -->
        <div class="filter-section">
          <div class="d-flex justify-content-between align-items-center">
            <p class="filter-title">AIRLINE</p>
            <i
              :class="
                isAirlinesOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'
              "
              class="fs-5"
              @click="toggleAirlines"
            ></i>
          </div>
          <div v-if="isAirlinesOpen">
            <div class="form-check">
              <input
                type="checkbox"
                id="american"
                v-model="americanAirlines"
                class="form-check-input"
              />
              <label for="american" class="form-check-label"
                >American Airlines</label
              >
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                id="delta"
                v-model="deltaAirlines"
                class="form-check-input"
              />
              <label for="delta" class="form-check-label">Delta Airlines</label>
            </div>
          </div>
        </div>
      </div>

      <!-- Buttons at the Bottom -->
      <div class="mobile-filter-footer">
        <button class="btn btn-primary" @click="applyFilters">
          Apply Filter
        </button>
        <button class="btn btn-secondary" @click="clearFilters">
          Clear Filter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FM",
  data() {
    return {
      isMobileMenuOpen: false,
      sliderValue: 0,
      oneStop: false,
      twoStops: false,
      americanAirlines: false,
      deltaAirlines: false,
      isStopsOpen: false,
      isPricingOpen: false,
      isAirlinesOpen: false,
      isFlightTimeOpen: false, // New data property to handle flight time filter toggle
    };
  },
  computed: {
    formattedPrice() {
      const priceIndex = Math.floor((this.sliderValue / 100) * 2); // Adjusted for simplicity in mobile context
      return `$${[160, 180, 208][priceIndex]}`;
    },
  },
  methods: {
    clearFilters() {
      this.oneStop = false;
      this.twoStops = false;
      this.americanAirlines = false;
      this.deltaAirlines = false;
      this.sliderValue = 0;
      this.isMobileMenuOpen = false;
      this.isStopsOpen = false;
      this.isPricingOpen = false;
      this.isAirlinesOpen = false;
      this.isFlightTimeOpen = false; // Reset the flight time filter state
    },
    applyFilters() {
      this.isMobileMenuOpen = false;
    },
    toggleStops() {
      this.isStopsOpen = !this.isStopsOpen;
    },
    togglePricing() {
      this.isPricingOpen = !this.isPricingOpen;
    },
    toggleAirlines() {
      this.isAirlinesOpen = !this.isAirlinesOpen;
    },
    toggleFlightTime() {
      this.isFlightTimeOpen = !this.isFlightTimeOpen; // Toggle the flight time filter
    },
  },
};
</script>

<style scoped>
/* Mobile Filter Button */
.mobile-filter-btn {
  position: absolute;
  top: -5px;
  left: 20px;
  background: #71aeffe5;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  cursor: pointer;
  z-index: 1000;
}

/* Mobile Filter Menu */
.mobile-filter-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

/* Header */
.mobile-filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.mobile-filter-header i {
  cursor: pointer;
  font-size: 1.5rem;
}

/* Filter Body */
.mobile-filter-body {
  flex-grow: 1;
  overflow-y: auto;
}

/* Footer Buttons */
.mobile-filter-footer {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.mobile-filter-footer .btn {
  width: 48%;
}

/* Filter Title */
.filter-title {
  font-weight: bold;
  font-size: 18px;
}

/* Flight Time Section */
.filter-section ul {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.filter-section ul li {
  font-size: 16px;
}

/* Expanded Filter Content */
.filter-content {
  margin-top: 10px;
  padding-left: 15px;
}

@media (min-width: 768px) {
  .mobile-filter-btn,
  .mobile-filter-menu {
    display: none;
  }
}
</style>
