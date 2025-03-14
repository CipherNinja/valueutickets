<template>
  <h2 class="offers-title">Exclusive Offers</h2>
  <div class="offers-grid">
    <div
      v-for="(offer, index) in visibleOffers"
      :key="index"
      class="offer-card"
      @click="handleCardClick(offer)"
    >
      <img :src="offer.image" :alt="offer.description" class="offer-image" />
      <!-- <div class="offer-content">
        <p class="offer-description">{{ offer.description }}</p>
      </div> -->
    </div>
  </div>
  <div class="expand-btn-container">
    <button class="expand-btn" @click="toggleOffers">
      {{ showAll ? 'Show Less' : 'Show More' }}
    </button>
  </div>
</template>

<script>
// Importing images dynamically
import Image12Percent from '@/assets/images/offers/1.png';
import ImageMMT12 from '@/assets/images/offers/images (2).png';
import ImagePaytm from '@/assets/images/offers/3.png';
import ImageMMT from '@/assets/images/offers/4.png';
import ImageCruise from '@/assets/images/cruise.jpg';

export default {
  name: "Offers",
  data() {
    return {
      offers: [
        {
          // description: "*Get 12% off on your first domestic flight booking with ValueU Tickets! Book now and save big on your travel.",
          image: Image12Percent,
        },
        {
          // description: "*Your first flight just got more affordable! Book now and save up to 12% on flights across the USA.",
          image: ImageMMT12,
        },
        {
          // description: "*Enjoy $50 cashback when you book your first flight with ValueU Tickets! Travel smart and save more.",
          image: ImagePaytm,
        },
        {
          // description: "*Book now and get $100 off on your flight! Exclusive deal only on ValueU Tickets—don't miss out.",
          image: ImageMMT,
        },
        {
          // description: "Exclusive Deals Await! Experience the ultimate sea voyage with luxury cruise deals starting at just $299! Book today for an unforgettable journey.",
          image: ImageCruise,
        },
      ],
      visibleRows: 1, // Number of rows initially visible
      offersPerRow: 4, // Number of offers per row
      showAll: false, // To toggle between show more and show less
    };
  },
  computed: {
    visibleOffers() {
      return this.showAll
        ? this.offers
        : this.offers.slice(0, this.visibleRows * this.offersPerRow);
    },
  },
  methods: {
    toggleOffers() {
      this.showAll = !this.showAll;
    },
    handleCardClick(offer) {
      this.$router.push('/offer');
    },
  },
};
</script>

<style scoped>
.offers-title {
  text-align: center;
  font-size: 24px;
  color: #000;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
}

.offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-left: 20px;
  margin-right: 20px;
}

.offer-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 200px; /* Increase the height for better visibility */
  display: flex;
  align-items: center;
  justify-content: center;
}

.offer-image {
  width: 100%;
  height: 100%;
  /* object-fit: contain; Ensure the entire image fits within the box */
}

.offer-content {
  padding: 15px;
}

.offer-description {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.expand-btn-container {
  text-align: center;
  margin-top: 20px;
}

.expand-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.expand-btn:hover {
  background-color: #0056b3;
}
</style>
