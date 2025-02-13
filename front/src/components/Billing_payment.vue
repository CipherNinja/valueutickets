<template>
  <div class="container-wrapper">
    <div class="heading">Payment & Billing Details</div>
    <div class="container">
      <!-- Address Fields -->
      <div class="form-group">
        <input type="text" v-model="payment.address_line1" placeholder="Address Line 1" required @input="updateParent"/>
        <input type="text" v-model="payment.address_line2" placeholder="Address Line 2" @input="updateParent"/>
        <input type="text" v-model="payment.postal_code" placeholder="Postal/Zip Code" required @input="updateParent"/>
      </div>

      <!-- State, City, Country -->
      <div class="form-group">
        <input type="text" v-model="payment.city" placeholder="City" required @input="updateParent"/>
        <select v-model="payment.state" required @change="updateParent">
          <option disabled value="">Select State</option>
          <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
        </select>
        <select v-model="payment.country" required @change="updateParent">
          <option disabled value="">Country</option>
          <option value="USA" selected>United States of America</option>
        </select>
      </div>

      <!-- Card Details -->
      <div class="form-group">
        <input 
          type="text" 
          v-model="payment.card_number" 
          placeholder="Enter Card Number" 
          required 
          @input="validateCardNumber"
        />
        <span v-if="cardType" class="card-type">{{ cardType }}</span>
        <p v-if="cardError" class="error">{{ cardError }}</p>

        <input 
          type="text" 
          v-model="payment.cardholder_name" 
          placeholder="Enter Card Holder Name" 
          required 
          @input="updateParent"
        />
      </div>

      <!-- Expiry and CVV -->
      <div class="form-group">
        <select v-model="payment.card_expiry_month" @change="updateParent">
          <option disabled value="">Month</option>
          <option v-for="n in 12" :key="n" :value="n">{{ n.toString().padStart(2, '0') }}</option>
        </select>

        <select v-model="payment.card_expiry_year" @change="updateParent">
          <option disabled value="">Year</option>
          <option v-for="year in expiryYears" :key="year" :value="year">{{ year }}</option>
        </select>

        <input 
          type="text" 
          v-model="payment.cvv" 
          placeholder="CVV/CVC" 
          @input="validateCVV"
        />
        <p v-if="cvvError" class="error">{{ cvvError }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["update-payment"], // Define the event for Vue 3
  data() {
    return {
      payment: {
        address_line1: "",
        address_line2: "",
        country: "USA",
        state: "",
        city: "",
        postal_code: "",
        card_number: "",
        card_expiry_month: "",
        card_expiry_year: "",
        cvv: "",
        cardholder_name: ""
      },
      cardType: "",
      cardError: "",
      cvvError: "",
      states: [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
        "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
        "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
        "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
        "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
        "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
        "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
        "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
      ],
      expiryYears: Array.from({ length: 12 }, (_, i) => new Date().getFullYear() + i),
      cardPatterns: {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        maestro: /^(?:5[06789]|6[0-9])[0-9]{10,17}$/,
      }
    };
  },
  methods: {
    updateParent() {
      this.$emit("update-payment", this.payment); // Send data to parent
    },
    validateCardNumber() {
      const num = this.payment.card_number.replace(/\D/g, ""); // Remove non-numeric characters
      this.payment.card_number = num;
      this.cardError = "";

      if (!num) {
        this.cardType = "";
        return;
      }

      if (this.cardPatterns.visa.test(num)) {
        this.cardType = "Visa";
      } else if (this.cardPatterns.mastercard.test(num)) {
        this.cardType = "MasterCard";
      } else if (this.cardPatterns.amex.test(num)) {
        this.cardType = "American Express";
      } else if (this.cardPatterns.discover.test(num)) {
        this.cardType = "Discover";
      } else if (this.cardPatterns.maestro.test(num)) {
        this.cardType = "Maestro";
      } else {
        this.cardError = "Invalid Card Number";
        this.cardType = "";
      }

      this.updateParent();
    },
    validateCVV() {
      const cvvLength = this.cardType === "American Express" ? 4 : 3;
      const cvvPattern = new RegExp(`^[0-9]{${cvvLength}}$`);
      this.cvvError = "";

      if (!cvvPattern.test(this.payment.cvv)) {
        this.cvvError = `CVV must be ${cvvLength} digits`;
      }

      this.updateParent();
    }
  }
};
</script>


<style scoped>
.card-type {
  color: green;
  font-weight: bold;
}
.error {
  color: red;
  font-size: 12px;
}

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
  margin-bottom: 7px;
  gap: 10px;
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

  