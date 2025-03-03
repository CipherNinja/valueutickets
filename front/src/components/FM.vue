<template>
  <div class="FM">
    <!-- Mobile Filter Button -->
    <button class="mobile-filter-btn" @click="isMobileMenuOpen = true">
      <i class="bi bi-filter-left"></i> Filter
    </button>

    <!-- Mobile Filter Menu -->
    <transition name="slide">
      <div v-if="isMobileMenuOpen" class="mobile-filter-menu">
        <div class="mobile-filter-header">
          <h5>Filters</h5>
          <i class="bi bi-x close-icon" @click="isMobileMenuOpen = false"></i>
        </div>

        <div class="mobile-filter-body">
          <!-- Stops Filter -->
          <div class="filter-section">
            <p class="filter-title">STOPS</p>
            <div>
              <div class="form-check">
                <input
                  type="checkbox"
                  id="dstop"
                  v-model="oneStop"
                  class="form-check-input"
                />
                <label for="dstop" class="form-check-label">Direct Stops</label>
              </div>
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

          <!-- Flight Time Filter -->
          <div class="filter-section">
            <p class="filter-title">FLIGHT TIME</p>
            <ul class="flight-time-list">
              <li v-for="(flight, index) in flightTimes" :key="index">
                <span class="flight-time-item">
                  <img
                    :src="flight.imgSrc"
                    :alt="flight.time"
                    class="img-fluid"
                  />
                  <p
                    class="mb-0 mt-2 fw-bold"
                    style="font-size: 13px; text-wrap: nowrap"
                  >
                    {{ flight.time }}
                  </p>
                </span>
              </li>
            </ul>
          </div>

          <!-- Pricing Filter -->
          <div class="filter-section">
            <p class="filter-title">PRICING</p>
            <input
              type="range"
              v-model="sliderValue"
              min="0"
              max="100"
              class="form-range"
              @input="updatePrice"
              style="width: 100%; height: 4px; accent-color: #3235e3"
            />
            <p>Selected Price: {{ formattedPrice }}</p>
          </div>

          <!-- Airline Filter -->
          <div class="filter-section">
            <p class="filter-title">AIRLINE</p>
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
    </transition>
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
      flightTimes: [
        { time: "(05-12)", imgSrc: "/icons8-morning-32.png" },
        { time: "(12-18)", imgSrc: "/icons8-sun-50.png" },
        { time: "(18-24)", imgSrc: "/icons8-evening-64.png" },
        { time: "(00-05)", imgSrc: "/icons8-night-50.png" },
      ],
    };
  },
  computed: {
    formattedPrice() {
      const priceIndex = Math.floor((this.sliderValue / 100) * 2);
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
    },
    applyFilters() {
      this.isMobileMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.mobile-filter-btn {
  position: absolute;
  top: 0px;
  left: 2px;
  background: #3235e3;
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

.mobile-filter-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.mobile-filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
}

.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.close-icon {
  cursor: pointer;
  font-size: 1.5rem;
}

.mobile-filter-body {
  flex-grow: 1;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.mobile-filter-body::-webkit-scrollbar {
  display: none;
}

.filter-title {
  font-weight: bold;
  font-size: 18px;
}

.flight-time-list {
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-top: 10px;
  list-style: none;
}

.flight-time-item {
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 60px;
}

.img-fluid {
  width: 50px;
  height: auto;
}

.form-range {
  height: 10px;
  background: #3235e3;
  border-radius: 5px;
  outline: none;
}

.mobile-filter-footer {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.mobile-filter-footer .btn {
  width: 48%;
}

.form-range {
  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  background: #3235e3;
  border-radius: 5px;
  outline: none;
  transition: background 0.3s ease;
  color: #3235e3;
}

.form-range:active,
.form-range:focus {
  background: #3235e3;
}

@media (min-width: 768px) {
  .mobile-filter-btn,
  .mobile-filter-menu {
    display: none;
  }
}
</style>
