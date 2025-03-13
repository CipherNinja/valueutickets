  <template>
    <div class="promo-container">
      <div class="promo-content">
        <h2>Upto <br /><span class="discount">$429.40 Off</span></h2>
        <p>on Domestic & <br />International Flights</p>
        <p class="terms">*T&C Apply</p>
      </div>
 <!-- Flight Image  -->
      <img src="@/assets/images/offers/flight.png" alt="Flight" class="flight-img" />
    <!-- Promo Code -->
      <div class="promo-code">
        <span>Promocode:</span> <strong>ATFLY</strong>
      </div>
    </div>
 <!-- Offer Buttons -->
    <div class="category-buttons">
      <button v-for="(option, index) in categories" :key="index" @click="selectedCategory = option" :class="{ active: selectedCategory === option }">
        {{ option }}
      </button>
    </div>

    <h3 class="category-title">Featured offers for you</h3>
  <!-- Changes Based on Selected Category -->
    <div class="offers-container">
      <div class="offers-grid">
        <div v-for="(offer, index) in filteredOffers" :key="index" class="offer-card">
          <img :src="offer.image" :alt="offer.title" class="offer-image" />
          <h3 class="offer-title">{{ offer.title }}</h3>
          <p class="offer-validity">
            <span v-if="offer.validUntil !== 'Limited Time'" class="fixed-date">
              🗓️ Valid Till: {{ offer.validUntil }}
            </span>
            <span v-else class="limited-time">⏳ Limited Time Offer</span>
          </p>
        </div>
      </div>
    </div>
  </template>

  <script>
  import { ref, computed } from "vue";
  import offer1 from "@/assets/images/offers/offer1.jpg";
  import offer2 from "@/assets/images/offers/offer2.jpg";
  import offer3 from "@/assets/images/offers/offer3.jpg";
  import offer4 from "@/assets/images/offers/offer4.jpg";
  import offer5 from "@/assets/images/offers/offer5.jpg";

  export default {
    setup() {
      const selectedCategory = ref("All");
      const categories = ["All", "Bank", "Flights", "Hotels", "Cabs"];

      const offers = ref([
      { image: offer1, title: "Flight Discount up to $200", validUntil: "2025-06-30", type: "Flights" },
      { image: offer2, title: "Bank Cashback Offer", validUntil: "Limited Time", type: "Bank" },
      { image: offer3, title: "Hotel Stay 30% Off", validUntil: "2025-07-15", type: "Hotels" },
      { image: offer4, title: "Cab Rides at 50% Off", validUntil: "Limited Time", type: "Cabs" },
      { image: offer5, title: "Buy 1 Get 1 Free on Flights", validUntil: "2025-05-20", type: "Flights" },
      { image: offer1, title: "Hotel Weekend Offer", validUntil: "2025-07-10", type: "Hotels" },
      { image: offer2, title: "Exclusive Bank Card Offer", validUntil: "Limited Time", type: "Bank" },
      { image: offer3, title: "Luxury Hotels 40% Off", validUntil: "2025-09-01", type: "Hotels" },
      { image: offer4, title: "Airport Cab Discount", validUntil: "2025-08-15", type: "Cabs" },
      { image: offer5, title: "Flat $100 Off on Flights", validUntil: "Limited Time", type: "Flights" },
      { image: offer1, title: "Bank Card EMI Offer", validUntil: "2025-06-01", type: "Bank" },
      { image: offer2, title: "Flight Flash Sale", validUntil: "Limited Time", type: "Flights" },
      { image: offer3, title: "Weekend Cab Ride Discounts", validUntil: "2025-07-20", type: "Cabs" },
      { image: offer4, title: "5-Star Hotel Special", validUntil: "2025-10-05", type: "Hotels" },
      { image: offer5, title: "Flight Deals for Students", validUntil: "Limited Time", type: "Flights" }
    ]);


      const filteredOffers = computed(() => {
        return selectedCategory.value === "All"
          ? offers.value
          : offers.value.filter((offer) => offer.type === selectedCategory.value);
      });

      return { selectedCategory, categories, filteredOffers };
    },
  };
  </script>

  <style scoped>

/* Background Image */
/* Background Image */
.promo-container {
  background: url('@/assets/images/offers/offerbackground.png') no-repeat center center;
  background-size: cover;
  padding: 50px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  position: relative;
}

/* Left Side Content */
.promo-content {
  max-width: 650px;
  
  
}

h2 {
  font-size: 50px ;
  margin: 0;
  padding: 0;
  color: #0B224D;

}

.discount {
  font-weight: bold;
  font-size: 50px;
  color: #0B224D;
}

p {
  font-size: 40px;
  margin: 20px 0;
  font-weight: bold;
  color: #182D56;
}

.terms {
  font-size: 14px;
  /* opacity: 0.5; */
  color: #62728C;
  padding: 40px 0;
}

/* Flight Image on Right */
.flight-img {
  position: absolute;
  right: 90px;
  top: 75px;
  width: 44%; /* Adjust size as needed */
}

/* Promo Code Below Flight */
.promo-code {
  background: #F7F9FB;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* Reduced for better fit */
  font-weight: 600;
  /* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); */
  position: absolute;
  right: 10%;
  top: 285px; /* Adjust to appear below the flight */
  width: 30%;
  min-height: 80px; /* More flexible than fixed height */
  /* border-radius: 8px; */
  padding: 15px;
  text-align: center;
  gap: 20px;
  color: #293C62;
}


.promo-code strong {
  font-size: 40px;
  color: #142952;
  font-weight: 700;
}

.category-buttons {
  display: flex;
  gap: 40px; /* Spacing between buttons */
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 70px;
  background-color: #F9F2F2;

}


.category-buttons button {
  /* background: #f0f0f0; */
  border: none;
  padding: 10px 40px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: bold;
  color: #333;
  border: 1px solid #BCBBBB;
  background-color: #F9F2F2;
}

.category-buttons button:hover {
  background: #dcdcdc;
}

.category-buttons .active {
  background: #007bff; /* Active button color */
  color: white;
  font-weight: bold;
}

.category-title {
  display: flex;
  margin: 0px 10%;
  font-size: 24px;
}

/* Color Box */
.color-box {
  width: 100%;
  max-width: 100%;
  height: 150px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  transition: background-color 0.5s ease-in-out;
}






/* Responsive Design */

/* Tablets (768px) */
@media (max-width: 768px) {
  .promo-container {
    padding: 30px;
    height: auto;
    margin-top: 20px;
  }

  .promo-content {
    max-width: 100%;
  }

  h2 {
    font-size: 36px;
  }

  .discount {
    font-size: 36px;
   
  }

  p {
    font-size: 28px;
  }
  .flight-img {
    width: 50%;

    right: 0;
    top: 106px;
    height: 135px;
  }

  .promo-code {
    width: 36%;
    font-size: 22px;
    top: 240px;
    right: 0;
    height: 70px;
  }
  .promo-code strong 
  {
    font-size: 28px;

  }

  .category-buttons {
    gap: 20px;
  }

  .category-buttons button {
    font-size: 16px;
    padding: 10px 20px;
  }
}

/* Mobile (480px) */
@media (max-width: 480px) {
  .promo-container {
    padding: 20px;
    /* text-align: center; */
  }

  .promo-content {
    max-width: 100%;
  }

  h2 {
    font-size: 26px;
  }

  .discount {
    font-size: 26px;
  }

  p {
    font-size: 20px;
  }

  .flight-img {
    width: 50%;
    right: auto;
    left: 75%;
    transform: translateX(-50%);
    top: 80px;
    height: 125px;
  }
  .promo-code {
    position: absolute;
    right: 0;
    top: 200px;
    width: auto; /* Adjusts based on content */
    min-height: 40px; /* Ensures proper height */
    padding: 10px 15px !important;
    margin: 0;
    font-size: 20px;
    background: #f7f9fb;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    font-weight: 500;
    gap: 0;
    
}

.promo-code strong {
    font-size: 20px;
    font-weight: bold;
    padding: 5px;
}


  .category-buttons {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .category-buttons button {
    width: 80%;
    font-size: 14px;
  }
}

/* Small Phones (325px) */
@media (max-width: 325px) {
  .promo-container {
    padding: 15px;
    height: auto;
  }

  h2 {
    font-size: 24px;
  }

  .discount {
    font-size: 24px;
  }

  p {
    font-size: 18px;
  }

  .flight-img {
    width: 60%;
    top: 80px;
  }

  .promo-code {
    width: 60%;
    font-size: 18px;
    top: 200px;
  }

  .category-buttons button {
    font-size: 12px;
    padding: 8px 15px;
  }
}

/* offer cards' css */
  .offers-container {
    padding: 20px;
    text-align: center;
  }

  .offers-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    max-width: 1200px;
    margin: 0 auto;
  }

  .offer-card {
    background: #fff;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }

  .offer-card:hover {
    transform: scale(1.05);
  }

  .offer-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
  }

  .offer-title {
    font-size: 18px;
    font-weight: bold;
    color: black;
    margin: 10px 0px;
    justify-self: left;
  }

  .offer-validity {
    font-size: 14px;
    font-weight: 500;
    margin: 3px 0px;
    justify-self: left;
  }

  .fixed-date {
    color: #333;
  }

  .limited-time {
    color: red;
    font-weight: bold;
  }
</style>