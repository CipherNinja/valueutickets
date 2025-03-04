<template>
  <div
    class="card shadow-lg border m-4"
    style="
      min-width: 400px;
      border-radius: 10px;
      font-family: 'Inter', sans-serif;
    "
  >
    <div class="card-body text-center">
      <p class="card-title fw-bold" style="font-size: 20px; font-weight: bold">
        77 RESULTS FOUND
      </p>
    </div>

    <div class="card-body d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <i
          class="bi bi-filter-left fs-5 me-2"
          style="font-size: 1.5rem; color: #3235e3"
        ></i>
        <p
          class="fw-bold fs-5 mb-1 mx-2"
          style="font-size: 1rem; font-weight: 500"
        >
          Filter
        </p>
      </div>

      <!-- Clear Filter Button -->
      <p
        class="fw-bold fs-5 mb-0"
        style="
          font-size: 1rem;
          color: #4b4dc8;
          cursor: pointer;
          font-weight: 500;
        "
        @click="clearFilters"
      >
        Clear Filter
      </p>
    </div>

    <div class="card-body d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <p class="fw-bold fs-5 mb-0" style="font-size: 1rem; font-weight: 500">
          STOPS
        </p>
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center px-3">
      <!-- Checkboxes with Text -->
      <div class="d-flex flex-column justify-content-between me-3">
        <div class="form-check me-4">
          <input
            class="form-check-input"
            type="checkbox"
            id="directStop"
            v-model="direct"
          />
          <label class="form-check-label" for="directStop">Direct Stops</label>
        </div>
        <div class="form-check me-4">
          <input
            class="form-check-input"
            type="checkbox"
            id="oneStop"
            v-model="oneStop"
          />
          <label class="form-check-label" for="oneStop">1 Stop</label>
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
        <span>$208</span><br />
        <span>$180</span><br />
        <span>$160</span>
      </div>
    </div>

    <!-- Pricing Section with Toggle Arrow for Pricing -->
    <div class="card-body d-flex justify-content-between align-items-center">
      <!-- Left Side: Pricing Text -->
      <div class="d-flex align-items-center">
        <p class="fw-bold fs-5 mb-0" style="font-size: 1rem; font-weight: 500">
          FLIGHT PRICE
        </p>
      </div>
    </div>

    <!-- Pricing Options with Slider -->
    <div class="px-3">
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
            style="width: 100%; height: 4px; accent-color: #3235e3"
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
        <p class="fw-bold fs-5 mb-0" style="font-size: 1rem; font-weight: 500">
          FLIGHT TIME
        </p>
      </div>
    </div>

    <!-- Show Departure time when the arrow is open -->
    <div class="px-3">
      <p class="fw-semibold fs-6 mb-2" style="font-style: 1rem">
        Departure time from New York
      </p>

      <div
        class="d-flex justify-content-between px-5"
        style="margin-left: -45px"
      >
        <span
          class="border border-2 rounded p-2 d-flex flex-column align-items-center mx-1 h-5"
        >
          <img
            src="/icons8-morning-32.png"
            alt="Evening Icon"
            class="img-fluid"
            style="width: 30px"
          />
          <p
            class="mb-0 mt-2 fw-bold"
            style="font-size: 13px; text-wrap: nowrap"
          >
            (00-05)
          </p>
        </span>

        <span
          class="border border-2 rounded p-3 d-flex flex-column align-items-center mx-2"
        >
          <img
            src="/icons8-sun-50.png"
            alt="Evening Icon"
            class="img-fluid"
            style="width: 30px"
          />
          <p
            class="mb-0 mt-2 fw-bold"
            style="font-size: 13px; text-wrap: nowrap"
          >
            (05-12)
          </p>
        </span>

        <span
          class="border border-2 rounded p-3 d-flex flex-column align-items-center mx-2"
        >
          <img
            src="/icons8-evening-64.png"
            alt="Evening Icon"
            class="img-fluid"
            style="width: 30px"
          />
          <p
            class="mb-0 mt-2 fw-bold"
            style="font-size: 13px; text-wrap: nowrap"
          >
            (12-18)
          </p>
        </span>

        <span
          class="border border-2 rounded p-3 d-flex flex-column align-items-center mx-2"
        >
          <img
            src="/icons8-night-50.png"
            alt="Evening Icon"
            class="img-fluid"
            style="width: 30px"
          />
          <p
            class="mb-0 mt-2 fw-bold"
            style="font-size: 13px; text-wrap: nowrap"
          >
            (18-24)
          </p>
        </span>
      </div>
    </div>

    <!-- Updated Airline Section with New Class -->
    <div class="card-body d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <p class="fs-5 mb-0" style="font-weight: 500">AIRLINE</p>
      </div>
    </div>

    <!-- Airlines Section -->
    <div class="px-4">
      <div class="d-flex flex-column gap-2">
        <!-- Airline 1 -->
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-between align-items-center px-2">
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
          <div class="d-flex align-items-center px-2">
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
      sliderValue: 0,
      priceRanges: [160, 180, 208],
      direct: false,
      oneStop: false,
      twoStops: false,
      threeStops: false,
      fourStops: false,
      isOpen: false,
      isPricingOpen: false,
      isFlightTimeOpen: false,
      isAirlineOpen: false,
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
    updatePrice() {
      // This method is triggered when the slider is moved
      // It calculates the price based on the slider value and updates `formattedPrice`
    },
    clearFilters() {
      // Reset all checkbox filters
      this.direct = false;
      this.oneStop = false;
      this.twoStops = false;
      this.threeStops = false;
      this.fourStops = false;

      // Reset the slider value
      this.sliderValue = 0;

      // Ensure computed property updates by triggering reactivity
      this.priceRanges = [...this.priceRanges];

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
</style>
