<template>
  <div class="container-wrapper">
    <div class="heading">Payment & Billing Details</div>
    <div class="container">
      <!-- Row 1 -->
      <div class="form-group">
        <div>
          <input type="text" v-model="addressLine1" placeholder="Address Line 1" required />
          <span class="required">*</span>
        </div>
        <div>
          <input type="text" v-model="addressLine2" placeholder="Address Line 2" />
        </div>
        <div>
          <select v-model="country">
            <option disabled selected value="">Country</option>
            <option value="United States">United States</option>
          </select>
        </div>
      </div>

      <!-- Row 2 -->
      <div class="form-group">
        <div>
          <select v-model="state">
            <option disabled selected value="">Select State</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </div>
        <div>
          <input type="text" v-model="city" placeholder="City" />
        </div>
        <div>
          <input type="text" v-model="postalCode" placeholder="Postal/Zip Code" />
        </div>
      </div>

      <!-- Row 3 -->
      <div class="form-group">
        <div>
          <input type="text" v-model="cardNumber" placeholder="Enter Card Number" required />
          <span class="require">*</span>
        </div>
        <div class="month">
          <select v-model="expiryMonth">
            <option disabled selected value="">Month</option>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div class="year">
          <select v-model="expiryYear">
            <option disabled selected value="">Year</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2031">2031</option>
            <option value="2032">2032</option>
            <option value="2033">2033</option>
            <option value="2034">2034</option>
            <option value="2035">2035</option>
            <option value="2036">2036</option>
          </select>
        </div>
        <div>
          <input type="text" v-model="cvv" placeholder="CVV/CVC" />
        </div>
      </div>

      <!-- Row 4 -->
      <div class="form-group">
        <div class="small-input">
          <input type="text" v-model="cardHolderName" placeholder="Enter Card Holder Name" required />
          <span class="requir">*</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addressLine1: '',
      addressLine2: '',
      country: '',
      state: '',
      city: '',
      postalCode: '',
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
      cardHolderName: '',
      isVertical: window.innerWidth < 725
    };
  },
  mounted() {
    window.addEventListener("resize", this.updateLayout);
    this.updateLayout(); // Initial check
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateLayout);
  },
  methods: {
    updateLayout() {
      this.isVertical = window.innerWidth < 725;
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #e8f5e9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  position: relative;
}

.container-wrapper {
  width: 100%;
  padding: 20px;
}

.heading {
  font-size: 24px;
  font-weight: bold;
  margin-left: 14px;
  margin-bottom: 12px;
}

.container {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  width: 100%;
  transition: width 0.3s ease-in-out;
}

.form-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.form-group div {
  flex: 1;
  margin: 0 10px;
  position: relative;
}

input, select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
}

select {
  background-color: white;
}

.required, .require, .requir {
  color: red;
  position: absolute;
  font-weight: bold;
}

.required {
  left: 120px;
  top: 15px;
}

.require {
  left: 150px;
  top: 14px;
}

.requir {
  left: 190px;
  top: 14px;
}

.small-input input {
  width: 32%;
}

/* Media queries for responsiveness */
@media (max-width: 725px) {
  .form-group {
    flex-direction: column;
  }

  .form-group div {
    margin: 0;
    margin-bottom: 15px;
  }

  .small-input input {
    width: 100%;
  }
}
</style>

  