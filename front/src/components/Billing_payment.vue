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
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>
        </div>
      </div>

      <!-- Row 2 -->
      <div class="form-group">
        <div>
          <select v-model="state">
            <option disabled selected value="">Select State</option>
            <option value="New York">New York</option>
            <option value="California">California</option>
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
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="12">12</option>
          </select>
        </div>
        <div class="year">
          <select v-model="expiryYear">
            <option disabled selected value="">Year</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
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

  