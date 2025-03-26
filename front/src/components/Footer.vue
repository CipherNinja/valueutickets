<template>
  <footer class="footer">
    <div class="footerimg">
      <div class="image-container">
        <img src="@/assets/logo-nobg.png" alt="logo">
      </div>
      <div class="content-container">
        <p class="footer-desc">
          
Experience the spirit of America with ValueU Tickets, your trusted partner in exploring the heart of the nation.
Proudly serving travelers with exceptional deals that reflect the American dream! 🇺🇸✈️
        </p>
      </div>
    </div>

   <!-- Footer Links Section -->
<div class="footer-columns">
  <div class="footer-column">
    <h2>Links</h2>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/booking">My Booking</a></li>
      <li><a href="/this-page-is-under-maintenamce-content-will-be-available-soon">Blogs</a></li>
      <li><a href="/this-page-is-under-maintenamce-content-will-be-available-soon">Packaging</a></li>
      <li><a href="/this-page-is-under-maintenamce-content-will-be-available-soon">Services</a></li>
    </ul>
  </div>
  <div class="vertical-bar"></div>

  <div class="footer-column">
    <h2>Offers</h2>
    <ul>
      <li><a href="/offer">Gift Card</a></li>
      <li><a href="/offer">Flights Offers</a></li>
      <li><a href="/offer">Hotels Offers</a></li>
      <li><a href="/offer">Bus Offers</a></li>
      <li><a href="/offer">Cabs Offers</a></li>
    </ul>
  </div>

  <div class="vertical-bar"></div>

  <div class="footer-column">
    <h2>Our Products</h2>
    <ul>
      <li><a href="/">Domestic Flights</a></li>
      <li><a href="/">International Flights</a></li>
      <li><a href="/">Multi-city Flights</a></li>
      <li><a href="/hotel-booking">Domestic Hotels</a></li>
      <li><a href="/hotel-booking">International Hotels</a></li>
    </ul>
  </div>

  <div class="vertical-bar"></div>

  <div class="footer-column">
    <h2>Contact Us</h2>
    <div class="footer-contact">
      <span>
        <i class="fas fa-envelope"></i>
        <a href="mailto:support123@gmail.com">support@valueutickets.com</a>
      </span>
      <span>
        <i class="fa fa-phone-alt"></i>
        <a href="tel:+1189564">+1 (833)931-6548</a>
      </span>
      <span>
        <i class="fas fa-map-marker-alt"></i>
        Travelove LLC
30 N Gould St # 36918
Sheridan, WY 82801
United State

      </span>
    </div>
  </div>
</div>


    <!-- Footer Policies and Payment Methods -->
    <div class="footer-bottom">
      <ul class="order">
        <li><a href="/terms-and-conditions#terms">Terms & Conditions</a></li>
        <li><a href="/terms-and-conditions#cancellation">Cancellation Policy</a></li>
        <li><a href="/terms-and-conditions#privacy">Privacy Policy</a></li>
      </ul>

      <div class="payment-icons">
        <img src="@/assets/footer/Amx.jpeg" alt="American Express Payment Accepted">
        <img src="@/assets/footer/visa.png" alt="Visa Payment Accepted">
        <img src="@/assets/footer/masc.jpg" alt="MasterCard Payment Accepted">
        <img src="@/assets/footer/disc.png" alt="Discover Payment Accepted">
      </div>
    </div>
  </footer>
</template>

<script>
import { useHead } from '@vueuse/head';
useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      'name': 'ValueUTickets',
      'description': 'Book cheap one-way, round-trip, and multicity flights in America with fast 10-minute booking at ValueUTickets.',
      'url': 'https://valueutickets.com',
      'telephone': '+18339316548',
      'email': 'support@valueutickets.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '30 N Gould St #36918',
        'addressLocality': 'Sheridan',
        'addressRegion': 'WY',
        'postalCode': '82801',
        'addressCountry': 'US',
      },
      'paymentAccepted': ['Visa', 'MasterCard', 'American Express', 'Discover'],
    }),
  }],
});

export default {
  name: "FooterComponent",
};
</script>

<style scoped>



/* Global Reset */
@import url(https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css);
/* Global Reset */
@import url(https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.footer {
  background: linear-gradient(180deg, #0E0099 0%, #050033 100%);
  color: white;
  padding: 15px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.footerimg {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
  width: 100%;
}

.image-container img {
  width: 100px;
  height: auto;
}

.content-container {
  flex: 1;
  font-size: 16px;
  line-height: 1.5;
  padding: 1px 100px;
  text-align: center;
}

.footer-columns {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
  padding: 0 20px;
}

.footer-column {
  max-width: 25%;
  text-align: left;
}

.vertical-bar {
  width: 1px;
  background-color: white;
}

.footer-column h2 {
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: bold;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 8px;
}

.footer-column ul li a {
  text-decoration: none;
  color: white;
  font-size: 16px;
}
.footer-column ul li a:hover {
  text-decoration: underline;
  /* background-color: black; */
  color: white; 
  /* padding: 2px 5px;  */
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease; 
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-contact span {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}

.footer-contact a {
  color: white;
  text-decoration: none;
}

.footer-contact a:hover {
  text-decoration: underline;
  /* background-color: black; */
  color: white; 
  /* padding: 2px 5px;  */
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease; 
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  padding-top: 15px;
  border-top: 1px solid white;
}

.order {
  display: flex;
  gap: 20px;
  list-style: none;
}

.order li a {
  color: white;
  text-decoration: none;
}

.order li a:hover {
  text-decoration: underline;
  /* background-color: black; */
  color: white; 
  /* padding: 2px 5px;  */
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease; 
}

.payment-icons {
  display: flex;
  gap: 10px;
  cursor: pointer;
}

.payment-icons img {
  width: 40px;
  height: auto;
  border-radius: 10px; /* Add curved edges */
  overflow: hidden; /* Ensure the curve applies properly */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.payment-icons img:hover {
  transform: scale(1.1); /* Slight hover effect */
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3); /* Glow effect */
}






/* Responsive Design */



@media screen and (max-width: 768px) {
  .footerimg {
    flex-direction: row;
    align-items: center;
  }

  .content-container {
    text-align: center;
  }

  .footer-columns {
    flex-direction: row;
    align-items: center;
    /* width: auto; */
  }



  .footer-bottom {
    flex-direction: row;
    align-items: center;
  }

  .order {
    flex-direction: row;
    text-align: center;
  }

  .payment-icons {
    justify-content: center;
    margin-top: 10px;
  }
}



/* Mobile (Small Devices) */
@media screen and (max-width: 468px) {
  .footerimg {
    flex-direction: column;
    align-items: center;
  }

  .content-container {
    text-align: center;
    padding: 0 10px;
  }

  .footer-columns {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .footer-column {
    max-width: 100%;
    text-align: center;
    margin-bottom: 15px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    gap: 5px;
  }

  .order {
    flex-direction: column;
    text-align: center;
    gap: 5px;
  }

  .payment-icons {
    justify-content: center;
    margin-top: 10px;
  }
}

/* Large Screens (Desktop) */

@media screen and (min-width: 1200px) {
  .footer-columns {
    gap: 40px;
  }

  .footer-column {
    max-width: 22%;
  }
}


</style>
