<template>
  <section class="offers-section">
    <h2 class="offers-title">Exclusive Flight & Tour Offers</h2>
    <div class="offers-grid">
      <div
        v-for="(offer, index) in visibleOffers"
        :key="index"
        class="offer-card"
        @click="handleCardClick(offer)"
      >
        <img
          :src="offer.image"
          :alt="offer.altText"
          class="offer-image"
        />
        <h3 class="offer-title">{{ offer.title }}</h3>
        <p class="offer-description">{{ offer.description }}</p>
      </div>
    </div>
    <div class="expand-btn-container">
      <button class="expand-btn" @click="toggleOffers">
        {{ showAll ? 'Show Less' : 'Show More' }}
      </button>
    </div>
  </section>
</template>

<script>
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
          // title: "12% Off First Flight",
          // description: "Get 12% off your first domestic flight with ValueUTickets! Book one-way or round-trip in America now.",
          altText: "Cheap one-way flight deal with ValueUTickets - 12% off",
          image: Image12Percent,
        },
        {
          // title: "Save 12% on USA Flights",
          // description: "Book fast with ValueUTickets and save 12% on flights across the USA in just 10 minutes!",
          altText: "Affordable round-trip flights in America with ValueUTickets",
          image: ImageMMT12,
        },
        {
          // title: "$50 Cashback Offer",
          // description: "Enjoy $50 cashback on your first multicity flight booking with ValueUTickets—travel smart!",
          altText: "Multicity flight cashback deal with ValueUTickets",
          image: ImagePaytm,
        },
        {
          // title: "$100 Off Flights",
          // description: "Get $100 off your next flight with ValueUTickets! Fast 10-min booking for unbeatable deals.",
          altText: "Cheap flight discount with ValueUTickets - $100 off",
          image: ImageMMT,
        },
        {
          // title: "Cruise Deals from $299",
          // description: "Explore luxury cruises starting at $299 with ValueUTickets! Book your dream trip today.",
          altText: "Luxury cruise tour package with ValueUTickets from $299",
          image: ImageCruise,
        },
      ],
      visibleRows: 1,
      offersPerRow: 4,
      showAll: false,
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
