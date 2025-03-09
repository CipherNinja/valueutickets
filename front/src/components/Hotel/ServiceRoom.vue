<template>
  <section class="services-section">
    <div class="services-header">
      <h2>Our Services</h2>
      <h1>Explore our <span>Services</span></h1>
    </div>
    <div class="services-grid">
      <div v-for="service in services" :key="service.id" class="service-card">
        <div class="icon-container">
          <img :src="service.icon" alt="service-icon" />
        </div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div> 
    </div>
  </section>
</template>

<script>
import hotelIcon from '@/assets/Hotel/hotel.png';
import FoodRestaurant from '@/assets/Hotel/FoodRestaurant.png';
import OutdoorGames from '@/assets/Hotel/OutdoorGames.png';
import DropService from '@/assets/Hotel/DropService.png';
import Transportation from '@/assets/Hotel/Transportation.png';
import BonfireDJNight from '@/assets/Hotel/BonfireDJNight.png';
import WildLife from '@/assets/Hotel/wildlife.png';
import earth from '@/assets/Hotel/earth.jpg'
export default {
  data() {
    return {
      services: [
        { 
          id: 1, 
          title: 'Hotel', 
          icon: hotelIcon, 
          description: 'Experience unmatched comfort and luxury with our handpicked hotels. From cozy stays to premium rooms, we ensure your accommodation meets every expectation at great value.' 
        },
        { 
          id: 2, 
          title: 'Food & Restaurant', 
          icon: FoodRestaurant, 
          description: 'Savor delicious dishes from around the world! Indulge in a variety of cuisines crafted to delight your taste buds at our partner restaurants.' 
        },
        { 
          id: 3, 
          title: 'Outdoor Games', 
          icon: OutdoorGames, 
          description: 'Dive into adventure with thrilling outdoor games and sports. Perfect for those looking to add fun and excitement to their travels.' 
        },
        { 
          id: 4, 
          title: 'Drop Service', 
          icon: DropService, 
          description: 'Enjoy hassle-free and reliable drop services that make your travel convenient and stress-free. We ensure you reach your destination smoothly.' 
        },
        { 
          id: 5, 
          title: 'Transportation', 
          icon: Transportation, 
          description: 'Travel safely and comfortably with our reliable transportation options. From pickups to sightseeing, we’ve got your journey covered.' 
        },
        { 
          id: 6, 
          title: 'Bonfire & DJ Night', 
          icon: BonfireDJNight, 
          description: 'Create unforgettable memories with exciting bonfire nights accompanied by great music. Perfect for fun-filled evenings under the stars.' 
        },
        { 
          id: 7, 
          title: 'Close to Earth Experience', 
          icon: earth, 
          description: 'Reconnect with nature through our eco-friendly stays and experiences. Enjoy the serenity of simple living, surrounded by breathtaking landscapes that let you feel grounded and inspired.' 
      },
      { 
          id: 8, 
          title: 'Near Wildlife Experience', 
          icon: WildLife, 
          description: 'Embark on unforgettable wildlife adventures! From thrilling safaris to serene nature trails, immerse yourself in the beauty and wonder of animals in their natural habitats.' 
      }
      ]
    };
  }
};
</script>

<style scoped>

/* Default Styles */
.services-section {
  background-color: #F9F2F2;
  padding: 40px 20px;
  text-align: center;
  max-width: 100%;
}

/* Header */
.services-header {
  text-align: center;
  position: relative;
}

.services-header h2 {
  font-size: 22px;
  font-weight: 700;
  color: #EE630D;
  display: inline-block;
  position: relative;
  padding: 10px 20px;
}

.services-header h2::before,
.services-header h2::after {
  content: "";
  position: absolute;
  width: 50px;
  height: 2px;
  background-color: #EE630D;
  top: 50%;
}

.services-header h2::before {
  left: -40px;
}

.services-header h2::after {
  right: -40px;
}

/* Grid Container */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: 100%;
  margin: auto;
  padding: 40px;
}

/* Service Card */
.service-card {
  background: #F9F2F2;
  padding: 20px;
  text-align: center;
  border: 1px solid #CBCACA;
}

/* Icon Styling */
.icon-container img {
  width: 60px;
  height: 60px;
  padding: 5px;
  margin-bottom: 15px;
  border: 2px solid #FEA116;
  box-sizing: border-box;
}

/* Text Styling */
h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

p {
  color: #666;
  font-size: 1rem;
  margin-top: 5px;
}

/* Responsive Design */

/* ✅ Tablet (Max 768px) */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .services-header h2 {
    font-size: 20px;
  }

  .service-card {
    padding: 15px;
  }

  h3 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.9rem;
  }
}

/* ✅ Mobile (Max 480px) */
@media (max-width: 480px) {
  .services-grid {
    grid-template-columns: 1fr;
    padding: 15px;
  }

  .services-header h2 {
    font-size: 18px;
  }

  .service-card {
    padding: 12px;
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
  }
}

/* ✅ Small Mobile (Max 325px) */
@media (max-width: 325px) {
  .services-grid {
    padding: 10px;
  }

  .services-header h2 {
    font-size: 16px;
  }

  .service-card {
    padding: 10px;
  }

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 0.85rem;
  }

  .icon-container img {
    width: 50px;
    height: 50px;
  }
}

</style>
	