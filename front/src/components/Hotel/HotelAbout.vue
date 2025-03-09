<template>
  <div class="container">
    <div class="text-section">
      <h2 class="about-title">About Us <span class="underline"></span></h2>
      <h1 class="welcome-title">Welcome to <span class="hotel-name">Valueu Tickets</span></h1>
      <p class="description">
        Valueu Tickets is your trusted travel partner, offering seamless solutions for hotel bookings, flight tickets, tour packages, cab services, and more. While we don't own hotels, we specialize in securing value-packed accommodations tailored to your preferences at unbeatable prices. Choose your destination and enjoy stunning views as per your desires.
      </p>
      <p class="description">
        Booking with us is not just fast but superfast. We ensure your stay is arranged in no time, making the process effortless and enjoyable. Whether it's a quick getaway or a long holiday, we’ve got you covered with swift, hassle-free services designed to save your time and effort.
      </p>
      <p class="description">
        Our professional travel consultants are dedicated to delivering exceptional service. They work tirelessly to match your preferences with the perfect hotel, ensuring every detail is addressed. Your satisfaction is our priority, and we go above and beyond to make your experience extraordinary.
      </p>

    </div>
    <div class="image-section">
      <div class="column single-image">
        <img class="imagesingle" src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2017/05/luxury-holiday-vacation-the-residence-resort-the-maldives-relax-MAIN-IMAGE.gif" alt="Hotel Room" />
      </div>
      <div class="column double-image">
        <img class="image" src="https://c.tenor.com/lpFu40hToiwAAAAC/thai-food.gif" alt="Luxury Suite" />
        <img class="image" src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/92/2024/04/05073129/Website-GIF-40.gif" alt="Beach Resort" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutHotel"
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 40px; 
  background-color: #F9F2F2;
  max-width: 100%;
}

.text-section {
  width: 65%;
}

.about-title {
  color: #EE630D;
  font-size: 44px;
  font-weight: bold;
  font-weight: 700;
}

.underline {
  display: inline-block;
  width: 50px;
  border-bottom: 2px solid #ff7f00;
 margin-bottom: 5px;
 height: 4px;
}

.welcome-title {
  font-size: 50px;
  font-weight: bold;
  margin-top: 10px;
  font-weight: 700;
}

.hotel-name {
  color: #EE630D;
  font-size: 38px;
  font-weight: 700;
}

.description {
  color: #6D6D6D;
  margin-top: 10px;
  /* line-height: 1.6; */
  font-size: 22px;
  font-weight: 400;
}

.image-section {
  display: flex;
  gap: 10px;
  width: 40%;
}

.column {
  /* display: flex; */
  flex-direction: column;
  flex: 1;
}

.single-image {
  flex: 1;
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.imagesingle
{

  width: 100%;
  max-width: 500px; 
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* height: 70%;  */

}



.double-image {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  /* background-color: aqua; */
  justify-content: center; 
  align-items: center; 
}

.image {
  width: 100%;
  border-radius: 10px;
  max-width: 500px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 70%;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    /* text-align: center; */
    padding: 20px;
    margin: 10px;
  }
  .text-section, .image-section {
    width: 100%;
  }
  .image-section {
    flex-direction: row;
  }
  .about-title {
    font-size: 36px;
  }
  .welcome-title {
    font-size: 40px;
  }
  .hotel-name {
    font-size: 32px;
  }
  .description {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .about-title {
    font-size: 28px;
  }
  .welcome-title {
    font-size: 32px;
  }
  .hotel-name {
    font-size: 26px;
  }
  .description {
    font-size: 16px;
  }
  .container {
    padding: 15px;
  }
}

@media (max-width: 325px) {
  .about-title {
    font-size: 24px;
  }
  .welcome-title {
    font-size: 28px;
  }
  .hotel-name {
    font-size: 22px;
  }
  .description {
    font-size: 14px;
  }
  .container {
    padding: 10px;
  }
}
</style>
