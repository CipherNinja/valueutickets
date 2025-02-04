<template>
    <div class="terms-container">

      <h2 class="terms-heading">Terms & Conditions</h2>
      
      
      <div class="terms-box">
        <p>
          Please confirm the name(s) of the passenger(s), travel dates and flight timings as selected by you. Name changes are not permitted once the booking is completed and after tickets are issued. Your tickets are non-refundable and non-transferable. Date and routing changes are subject to airline penalty rules and will incur change fees, fare differences and associated service fees. The total fare you agreed to pay includes taxes and fees but not the baggage fees. All passengers must check in at the airport at least 3 hours before the scheduled departure of your flights, especially for international flights, or else you will be marked as a No-Show. No-show tickets have no value.
        </p>
      </div>
  
      
      <div class="form-group outside-checkbox">
        <label>
          <input v-model="termsAccepted" type="checkbox" required />
          By clicking 'Book Now', I agree to the 
          <strong class="highlighted-text">Terms & Conditions</strong>, 
          <strong class="highlighted-text">privacy policy</strong>
        </label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        termsAccepted: false
      };
    },
    methods: {
      submitForm() {
        if (this.termsAccepted) {
          alert("Terms accepted.");
        } else {
          alert("Please accept the terms and conditions.");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Align heading to the left of the screen and reduce font size */
  .terms-heading {
    text-align: left;
    margin-left: 0;
    color: #333;
    margin-bottom: 20px; 
    font-size: 1.25rem;
  }
  
  
  .terms-container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  
  .terms-box {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .terms-box p {
    color: #333;
    font-size: 14px;
    line-height: 1.6;
  }
  
  
  .form-group.outside-checkbox {
    margin-top: 10px;
  }
  
  .form-group label {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  
  .form-group input {
    margin-right: 10px;
  }
  
  
  .highlighted-text {
    font-weight: bold;
    text-decoration: underline;
  }
  
  
  @media (max-width: 768px) {
    .terms-container {
      padding: 10px;
      max-width: 100%;
    }
    .terms-box {
      padding: 15px;
      margin-bottom: 15px;
    }
    .terms-box p {
      font-size: 13px;
    }
    .terms-heading {
      font-size: 1.1rem;
      margin-bottom: 15px;
    }
    .form-group label {
      font-size: 12px;
    }
  }
  
  @media (max-width: 480px) {
    .terms-container {
      padding: 8px;
    }
    .terms-box {
      padding: 10px;
      margin-bottom: 10px;
    }
    .terms-box p {
      font-size: 12px;
    }
    .terms-heading {
      font-size: 1rem;
    }
    .form-group label {
      font-size: 11px;
    }
  }
  </style>
  