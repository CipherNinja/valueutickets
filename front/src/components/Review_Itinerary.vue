<template>
  <div class="container">
    <h3 class="Main-heading">Review Your Itinerary</h3>
    <div class="header">
      <button class="hide-details" @click="toggleDetails">
        {{ detailsVisible ? 'Hide Details' : 'Show All' }} <span class="dot"></span>
      </button>
    </div>
    
    <div v-if="detailsVisible" class="itinerary-card">
      <p style="margin: 0px; text-align: center; margin-bottom: 10px;"><strong class="CityName">{{ flightDetails.flight_name }}</strong></p>     
      <div class="flight-info">
        <div class="route">
          <div class="from">
            <p class="SRC" style="margin: 0px;">
              <i class="fas fa-plane-departure"></i>&nbsp;
              {{ flightDetails.src }}
            </p>
            <p class="Date" style="margin: 0px;">{{ formatDateTime(flightDetails.departure) }}</p>
          </div>
          
          <div class="flight-path">
            <div class="icon">✈️</div>
            <div class="dotted-line"></div>
            <div class="destination-point"></div>
          </div>
          
          <div class="to">
            <strong class="CityName">{{ flightDetails.destination_iata }}</strong>
            <p class="DEST" style="margin: 0px;">
              <i class="fas fa-plane-arrival"></i>&nbsp;
              {{ flightDetails.dest }}
            </p>
            <p class="Date" style="margin: 0px;">{{ formatDateTime(flightDetails.arrival) }}</p>
          </div>
        </div>
        <p style="margin: 0px; text-align: center;">
          <span class="duration">Duration: {{ flightDetails.duration }} mins</span>&nbsp;&nbsp;&nbsp;
          <span class="stops">Stops: {{ flightDetails.stop_count }}</span>
        </p>
        <div v-if="isRoundTrip" class="return-route">
          <hr class="separator">
          <div class="route">
            <div class="from">
              <p class="SRC" style="margin: 0px;">
                <i class="fas fa-plane-departure"></i>&nbsp;
                {{ flightDetails.dest }}
              </p>
              <p class="Date" style="margin: 0px;">{{ formatDateTime(flightDetails.return_departure) }}</p>
            </div>
            
            <div class="flight-path">
              <div class="icon">✈️</div>
              <div class="dotted-line"></div>
              <div class="destination-point"></div>
            </div>
            
            <div class="to">
              <p class="DEST" style="margin: 0px;">
                <i class="fas fa-plane-arrival"></i>&nbsp;
                {{ flightDetails.src }}
              </p>
              <p class="Date" style="margin: 0px;">{{ formatDateTime(flightDetails.return_arrival) }}</p>
            </div>
          </div>
        </div>
        <p style="margin: 0px; text-align: center;">
          <span class="duration">Duration: {{ flightDetails.return_duration }} mins</span>&nbsp;&nbsp;&nbsp;
          <span class="stops">Stops: {{ flightDetails.return_stop_count }}</span>
        </p>
        <hr class="separator">
        <div class="actions">
          <a href="tel:+1 8339316548"><button class="call-now">Call now: +1 (833)931-6548</button></a>
          <div class="price-info">
            &nbsp;&nbsp;<span class="Price-per-person">Price Per Person</span>&nbsp;
            <span class="additional-info">(incl. Taxes & Fees)</span>
          </div>
          <div class="price">${{ flightDetails.price }}</div>
        </div>
      </div>
    </div>
    
    <div class="contact-form">
      <h4 class="heading-contact-info">How do we contact you?</h4>
      <div class="info-box">
        <div class="inputs">
          <input
            type="text"
            v-model="phone_number"
            @input="updateContactInfo"
            placeholder="Phone Number *"
            required
            :class="{ 'invalid': phone_numberError }"
          />
          <span v-if="phone_numberError" class="error-message">Invalid phone number. Format: xxxxxxxxxx</span>
          
          <input
            type="email"
            v-model="email"
            @input="updateContactInfo"
            placeholder="Email *"
            required
            :class="{ 'invalid': emailError }"
          />
          <span v-if="emailError" class="error-message">Please enter a valid email address.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "FlightItinerary",
  data() {
    return {
      detailsVisible: true,
      phone_number: "",
      email: "",
      phone_numberError: false,
      emailError: false,
      flightDetails: {},
      isRoundTrip: false,
    };
  },
  methods: {
    updateContactInfo() {
      this.validateForm();
      this.$emit("update-contact", { email: this.email, phone_number: this.phone_number });
    },
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    validateForm() {
      this.phone_numberError = !this.validatephone_number(this.phone_number);
      this.emailError = !this.validateEmail(this.email);
    },
    validatephone_number(phone) {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
    },
    validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    },
    formatDateTime(dateTimeString) {
      if (!dateTimeString) return "N/A";
      const date = new Date(dateTimeString);
      if (isNaN(date)) return "N/A";
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(date);
    },
  },
  mounted() {
    const route = useRoute();
    this.flightDetails = route.query;
    this.isRoundTrip = !!this.flightDetails.return_departure;
  },
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #EAF3F2;
  width:100%;
  max-width:100%;
}

.itinerary-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border-top: 36px solid #00c896;
}

.Main-heading {
  margin-bottom: -1rem;
  font-weight: bold;
  font-size:24px;
}

.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #333;
  margin-bottom: 1rem;
}

.hide-details {
  background: none;
  border: none;
  color: #5366AE;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  animation: pulseAnimation 1.5s infinite;
}
.CityName{
  font-size:22px;
  font-weight:bold;
}
@keyframes pulseAnimation {
  0% {
    color: #5366AE;
    transform: scale(1);
  }
  50% {
    color:  #5366AE;
    transform: scale(1.1);
  }
  100% {
    color: #5366AE;
    transform: scale(1);
  }
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #5366AE;
  border-radius: 50%;
  margin-left: 5px;
}

.super-saver {
  color: #00c896;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 22px;
  display: inline-block;
}

.saver {
  display: block;
  font-size: 26px;
}

.route {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
}

.flight-path {
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
}

.dotted-line {
  border-top: 1px dashed #007bff;
  width: 200px;
}

.icon {
  position: absolute;
  left: 0;
  animation: move-plane 3s linear infinite;
  font-size: 24px;
  margin-left: 5px;
}

@keyframes move-plane {
  0% {
    left: 0;
  }
  50% {
    left: 50%;
    transform: translateX(-50%);
  }
  100% {
    left: calc(100% - 15px); /* Stop at the destination dot */
  }
}


.destination-point {
  position: absolute;
  left: 100%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background-color: #007bff;
  border-radius: 50%;
  margin-top: -2px;
}

.from, .to {
  text-align: center;
}

.separator {
  border: none;
  height: 2px;
  background-color: #00c896;
  margin: 0px 0px;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0px;
  margin-top: 0%;
}

.call-now {
  background: #00c896;
  color: white;
  border: none;
  margin-top: 5px;
  padding: 6px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.3s ease, background 0.3s ease;
}

.call-now:hover {
  background: #00a37f;
  transform: scale(1.1);
}

.price-info {
  align-items: flex-start;
  margin-left: 0px;
}

.additional-info {
  font-size: 12px;
  color: #666;
  margin-top: 0px;
}

.book-now {
  background: linear-gradient(90deg, #3e41ec, #09c398);
  border: none;
  padding: 10px 20px;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-left: 20px;
  animation: pulse 1.5s infinite;
}

.price {
  font-size: 22px;
  color: #00c896;
  font-weight: bold;
  margin-left: 36rem;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.book-now:hover {
  background: linear-gradient(90deg, #00ced1, #1e90ff);
  animation: bounce 0.6s ease;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.heading-contact-info {
  margin-bottom: 10px;
  font-weight: bold;
}

.info-box {
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.inputs {
  display: flex;
  gap: 15px;
}

.inputs input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 14px;
}

.invalid {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
/*---------------Responsiveness---------------------*/
@media (max-width: 1200px) {
  .container, .itinerary-card, .info-box {
    padding: 20px;
  }
  .price {
    margin-left: auto;
  }
}

@media (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
  }
 
  .itinerary-card, .header, .info-box {
    padding: 15px;
    width: 90%;
  }

  .route{
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 100%;
  }
  .actions {
    flex-direction: column;
    align-items: center;
    gap: 0px;
    width: 100%;
  }

  .info-box {
    width: 80vw;
    padding: 20px;
  }
    .Main-heading {
    margin-top: 1.2rem; 
    margin-bottom: 0.3rem; 
    font-size: 24px;
  }

  .hide-details {
    margin-top: 0.2rem; /* Gap ko kam karne ke liye */
  }

  .inputs {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .inputs input {
    width: 100%;
    padding: 12px;
    font-size: 14px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .call-now, .book-now {
    padding: 6px 12px;
    font-size: 16px;
    margin: 4px 0;
  }

  .price {
    margin: auto;
  }

  
}
</style>
