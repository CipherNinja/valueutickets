<template>
    <div id="terms" class="terms-container">
      <h1 class="terms-heading">Terms and Conditions</h1>
      <p class="terms-intro">
        Please review the following Terms and Conditions carefully. They govern your use of our platform and services.
      </p>
  
      <!-- Section 1: Refunds and Future Credits -->
      <div class="terms-section">
        <h2 class="section-heading">1. Refunds and Future Credits</h2>
        <p class="section-content">
          Refunds and credits are subject to the respective airline's fare rules, policies, and procedures. Below are the key guidelines:
        </p>
        <ul class="section-list">
          <li>Refunds are only applicable for refundable tickets; penalties may apply as per airline policies.</li>
          <li>"No-show" tickets are non-eligible for refunds or credits.</li>
          <li>Refund requests may take up to 60–90 days for processing after airline approval.</li>
          <li>Service fees and taxes are non-refundable unless stated otherwise.</li>
        </ul>
      </div>
  
      <!-- Section 2: Cancellations -->
      <div id="cancellation" class="terms-section">
        <h2 class="section-heading">2. Cancellations</h2>
        <p class="section-content">
          We understand plans can change. To cancel your booking, please refer to the following policies:
        </p>
        <ul class="section-list">
          <li>All cancellations must be submitted via email to <a href="mailto:customerservice@valueutickets.com">customerservice@valueutickets.com</a>.</li>
          <li>Low-Cost Carriers (LCC) tickets are non-refundable, even within 24 hours of booking.</li>
          <li>Cancellations for "no-shows" are not eligible for refunds.</li>
          <li>Cancellation fees may be imposed by the airline as per fare rules.</li>
        </ul>
      </div>
  
      <!-- Section 3: Booking Information -->
      <div class="terms-section">
        <h2 class="section-heading">3. Booking Information</h2>
        <p class="section-content">
          Booking with us is simple and secure. Please note the following guidelines:
        </p>
        <ul class="section-list">
          <li>All tickets are non-refundable, non-transferable, and non-changeable unless specified by the airline.</li>
          <li>Payment is processed only after billing verification and authorization from the cardholder.</li>
          <li>E-tickets and airline confirmation are sent after payment verification.</li>
          <li>Confirm the status of your flight at least 24–48 hours before departure.</li>
        </ul>
      </div>
  
      <!-- Section 4: Travel Documentation -->
      <div class="terms-section">
        <h2 class="section-heading">4. Travel Documentation</h2>
        <p class="section-content">
          To ensure a smooth travel experience, the following documentation guidelines apply:
        </p>
        <ul class="section-list">
          <li>Passengers are responsible for having valid passports, visas, and any other required travel documents.</li>
          <li>All travel documents must be presented at the time of travel.</li>
          <li>ValueuTickets is not liable for any disruptions caused by insufficient documentation.</li>
        </ul>
      </div>
  
      <!-- Section 5: No-Show Policy -->
      <div class="terms-section">
        <h2 class="section-heading">5. No-Show Policy</h2>
        <p class="section-content">
          In the event of a "no-show," the following conditions apply:
        </p>
        <ul class="section-list">
          <li>"No-show" tickets are non-refundable and no credits will be issued.</li>
          <li>It is your responsibility to arrive at the airport with sufficient time for check-in and security procedures.</li>
        </ul>
      </div>
  
      <!-- Section 6: Contact Information -->
      <div class="terms-section">
        <h2 class="section-heading">6. Contact Information</h2>
        <p class="section-content">
          For any queries or support requests regarding the Terms and Conditions, please contact us:
        </p>
        <ul class="section-list">
          <li>Email: <a href="mailto:customerservice@valueutickets.com">customerservice@valueutickets.com</a></li>
          <li>Phone: +1 (833)931-6548</li>
        </ul>
      </div>

      <!-- Section 5: Privacy Policy -->
    <div id="privacy" class="terms-section">
      <h2 class="section-heading">5. Privacy Policy</h2>
      <p class="section-content">
        Your privacy is important to us. Please review the following privacy guidelines:
      </p>
      <ul class="section-list">
        <li>We collect personal information, including name, email, and payment details, for booking purposes.</li>
        <li>Your information is securely stored and used solely to process your transactions and improve our services.</li>
        <li>We do not share your personal information with third parties without your consent, except as required by law.</li>
        <li>Cookies are used on our website to enhance the user experience. You can disable them through your browser settings.</li>
        <li>For more information, contact us at <a href="mailto:customerservice@valueutickets.com">customerservice@valueutickets.com</a>.</li>
      </ul>
    </div>
  
      <!-- Close Terms Button -->
      <!-- <button class="close-btn" @click="closeTerms">Close Terms and Conditions</button> -->
    </div>
  </template>
<style scoped>
/* Container for Terms and Conditions */
.terms-container {
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background: linear-gradient(145deg, #ffffff, #f2f2f2);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Heading Styles */
.terms-heading {
  font-size: 2.5rem;
  color: #2a4d69;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: bold;
}

/* Introductory Paragraph */
.terms-intro {
  font-size: 1.2rem;
  color: #4a4a4a;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.6;
}

/* Section Container */
.terms-section {
  margin-bottom: 25px;
  padding: 15px;
  background: #f8fbff;
  border-left: 6px solid #1976d2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

/* Section Headings */
.section-heading {
  font-size: 1.8rem;
  color: #1e88e5;
  margin-bottom: 10px;
  font-weight: bold;
  text-transform: capitalize;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

/* Section Content */
.section-content {
  font-size: 1.1rem;
  color: #4f4f4f;
  line-height: 1.8;
  margin-bottom: 15px;
}

/* List Styles */
.section-list {
  list-style-type: disc;
  padding-left: 25px;
}

.section-list li {
  font-size: 1rem;
  color: #333333;
  margin-bottom: 10px;
}

/* Links */
a {
  color: #0077cc;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
  color: #005fa3;
}

/* Button (Uncomment if needed) */
button {
  display: block;
  margin: 20px auto;
  padding: 12px 30px;
  font-size: 1.2rem;
  color: white;
  background: linear-gradient(90deg, #ff9800, #f44336);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

button:hover {
  background: linear-gradient(90deg, #f44336, #ff9800);
  transform: scale(1.05);
}

/* General Responsiveness */
@media (max-width: 768px) {
  .terms-heading {
    font-size: 2rem;
  }

  .section-heading {
    font-size: 1.5rem;
  }

  .terms-intro {
    font-size: 1rem;
  }
}
</style>
