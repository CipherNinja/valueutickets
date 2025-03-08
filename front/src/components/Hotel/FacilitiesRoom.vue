<template>
  <div class="container">
    <!-- Room Categories -->
    <div class="section">
      <h2>Room Categories</h2>
      <ul>
        <li>Super Deluxe Room: 6 rooms, featuring luxury and comfort with private balcony views.</li>
        <li>Executive Suite: 16 rooms, offering spacious layouts for business or leisure stays with all premium amenities.</li>
      </ul>
    </div>

    <!-- Room Facilities -->
    <div class="section">
      <h2>Room Facilities</h2>
      <ul>
        <li>Android TV, 24/7 hot water</li>
        <li>Bathroom essentials, tea & coffee kit, electric kettle, slippers</li>
        <li>Heater & hair dryer (on demand)</li>
        <li>Sofa, chairs, and table for balcony</li>
      </ul>
    </div>

    <!-- Promotional Section -->
    <div class="promo-section">
      <div class="promo-content">
        <h3>LUXURY LIVING</h3>
        <h2>Discover A Brand Luxurious Hotel</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, necessitatibus dolor dignissimos doloremque, qui praesentium perferendis ium. Esse, beatae corporis vitae quibusdam ab obcaecati id incidunt iusto, error, voluptatibus laudantium vero aspernatur quisquam magnam deleniti repellat.</p>
        <div class="buttons">
          <button class="btn-orange">Our Room</button>
          <button class="btn-white">Book A Room</button>
        </div>
      </div>
      <div class="promo-image">
        <img src="@/assets/Hotel/hotel1.jpg" alt="Luxury Hotel Room">
        <button class="play-button">▶</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelInfoSection"
};
</script>

<style scoped>
.container {
  /* background: red; */
  padding: 20px 50px;
  max-width: 98%;
  width: 100%;
  margin: 20px;
}
.section {
  margin-bottom: 20px;
}
.section h2 {
  font-size: 32px;
  font-weight: 600;
}
.section ul {
  list-style-type: disc;
  margin-left: -15px;
  color: #787878;
  font-size: 20px;
}

.promo-section {
  display: flex;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: auto;
  min-height: 100px;
  align-items: stretch;
}

.promo-content {
  width: 50%;
  padding: 40px;
  background: rgb(1, 1, 50);
  color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}

.promo-content h3 {
  font-size: 18px;
  font-weight: bold;
}

.promo-content h2 {
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
}

.promo-content p {
  color: #ccc;
  margin-top: 10px;
}

.buttons {
  margin-top: 20px;
}

.btn-orange {
  background: orange;
  color: black;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.btn-white {
  background: white;
  color: black;
  padding: 10px 20px;
  border: 1px solid black;
  cursor: pointer;
  font-weight: bold;
  margin-left: 10px;
}
.promo-image {
  width: 50%;
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
}

.promo-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container without distortion */
}


.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: orange;
  padding: 20px;
  border-radius: 50%;
  color: black;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}


/* 🔹 RESPONSIVE DESIGN */

/* For Tablets (max-width: 768px) */
@media (max-width: 768px) {
  .container {
    padding: 15px;
    margin: 0;
  }

  .section h2 {
    font-size: 28px;
  }

  .section ul {
    font-size: 18px;
  }

  .promo-section {
    flex-direction: column;
    align-items: center;
    /* text-align: center; */
  }

  .promo-content,
  .promo-image {
    width: 100%;
    padding: 20px;

  }

  .promo-image {
    height: 250px;
    padding: 0;
  }
}

/* For Mobile Screens (max-width: 480px) */
@media (max-width: 480px) {
  .container {
    padding: 20px;
    margin: 0;
  }

  .section h2 {
    font-size: 24px;
  }

  .section ul {
    font-size: 16px;
  }


  .promo-section {
    flex-direction: column;
    /* align-items: center; */
    /* text-align: center; */
  }

  .promo-content,
  .promo-image {
    width: 100%;
    padding: 0;

  }


  .promo-content {
    padding: 15px;
  }

  .promo-content h2 {
    font-size: 22px;
  }

  .promo-image {
    height: 200px;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .btn-white {
    margin-left: 0;
  }
}

/* For Smallest Screens (max-width: 325px) */
@media (max-width: 325px) {
  .container {
    padding: 15px;
  }

  .section h2 {
    font-size: 20px;
  }

  .promo-content {
    padding: 10px;
  }

  .promo-content h2 {
    font-size: 18px;
  }

  .promo-image {
    height: 180px;
  }

  .play-button {
    padding: 15px;
    font-size: 16px;
  }

  .buttons {
    flex-direction: column;
  }

  .btn-orange,
  .btn-white {
    padding: 8px 15px;
    font-size: 14px;
  }
}
</style>
