<template>
  <div class="container">
    <!-- Image at the top -->
    <div class="image-container">
      <img src="@/assets/Hotel/HotelBanner.jpg" alt="Hotel Room" class="top-image" />
    </div>

    <!-- Booking Card -->
    <div class="booking-card" id="search-hotel">
      <!-- Destination, Check-in, Check-out in One Row -->
      <div class="form-row">
        <div class="form-group">
          <label>Destination</label>
          <div class="input-box">
            <img src="@/assets/Hotel/locationicon.png" alt="Location" class="icon" />
            <select v-model="destination">
              <option value="Paris">Paris</option>
              <option value="New York">New York</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Dubai">Dubai</option>
              <option value="Rome">Rome</option>
              <option value="London">London</option>
              <option value="Bangkok">Bangkok</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Singapore">Singapore</option>
              <option value="Istanbul">Istanbul</option>
              <option value="Bali">Bali</option>
              <option value="Sydney">Sydney</option>
              <option value="Venice">Venice</option>
              <option value="Cancun">Cancun</option>
              <option value="Santorini">Santorini</option>
              <option value="Maui">Maui</option>
              <option value="Maldives">Maldives</option>
              <option value="Amsterdam">Amsterdam</option>
              <option value="Prague">Prague</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Florence">Florence</option>
              <option value="Kyoto">Kyoto</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Cape Town">Cape Town</option>
              <option value="Machu Picchu">Machu Picchu</option>
              <option value="Great Barrier Reef">Great Barrier Reef</option>
              <option value="Yellowstone">Yellowstone</option>
              <option value="Tuscany">Tuscany</option>
              <option value="Swiss Alps">Swiss Alps</option>
              <option value="Petra">Petra</option>
              <option value="Lisbon">Lisbon</option>
              <option value="Kuala Lumpur">Kuala Lumpur</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Jerusalem">Jerusalem</option>
              <option value="Seoul">Seoul</option>
              <option value="Phuket">Phuket</option>
              <option value="Berlin">Berlin</option>
              <option value="Athens">Athens</option>
              <option value="Madrid">Madrid</option>
              <option value="Vienna">Vienna</option>
              <option value="Mexico City">Mexico City</option>
              <option value="Toronto">Toronto</option>
              <option value="Budapest">Budapest</option>
              <option value="Cairo">Cairo</option>
              <option value="Munich">Munich</option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Osaka">Osaka</option>
              <option value="Beijing">Beijing</option>
              <option value="Las Vegas">Las Vegas</option>
              <option value="Edinburgh">Edinburgh</option>
              <option value="Dubrovnik">Dubrovnik</option>
              <option value="Shanghai">Shanghai</option>
              <option value="Chicago">Chicago</option>
              <option value="Vancouver">Vancouver</option>
              <option value="Moscow">Moscow</option>
              <option value="Lima">Lima</option>
              <option value="Reykjavik">Reykjavik</option>
              <option value="Zermatt">Zermatt</option>
              <option value="Salzburg">Salzburg</option>
              <option value="Helsinki">Helsinki</option>
              <option value="Bruges">Bruges</option>
              <option value="Quebec City">Quebec City</option>
              <option value="Stockholm">Stockholm</option>
              <option value="Vienna">Vienna</option>
              <option value="Agra">Agra</option>
              <option value="Johannesburg">Johannesburg</option>
              <option value="Chamonix">Chamonix</option>
              <option value="Santiago">Santiago</option>
              <option value="Colombo">Colombo</option>
              <option value="Krakow">Krakow</option>
              <option value="Montreal">Montreal</option>
              <option value="Lucerne">Lucerne</option>
              <option value="Oslo">Oslo</option>
              <option value="Siem Reap">Siem Reap</option>
              <option value="Granada">Granada</option>
              <option value="Hoi An">Hoi An</option>
              <option value="Fiji">Fiji</option>
              <option value="Marrakech">Marrakech</option>
              <option value="Melbourne">Melbourne</option>
              <option value="Naples">Naples</option>
              <option value="Rovaniemi">Rovaniemi</option>
              <option value="Zanzibar">Zanzibar</option>
              <option value="Seville">Seville</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Giza">Giza</option>
              <option value="Havana">Havana</option>
              <option value="Warsaw">Warsaw</option>
              <option value="Valencia">Valencia</option>
              <option value="Porto">Porto</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label>Check In</label>
          <div class="input-box">
            <img src="@/assets/Hotel/checkinicon.png" alt="Location" class="icon" />
            <input type="date" v-model="checkIn" />
          </div>
        </div>

        <div class="form-group">
          <label>Check Out</label>
          <div class="input-box">
            <img src="@/assets/Hotel/checkouticon.png" alt="Location" class="icon" />
            <input type="date" v-model="checkOut" />
          </div>
        </div>
      </div>

      <!-- Adults and Children in One Row -->
      <div class="form-row">
        <div class="form-group">
          <label>Adult</label>
          <div class="counter-box">
            <span>  <img src="@/assets/Hotel/adulticon.png" alt="Location" class="icon" />
            {{ adults }} Adult</span>
           
            <button @click="changeCount('adult', -1)">-</button>
            <span>{{ adults }}</span>
            <button @click="changeCount('adult', 1)">+</button>
          </div>
        </div>

        <div class="form-group">
          <label>Child</label>
          <div class="counter-box">
            <span>  <img src="@/assets/Hotel/childicon.png" alt="Location" class="icon" />
              {{ children }} Child</span>
            <button @click="changeCount('child', -1)">-</button>
            <span>{{ children }}</span>
            <button @click="changeCount('child', 1)">+</button>
          </div>
        </div>
        
      </div>

      <!-- Search Button -->
      <button class="search-btn" @click="searchHotel">Search Hotel</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      destination: "Miami",
      checkIn: "",
      checkOut: "",
      adults: 2,
      children: 0,
    };
  },
  methods: {
    changeCount(type, value) {
      if (type === "adult" && this.adults + value >= 1) this.adults += value;
      if (type === "child" && this.children + value >= 0) this.children += value;
    },
    searchHotel() {
      alert(
        `Searching hotels in ${this.destination} from ${this.checkIn} to ${this.checkOut}`
      );
    },
  },
};
</script>

<style scoped>

/* Container to center everything */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px; 
  gap: 20px;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

/* Image at the top */
.image-container {
  width: 100%;
  max-width: 100%;
  text-align: center;
}

.top-image {
  width: 100%;
  height: 400px;
}

/* Booking Card */
.booking-card {
  background: #FFFFFF;
  padding: 5vh 15vh;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1000px;
  
  margin-top: -200px;
}

/* Form Row */
.form-row {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  /* margin-bottom: 15px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  align-items: center;
}
.icon {
  width: 20px; /* Adjust size as needed */
  height: 20px;
  margin-right: 8px;
}

/* Form Group */
.form-group {
  flex: 1;
}

/* Input Box */
.input-box {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  /* background: white; */
}

.input-box input,
.input-box select {
  border: none;
  width: 100%;
  outline: none;
  font-size: 16px;
}

/* Counter Box */
.counter-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid #ccc;
  width: 100%;
 
  padding: 8px;
  border-radius: 5px;
}

/* Counter Buttons */
.counter-box button {
  border: none;
  /* background: #e2e5e7; */
  color: black;
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  /* transition: background 0.3s; */
  background-color: #D9D9D9;
}
.empty-column {
  visibility: hidden; /* Keeps the structure without displaying anything */
}

.counter-box button:hover {
  background: #cfd3d6;
}

/* Search Button */
.search-btn {
  background: #2196F3;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px auto 0;
  width: 20%;
  display: block;
  text-align: center;
}

.search-btn:hover {
  background: #0056b3;
}


/* 🟢 ONE PLACE FOR ALL RESPONSIVE CODE 🟢 */
@media (max-width: 768px) {

  .image-container {
    display: none; /* Hide image */
  }
  .booking-card 
  {
  
    margin-top: 15px;
    padding: 50px;
    border-radius: 0;
    background-color: white;
  }
  .form-row {
    grid-template-columns: 1fr 1fr  ; /* Two columns */
  
  }

  .search-btn {
    width: 30%;
  }
}

@media (max-width: 480px) {
  .form-row {
    grid-template-columns: 1fr; /* Single column */
    gap: 10px;
  }
  .image-container {
    display: none; /* Hide image */
  }
  .search-btn {
    width: 50%;
  }
}

@media (max-width: 325px) {
  .form-row {
    grid-template-columns: 1fr;
    /* gap: 8px; */
    margin-bottom: 0;
  }
  .search-btn {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
