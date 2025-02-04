<template>
  <div class="flight-card">
    <!-- Row 0: Color Bar -->
    <div class="color-bar"></div>

    <!-- Row 1: Airline (Separate on Mobile) -->
    <div class="airline-container">
      <img :src="airlineLogo" :alt="airlineName" class="airline-logo" />
      <span class="airline-name">{{ airlineName }}</span>
    </div>

    <!-- Row 2: Flight Details -->
    <div class="flight-info">
      <!-- Departure -->
      <div class="flight-detail">
        <i class="fas fa-plane-departure"></i>
        <div class="div-type-row">
          <span class="airport">{{ departureAirport }}</span>
          <span class="datetime">{{ departureDateTime }}</span>
        </div>
      </div>

      <!-- Dashed Line with Floating Duration -->
      <div class="flight-duration">
        <span class="duration">{{ duration }}</span>
        <div class="dashed-line"></div>
      </div>

      <!-- Arrival -->
      <div class="flight-detail">
        <i class="fas fa-plane-arrival"></i>
        <div class="div-type-row">
          <span class="airport">{{ arrivalAirport }}</span>
          <span class="datetime">{{ arrivalDateTime }}</span>
        </div>
      </div>
    </div>

    <!-- Row 3: Contact, Pricing & Book Button -->
    <div class="pricing-info">
      <!-- USA Contact Number -->
      <span class="contact">📞 +1-800-555-1234</span>

      <!-- Price per Person -->
      <div class="price-details">
        <span class="price-label">Price per Person</span>
        <span class="tax-info">Incl. Taxes & Fees</span>
      </div>

      <div class="spacer"></div>

      <!-- Price & Book Now -->
      <div class="booking">
        <span class="price">${{ price }}</span>
        <button class="book-now">Book Now</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const airlineName = ref("American Airlines");
const airlineLogo = ref("https://upload.wikimedia.org/wikipedia/en/thumb/2/23/American_Airlines_logo_2013.svg/1920px-American_Airlines_logo_2013.svg.png");

const departureAirport = ref("New York - JFK");
const arrivalAirport = ref("Los Angeles - LAX");
const departureDateTime = ref("Feb 10, 2025 - 08:30 AM");
const arrivalDateTime = ref("Feb 10, 2025 - 11:45 AM");
const duration = ref("6h 15m");
const price = ref("399");
</script>

<style scoped>
.flight-card {
  justify-self: center;
  background: #ffffff;
  border-radius: 12px;
  padding: 0px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
}

/* Row 0: Color Bar */
.color-bar {
  height: 18px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: linear-gradient(45deg, #ff5733, #ff8c00);
}

/* Row 1: Airline */
.airline-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  padding-bottom: 0px;
}

.airline-logo {
  max-width: 140px;
  max-height: 25px;
  object-fit: scale-down;
}

.airline-name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

/* Row 2: Flight Info */
.flight-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px;
}

.flight-detail {
  display: flex;
  align-items: center;
  gap: 8px;
}

.div-type-row {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.airport {
  font-weight: bold;
  font-size: 14px;
}

.datetime {
  font-size: 12px;
  color: #666;
}

/* Flight Duration with Dashed Line */
.flight-duration {
  position: relative;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.duration {
  position: absolute;
  top: -12px;
  background: rgba(255, 255, 255, 1);
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
  z-index: 10;
}

.dashed-line {
  width: 100%;
  border-bottom: 2px dashed gray;
  margin-top: 7px;
  margin: 0px 0px;
}

/* Row 3: Pricing & Book Button */
.pricing-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  padding-top: 0px;
}

.contact {
  background-color: rgb(0, 119, 255);
  font-size: 14px;
  padding: 5px 8px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 5px;
}

.price-details {
  display: flex;
  flex-direction: column;
}

.price-label {
  font-size: 15px;
  font-weight: bold;
  color: #333;
}

.tax-info {
  font-size: 10px;
  color: #666;
}

.spacer {
  flex-grow: 1;
}

.booking {
  display: flex;
  align-items: center;
  gap: 12px;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: #e63946;
}

.book-now {
  background: linear-gradient(45deg, #ff5733, #ff8c00);
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: transform 0.2s ease-in-out;
}

.book-now:hover {
  transform: scale(1.05);
}

/* Responsive Layout for Mobile (Below 430px) */
@media (max-width: 430px) {
  .flight-card {
    padding: 3px;
    gap: 5px;
  }

  .airline-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2px;
  }

  .flight-info {
    flex-direction: column;
    text-align: center;
    border-bottom: none;
    gap: 25px;
  }

  .flight-detail {
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  .duration {
    top: -20px;
  }
  .dashed-line {
    width: 0%;
  }

  .pricing-info {
    font-size: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2px;
  }

  .spacer {
    display: none;
    gap: 5px;
  }

  .booking {
    flex-direction: column;
    gap: 3px;
  }
}
</style>
