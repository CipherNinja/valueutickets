<template>
  <div class="container">
    <div class="text-section">
      <h2 class="about-title">About Us <span class="underline"></span></h2>
      <h1 class="welcome-title">Welcome to <span class="hotel-name">Hotel Name</span></h1>
      <p class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
        make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
      </p>
      <p class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
        make a type specimen book.
      </p>
      <p class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
        make a type specimen book.
      </p>
    </div>
    <div class="image-section">
      <div class="column single-image">
        <img class="imagesingle" src="@/assets/Hotel/hotel1.jpg" alt="Hotel Room" />
      </div>
      <div class="column double-image">
        <img class="image" src="@/assets/Hotel/hotel2.jpg" alt="Luxury Suite" />
        <img class="image" src="@/assets/Hotel/hotel3.jpg" alt="Beach Resort" />
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
