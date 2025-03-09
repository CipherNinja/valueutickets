<template>
  <div class="rooms-container">
    <h2 class="section-title">Recommended Stay</h2>
    <h1 class="section-subtitle">Explore our top <span class="highlight">Hotels</span></h1>

    <div class="slider-wrapper">
      <div class="slider" ref="slider">
        <div v-for="(room, index) in visibleRooms" :key="index" class="room-card">
          <img :src="room.image" :alt="room.name" class="room-image" />
          <div class="price-tag">{{ room.price }}</div>
          <div class="room-details">
            <div class="room-header">
              <h3 class="room-title">{{ room.name }}</h3>
              <div class="rating" :data-rating="room.rating"></div>
            </div>
            <div class="features">
              <span>
                <img src="@/assets/Hotel/iconbed.png" alt="Bed" class="bed-icon"> {{ room.bed }}
              </span>
              <span>
                <img src="@/assets/Hotel/iconbed.png" alt="Bath" class="bed-icon"> {{ room.bath }}
              </span>
              <span>
                <img src="@/assets/Hotel/wifiicon.png" alt="Wifi" class="bed-icon"> {{ room.wifi }}
              </span>
            </div>
            <p class="room-description">{{ room.description }}</p>
            <div class="buttons">
              <button class="view-details">View Details</button>
              <button class="book-now">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pagination">
      <span v-for="(room, index) in chunkedRooms.length" :key="index" 
            :class="{ active: currentIndex === index }">O</span>
    </div>
  </div>
</template>

<script>
import hotel1 from '@/assets/Hotel/Exploreroom1.jpg';
import hotel2 from '@/assets/Hotel/Exploreroom2.jpg';
import hotel3 from '@/assets/Hotel/hotel3.jpg';

export default {
  data() {
    return {
      rooms: [
        {
          image: hotel1,
          name: 'Super Deluxe Room',
          price: '$254 / Night',
          rating: '5',
          bed: '1 King Size Bed',
          bath: '1 Bath',
          wifi: 'Free Wifi',
          description: 'Indulge in unmatched luxury and relaxation with our Super Deluxe Room. Featuring top-class amenities and exquisite design, it promises a perfect blend of comfort and style for your stay.'
        },
        {
          image: hotel2,
          name: 'Luxury Suite',
          price: '$314 / Night',
          rating: '5',
          bed: '1 King Size Bed',
          bath: '1 Bath',
          wifi: 'Free Wifi',
          description: 'Elevate your experience with our Luxury Suite, offering premium amenities and breathtaking views. It’s the ideal choice for those seeking elegance and sophistication during their travels.'
        },
        {
          image: hotel3,
          name: 'Executive Suite',
          price: '$275 / Night',
          rating: '4',
          bed: '1 King Size Bed',
          bath: '1 Bath',
          wifi: 'Free Wifi',
          description: 'Stay in style with our Executive Suite, combining modern design and ultimate comfort. Perfect for business or leisure travelers looking for a refined and pleasant experience.'
        },
        {
          image: hotel1,
          name: 'Super Deluxe Room',
          price: '$254 / Night',
          rating: '5',
          bed: '1 King Size Bed',
          bath: '1 Bath',
          wifi: 'Free Wifi',
          description: 'Indulge in unmatched luxury and relaxation with our Super Deluxe Room. Featuring top-class amenities and exquisite design, it promises a perfect blend of comfort and style for your stay.'
        },
      ],
      currentIndex: 0,
    };
  },
  computed: {
    chunkedRooms() {
      return this.rooms.reduce((result, value, index) => {
        if (index % 3 === 0) result.push([value]);
        else result[result.length - 1].push(value);
        return result;
      }, []);
    },
    visibleRooms() {
      return this.chunkedRooms[this.currentIndex] || [];
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.chunkedRooms.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.chunkedRooms.length) % this.chunkedRooms.length;
    }
  },
  mounted() {
    setInterval(this.nextSlide, 3000); // Auto-slide every 3 seconds
  }
};
</script>


<style scoped>

.rooms-container {
  text-align: center;
  padding: 10px;
  background:#F9F2F2  ;
}

.section-title {
    text-align: center;
    font-size: 28px; 
    font-weight: 700;
    color: #EE630D;
    /* margin: 20px 0; */
    position: relative;
    display: inline-block;
    padding: 10px 20px;
}

.section-title::before,
.section-title::after {
    content: "";
    position: absolute;
    width: 50px; /* Adjust width as needed */
    height: 2px;
    background-color: #EE630D;
    top: 50%;
}

.section-title::before {
    left: -35px;
}

.section-title::after {
    right: -35px;
}


.section-subtitle {
  font-size: 32px;
  font-weight: bold;
  /* margin-top: 10px;   */
  color: #000000;
}

.highlight {
  color: #EE630D;
}

.slider-wrapper {
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
}


.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.room-card {
  width: 30%; /* Adjusted to fit 3 cards in the row */
  margin: 0 1.5%; /* Ensure proper spacing between cards */
}


.room-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.price-tag {
  background: #EE630D;
  color: #FFFFFF;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  margin-top: -15px;
  margin-left: 320px;
  border-radius: 5px;
}

.room-details {
  padding: 15px;
  text-align: left;
}

.room-header {
    display: flex;
    align-items: center;
    justify-content: space-between; 
    width: 100%;
}

.room-title {
    font-size: 28px;
    font-weight: bold;
    margin-right: 10px; /* Adds space between title and rating */
}

.rating {
    font-size: 22px;
    display: flex;
}

.rating::before {
    content: "★★★★★"; /* 5 stars */
    color:  #FEA116; 
}

.rating[data-rating="1"]::before { content: "★☆☆☆☆"; color: #FEA116; }
.rating[data-rating="2"]::before { content: "★★☆☆☆"; color: #FEA116; }
.rating[data-rating="3"]::before { content: "★★★☆☆"; color: #FEA116; }
.rating[data-rating="4"]::before { content: "★★★★☆"; color: #FEA116; }
.rating[data-rating="5"]::before { content: "★★★★★"; color: #FEA116; }


.features {
  display: flex;
  gap: 15px;
  font-size: 20px;
  margin: 8px 0;
}

.bed-icon {
    width: 30px; /* Adjust size as needed */
    height: 30px;
    margin-right: 5px; /* Space between icon and text */
    vertical-align: middle; /* Aligns the icon with text */
}


.room-description {
  font-size: 14px;
  color: #787878;
  font-weight: 400;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.view-details,
.book-now {
  padding: 10px 22px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
}

.view-details {
  background: #FEA116;
  color: #FFFFFF;
}

.book-now {
  background: #0F172B;
  color: #FFFFFF;
}

.slider-controls {
  margin-top: 20px;
}

.pagination {
    margin-top: 15px;
    display: flex;
    justify-content: center; /* Centers content horizontally */
    align-items: center; /* Aligns items vertically */
}
  
.pagination span {
    font-size: 12px;
    color: #ddd;
    margin: 0 5px;
}
  
.pagination .active {
    color: #ff7f00;
}



/* ✅ Responsive for Tablets (Max Width 768px) */
@media (max-width: 768px) {
    .room-card {
        width: 100%; /* Adjust width to fit screen */
        margin: 15px;
    }

    .room-title {
        font-size: 22px;
    }

    .rating {
        font-size: 16px;
    }

    .features {
        font-size: 16px;
        gap: 8px;
    }

    .bed-icon {
        width: 22px;
        height: 22px;
    }

    .price-tag {
        font-size: 16px;
        padding: 4px 8px;
  background: #EE630D;
  color: #FFFFFF;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  margin-top: -15px;
  margin-left: 200px;
  border-radius: 5px;
    }

    .view-details, .book-now {
        font-size: 12px;
        padding: 6px 14px;
    }

    .pagination span {
        font-size: 10px;
    }
}
/* ✅ Responsive for Mobile (Max Width 480px) */
@media (max-width: 480px) {
    .slider-wrapper {
        width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slider {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }

    .room-card {
        min-width: 100%;
        margin: 0 auto;
    }

    .room-header {
        flex-direction: column;
        align-items: start;
    }

    .section-title {
        font-size: 24px;
    }

    .room-title {
        font-size: 20px;
    }

    .rating {
        font-size: 14px;
    }

    .features {
        flex-direction: column;
        font-size: 14px;
        gap: 5px;
    }

    .bed-icon {
        width: 20px;
        height: 20px;
    }
  
    .price-tag {
        /* padding: 5px 10px; */
        font-size: 14px;
        left: 100px; 
        transform: none; 
        border-radius: 5px;
        white-space: nowrap;
        z-index: 10;
    }


    .view-details, .book-now {
        font-size: 12px;
        padding: 5px 12px;
    }

    .pagination span {
        font-size: 10px;
    }
}

@media (max-width: 375px) {

  .price-tag {
        /* padding: 5px 10px; */
        font-size: 14px;
        left: 20px; 
        transform: none; 
        border-radius: 5px;
        white-space: nowrap;
        z-index: 10;
    }
}

/* ✅ Responsive for Smaller Screens (Max Width 325px) */
@media (max-width: 325px) {
    .section-title {
        font-size: 20px;
    }

    .room-card {
        min-width: 100%;
    }

    .room-title {
        font-size: 18px;
    }

    .rating {
        font-size: 12px;
    }

    .features {
        font-size: 12px;
    }

    .bed-icon {
        width: 18px;
        height: 18px;
    }

    .price-tag {
        /* padding: 5px 10px; */
        font-size: 14px;
        left: 0px; 
        transform: none; 
        border-radius: 5px;
        white-space: nowrap;
        z-index: 10;
    }

    .view-details, .book-now {
        font-size: 10px;
        padding: 4px 8px;
    }

    .pagination span {
        font-size: 8px;
    }
}

</style>
