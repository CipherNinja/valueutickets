<template>
  <div
    class="card shadow-lg border m-3"
    style="min-width: 280px; border-radius: 5%; font-family: 'Inter', sans-serif"
  >
    <div class="card-body text-center">
      <p class="card-title fw-bold" style="font-size: 20px; font-weight: bold">
        77 RESULTS FOUND
      </p>
    </div>

    <div class="card-body d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <i class="bi bi-filter-left fs-5 me-2" style="font-size: 1.2rem"></i>
        <p class="fw-bold fs-5 mb-0" style="font-size: 1rem; font-weight: bold">
          Filter
        </p>
      </div>

      <!-- Clear Filter Button -->
      <p
        class="fw-bold fs-5 mb-0"
        style="font-size: 1rem; color: #71aeffe5; cursor: pointer"
        @click="clearFilters"
      >
        Clear Filter
      </p>
    </div>

    <div class="card-body d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <p class="fw-bold fs-5 mb-0" style="font-size: 1rem; font-weight: bold">
          STOPS
        </p>
      </div>

      <i
        :class="isOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"
        class="fs-5"
        style="cursor: pointer"
        @click="toggleOptions"
      ></i>
    </div>

    <div
      v-if="isOpen"
      class="mt-2 d-flex justify-content-between align-items-center px-3"
    >
      <!-- Checkboxes with Text -->
      <div class="d-flex flex-column justify-content-between me-3">
        <div class="form-check me-4">
          <input
            class="form-check-input"
            type="checkbox"
            id="1stop"
            v-model="oneStop"
          />
          <label class="form-check-label" for="1stop">1 Stop</label>
        </div>
        <div class="form-check me-4">
          <input
            class="form-check-input"
            type="checkbox"
            id="2stop"
            v-model="twoStops"
          />
          <label class="form-check-label" for="2stop">2 Stops</label>
        </div>
      </div>

      <!-- Pricing -->
      <div class="ms-3">
        <span>$180</span><br />
        <span>$160</span>
      </div>
    </div>

    <!-- Pricing Section with Toggle Arrow for Pricing -->
    <div class="card-body d-flex justify-content-between align-items-center">
      <!-- Left Side: Pricing Text -->
      <div class="d-flex align-items-center">
        <p class="fw-bold fs-5 mb-0" style="font-size: 1rem; font-weight: bold">
          PRICING
        </p>
      </div>

      <!-- Right Side: Clickable Toggle Arrows for Pricing -->
      <i
        :class="isPricingOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"
        class="fs-5"
        style="cursor: pointer"
        @click="togglePricingOptions"
      ></i>
    </div>

    <!-- Pricing Options with Slider -->
    <div v-if="isPricingOpen" class="mt-2 px-3">
      <!-- Pricing on the Left -->
      <div class="d-flex justify-content-between align-items-center">
        <span class="fw-bold fs-5" style="font-size: 1rem">Pricing</span>

        <!-- Progress Slider in the Center -->
        <div class="flex-grow-1 mx-3" style="color: #3235e3">
          <input
            type="range"
            v-model="sliderValue"
            min="0"
            max="100"
            class="form-range"
            @input="updatePrice"
            style="width: 100%; color: #3235e3"
          />
        </div>

        <!-- Pricing Amount on the Right -->
        <div>
          <span class="fw-bold fs-5" style="font-size: 1rem">{{
            formattedPrice
          }}</span>
        </div>
      </div>
    </div>

    <div class="card-body d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <p class="fw-bold fs-5 mb-0" style="font-size: 1rem; font-weight: bold">
          FLIGHT TIME
        </p>
      </div>

      <i
        :class="isFlightTimeOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"
        class="fs-5"
        style="cursor: pointer"
        @click="toggleFlightTimeOptions"
      ></i>
    </div>

    <!-- Show Departure time when the arrow is open -->
    <div v-if="isFlightTimeOpen" class="px-3">
      <p class="fw-semibold fs-6 mb-2" style="font-style: 1rem">
        Departure time from New York
      </p>

      <div class="d-flex justify-content-between">
        <span>3:00 AM</span>
        <span>4:00 AM</span>
        <span>5:00 AM</span>
        <span>6:00 AM</span>
      </div>
    </div>

    <!-- Updated Airline Section with New Class -->
    <div class="card-body d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <p class="fs-5 mb-0" style="font-weight: bold">AIRLINE</p>
      </div>

      <i
        :class="isAirlineOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"
        class="fs-5"
        style="cursor: pointer"
        @click="toggleAirlineOptions"
      ></i>
    </div>

    <!-- Airlines Section -->
    <div v-if="isAirlineOpen" class="mt-2 px-3">
      <div class="d-flex flex-column gap-2">
        <!-- Airline 1 -->
        <div class="d-flex justify-content-between align-items-center" >
          <div class="d-flex justify-content-between align-items-center">
            <input
              type="checkbox"
              id="american"
              class="form-check-input me-2"
            />
            <label for="american" class="fs-6 mb-0">American Airlines</label>
          </div>
          <span class="fs-6">$160</span>
        </div>

        <!-- Airline 2 -->
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <input type="checkbox" id="delta" class="form-check-input me-2" />
            <label for="delta" class="fs-6 mb-0">Delta Airlines</label>
          </div>
          <span class="fs-6">$180</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filter",
  data() {
    return {
      isOpen: false, // Initial state: options for stops are hidden
      isPricingOpen: false, // Initial state for pricing options
      isFlightTimeOpen: false, // Initial state for flight time options
      isAirlineOpen: false, // Initial state for airline options
      sliderValue: 0, // Value of the progress slider (0 to 100)
      priceRanges: [160, 180, 208], // Price options
      // Additional states for checkbox filters
      direct: false,
      oneStop: false,
      twoStops: false,
      threeStops: false, // New state for 3 stops
      fourStops: false, // New state for 4 stops
    };
  },
  computed: {
    // Calculate the price based on the slider value
    formattedPrice() {
      const priceIndex = Math.floor(
        (this.sliderValue / 100) * (this.priceRanges.length - 1)
      );
      const price = this.priceRanges[priceIndex];
      return `$${price}`;
    },
  },
  methods: {
    toggleOptions() {
      this.isOpen = !this.isOpen; // Toggle between open/close for stops
    },
    togglePricingOptions() {
      this.isPricingOpen = !this.isPricingOpen; // Toggle between open/close for pricing
    },
    toggleFlightTimeOptions() {
      this.isFlightTimeOpen = !this.isFlightTimeOpen; // Toggle flight time options
    },
    toggleAirlineOptions() {
      this.isAirlineOpen = !this.isAirlineOpen; // Toggle airline filter options
    },
    updatePrice() {
      // This method is triggered when the slider is moved
      // It calculates the price based on the slider value and updates `formattedPrice`
    },
    clearFilters() {
      // Reset all checkbox filters
      this.oneStop = false;
      this.twoStops = false;
      this.direct = false;
      this.threeStops = false;
      this.fourStops = false;

      // Reset the slider value
      this.sliderValue = 0;

      // Reset toggle states for dropdowns
      this.isOpen = false;
      this.isPricingOpen = false;
      this.isFlightTimeOpen = false;
      this.isAirlineOpen = false;
    },
  },
};
</script>

<style scoped>
/* Optional Styling */
.form-range {
  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  background: #ddd;
  border-radius: 5px;
  outline: none;
  transition: background 0.3s ease;
  color: #3235e3;
}

.form-range:active,
.form-range:focus {
  background: #3235e3;
}
</style>
