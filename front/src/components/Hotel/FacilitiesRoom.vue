<template>
  <div class="container">
    <!-- Room Categories -->
    <div class="section">
      <h2>Discover the World's Most Unique Stays</h2>
      <ul>
        <li>Beachfront Resorts: Luxurious stays with stunning ocean views in Thailand and Cancun.</li>
        <li>Safari Lodges: Immerse yourself in the wild beauty of Masai Mara's premium safari accommodations.</li>
        <li>Flooded Villas: Unique and romantic stays in the waterways of Venice.</li>
        <li>Urban Luxury Hotels: Sophisticated stays with cityscapes in America and Dubai.</li>
      </ul>
    </div>


    <!-- Room Facilities -->
    <div class="section">
      <h2>Elevated Comfort with Exceptional Amenities</h2>
      <ul>
        <li>Stay entertained with an Android TV and enjoy the convenience of 24/7 hot water.</li>
        <li>Refresh with our fully stocked bathroom essentials, tea & coffee kit, and electric kettle, all designed for your ease and comfort. Complimentary slippers included.</li>
        <li>Keep cozy with a heater and a hairdryer, available on demand to cater to all your needs.</li>
        <li>Unwind in style with a cozy sofa, elegant chairs, and a table, perfect for enjoying your balcony views.</li>
      </ul>
    </div>

    <div class="promo-section">
      <div class="promo-content">
        <h3>EXPERTLY CURATED STAYS</h3>
        <h2>Your Trusted Travel Partners</h2>
        <p>We specialize in crafting unforgettable travel experiences. From arranging luxurious hotels and scenic resorts to planning your dream stay in destinations like Thailand, Masai Mara, America, Cancun, Venice, and Dubai, our team of professional consultants ensures every detail meets your preferences. Let us help you create moments you'll cherish forever.</p>
        <div class="buttons">
          <a href="/hotel-booking#search-hotel"><button class="btn-orange">Plan Your Trip</button></a>
          <a href="/contact-us"><button class="btn-white">Contact Us</button></a>
        </div>
      </div>
      <div class="promo-image">
        <img src="@/assets/Hotel/hotel3.jpg" alt="Luxury Hotel Room">
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
