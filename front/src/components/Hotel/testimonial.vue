<template>
  <div class="testimonial-container">
    <button @click="prevTestimonial" class="nav-button left">&#10094;</button>

    <div class="testimonial-wrapper">
      <div v-for="(testimonial, index) in visibleTestimonials" :key="index" class="testimonial-card">
        <p class="testimonial-text">{{ testimonial.text }}</p>
        <div class="testimonial-user">
          <img :src="testimonial.image" alt="User Image" class="user-image">
          <div>
            <p class="user-name">{{ testimonial.name }}</p>
            <p class="user-role">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <button @click="nextTestimonial" class="nav-button right">&#10095;</button>
  </div>
</template>

<script setup>
import uname from '@/assets/Hotel/shivam.png';
import { ref, computed } from "vue";

const testimonials = ref([
  {
      name: "Emily Davis",
      role: "Full Stack Developer",
      text: "Valueu Tickets made my business trip stress-free and seamless. Booking my hotel and transportation was so quick and easy! The professionalism and efficiency of their team are unmatched.",
      image: "https://static.smalljoys.me/2019/06/american-tourist.jpg",
  },
  {
      name: "Charles Dubois",
      role: "Frequent Traveler",
      text: "Merci beaucoup, Valueu Tickets! I had the most wonderful holiday experience. The hotel recommendations were perfect, and the entire booking process was a breeze. Truly exceptional service!",
      image: "https://st3.depositphotos.com/2146559/19063/i/450/depositphotos_190632718-stock-photo-female-hiker-standing-sunrise-seaside.jpg",
  },
  {
      name: "Giulia Bianchi",
      role: "Digital Nomad",
      text: "Grazie mille! Traveling is part of my lifestyle, and Valueu Tickets has been my go-to service. They always find me the best deals and beautiful accommodations. Highly recommended!",
      image: "https://media1.popsugar-assets.com/files/thumbor/otvIabUSCaXN9S1-Dd_oTrDewlg=/fit-in/792x446/top/filters:format_auto():upscale()/2016/02/10/008/n/1922398/5aab8979a669cfe4_unnamed-1.jpg",
  },
  {
      name: "Michael Johnson",
      role: "Adventure Enthusiast",
      text: "I couldn’t be happier with my experience. Valueu Tickets made planning my adventure so much easier, and their team went above and beyond to meet my needs. Five stars all the way!",
      image: "https://thumbs.dreamstime.com/b/senior-golfer-walking-golf-court-bag-214378746.jpg",
  },
]);

const startIndex = ref(0);

const visibleTestimonials = computed(() => {
  return testimonials.value.slice(startIndex.value, startIndex.value + 2);
});

const nextTestimonial = () => {
  if (startIndex.value + 2 < testimonials.value.length) {
    startIndex.value += 2;
  } else {
    startIndex.value = 0;
  }
};

const prevTestimonial = () => {
  if (startIndex.value > 0) {
    startIndex.value -= 2;
  } else {
    startIndex.value = Math.max(0, testimonials.value.length - 2);
  }
};

</script>

<style scoped>

.testimonial-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0F172B;
  padding: 50px;
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: auto;
}

/* Wrapper for cards */
.testimonial-wrapper {
  display: flex;
  /* gap: 20px; */
}

/* Individual testimonial card */
.testimonial-card {
  background: white;
  padding: 20px 30px;
  width: 50%;
  margin: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Testimonial text */
.testimonial-text {
  color: #000000;
  font-size: 16px;
  margin-bottom: 15px;
  font-weight: 400;
}

/* User info section */
.testimonial-user {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* User image */
.user-image {
  width: 100px;
  height: 100px;
  /* border-radius: 50%; */
}

/* User name */
.user-name {
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-left: 20px;
  margin-bottom: 0;
}

/* User role */
.user-role {
  font-size: 12px;
  color: gray;
  margin-left: 20px;
  
}

/* Navigation buttons */
.nav-button {
  position: absolute;
  background: none;
  border: none;
  font-size: 24px;
  color: orange;
  cursor: pointer;
}

.left {
  left: 10px;
  padding: 20px;
}

.right {
  right: 10px;
  padding: 20px;
}

/* ✅ Tablet (Max 768px) */
@media (max-width: 768px) {
  .testimonial-wrapper {
    flex-direction: row;
    /* align-items: center; */
    overflow-x: hidden;
    overflow-y: hidden;
    gap: 20px;
  }

  .testimonial-card {
    width: 100%;
    flex: 0 0 100%;
  
    padding: 20px;
    margin: 10px 0;
  }

  .user-image {
    width: 100px;
    height: 100px;
  }

  .user-name {
    font-size: 16px;
  }

  .testimonial-text {
    font-size: 14px;
  }
}

/* ✅ Mobile (Max 480px) */
@media (max-width: 480px) {

  .testimonial-wrapper
  {
    padding: 0;
    margin: 0;

  }
  .testimonial-card {
    width: 100%;
    flex: 0 0 100%;
   
  }

  .user-image {
    width: 60px;
    height: 60px;
  }

  .user-name {
    font-size: 16px;
  }

  .testimonial-text {
    font-size: 14px;
  }
}

/* ✅ Small Devices (Max 325px) */
@media (max-width: 325px) {
  .testimonial-card {
    width: 100%;
    flex: 0 0 100%;
    padding: 10px;
    margin: 5px 0;
  }

  .user-image {
    width: 50px;
    height: 50px;
  }

  .user-name {
    font-size: 14px;
  }

  .testimonial-text {
    font-size: 12px;
  }

  .nav-button {
    font-size: 20px;
  }
}
</style>
