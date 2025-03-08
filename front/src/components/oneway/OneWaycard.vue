<template>
  
  <div class="container">

    <div class="tab-container">
    <div 
      v-for="(option, index) in options" 
      :key="index" 
      @click="selected = index"
      class="tab-item"
      :class="{ 'active': selected === index }"
    >
      <p class="tab-title">{{ option.label }}</p>
      <p class="tab-price">{{ option.price }}</p>
    </div>
  </div>


    <div v-for="(deal, index) in deals" :key="index" class="deal-card">
      <!-- Header Background -->
      <div class="deal-header" :style="{ backgroundColor: deal.bgColor }"></div>

      <!-- Title -->
    

      <!-- Flight Details -->
      <div class="deal-content">
        <div class="deal-title">
        <span class="super" :style="{ color: deal.textColor }">Super</span><br>  
        <span class="saver" :style="{ color: deal.textColor }">Saver</span>
      </div>
        <!-- Departure -->
        <div class="location" >
          <strong >New York (JFK)</strong>
          <span class="date">Mon, Feb 10</span>
        </div>

        <!-- Flight Path -->
        <div class="flight-path">
          <span class="plane">✈️</span>
          <span class="line"></span>
          <span class="dot"></span>
        </div>

        <!-- Destination -->
        <div class="location">
          <strong>Denver (DEN)</strong>
          <span class="date">Mon, Feb 10</span>
        </div>
      </div>

      <!-- Separator Line -->
      <div class="divider"></div>

      <!-- Bottom Section -->
     <!-- Bottom Section -->
<div class="deal-footer">
<!-- Left Section -->
<div class="footer-left">
  <button class="call-button" :style="{ backgroundColor: deal.buttonColor }">
    Call now: +1-888-891-****
  </button>
  <div class="price-info">
    <span class="price-text">Price Per Person</span>
    <span class="terms">(Incl. Taxes & Fees)</span>
  </div>
</div>

<!-- Right Section -->
<div class="footer-right">
  <span class="price" :style="{ color: deal.priceColor }">{{ deal.price }}</span>
  <button  @click="bookFlight(flight)" class="book-button":style="{ background: deal.buttonColorbook }">Book Now</button>
</div>
</div>

    </div>

  <div class="more">
    <p>More...</p>
  </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      selected: 0, // Default selected tab
      options: [
        { label: "Recommended", price: "$89.50" },
        { label: "Cheapest", price: "$79.50" },
        { label: "Quickest", price: "$149.10" }
      ],
   

      deals: [
        {
          bgColor: '#09C398',
          textColor: '#09C398',
          buttonColor: '#09C398',
          priceColor: '#09C398',
          price: '$98.48',
          buttonColorbook: " linear-gradient(80.8deg, #3E41EC -1.02%, #09C398 82.37%)",
         

        },
        {
          bgColor: '#F40000B5',
          textColor: '#F40000B5',
          buttonColor: '#F40000B5',
          priceColor: '#F40000B5',
          price: '$98.48',
           buttonColorbook: "linear-gradient(83.22deg, #3E41EC 23.83%, rgba(244, 0, 0, 0.38) 104.63%)",

        },
        {
          bgColor: '#BAA035',
          textColor: '#BAA035',
          buttonColor: '#BAA035',
          priceColor: '#BAA035',
          price: '$98.48',
          buttonColorbook: "linear-gradient(83.22deg, #3E41EC 23.83%, rgba(244, 0, 0, 0.38) 104.63%)",

        },
        {
          bgColor: '#09C398',
          textColor: '09C398',
          buttonColor: '#09C398',
          priceColor: '#09C398',
          price: '$98.48',
          buttonColorbook: " linear-gradient(80.8deg, #3E41EC -1.02%, #09C398 82.37%)",
         

        },
        {
          bgColor: '#F40000B5',
          textColor: '#F40000B5',
          buttonColor: '#F40000B5',
          priceColor: '#F40000B5',
          price: '$98.48',
           buttonColorbook: "linear-gradient(83.22deg, #3E41EC 23.83%, rgba(244, 0, 0, 0.38) 104.63%)",

        },

        
      ],
    };





  },
};





</script>

<style scoped>


/* Container */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  /* background-color: #f7f7f7; */
}

.tab-container {
  display: flex;
  border-radius: 10px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  overflow: hidden;
 width: 100%;
 max-width: 100%;
  margin: auto;
  gap: 10px;
}

/* Tab Item Styling */
.tab-item {
  flex: 1;
  padding: 10px 15px;
  /* text-align: center; */

  cursor: pointer;
  background-color: #FFFFFF;
  transition: all 0.3s ease;
  border-radius: 10px;
 
}

/* Active Tab */
.tab-item.active {
  background-color: #2196F3;
  color: #FFFFFF;

}

/* Text Styling */
.tab-title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
}

.tab-price {
  margin: 5px 0 0;
  font-size: 20px;
  color: #000000;
  font-weight: 500;
}

/* Active Tab Price Color */
.tab-item.active .tab-price {
  color: #FFFFFF;
}






/* Card */
.deal-card {
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: white; 
  /* padding: 20px; */
}

/* Header */
.deal-header {
  height: 40px;
  border-radius: 10px 10px 0 0;
  padding: 0 !important;
}

/* Title */
.deal-title {
  color: #555;
font-size: 14px;
font-weight: bold;
margin-bottom: 10px;
}



.saver {
  font-size: 24px;
  font-weight: bold;
}

/* Flight Information */
.deal-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;

}

.location {
  display: flex;
  flex-direction: column;
  /* text-align: center; */
  justify-content: space-between;
}

.location strong {
  font-size: 16px;
}

.date {
  color: #777;
  font-size: 14px;
}

/* Flight Path */
.flight-path {
  display: flex;
  align-items: center;
  justify-content: center;
}

.plane {
  font-size: 20px;
}

.line {
width: 150px;
height: 2px;
border-top: 2px dashed black;
margin: 0 5px;
}


.dot {
  width: 8px;
  height: 8px;
  background-color: blue;
  border-radius: 50%;
}

/* Separator Line */
.divider {
  height: 1px;
  background-color: #ddd;
  /* margin: 10px 0; */
}

/* Footer */
.deal-footer {
display: flex;
justify-content: space-between; /* Space between left and right sections */
align-items: center;
padding: 20px;
width: 100%;
}

/* Group left and right sections */
.footer-left,
.footer-right {
display: flex;
align-items: center;
gap: 15px; /* Adjust spacing between elements */
}


.call-button
{

padding: 8px 12px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

}

/* Align Price Info properly */
.price-info {
text-align: center; /* Keep text centered */
display: flex;
flex-direction: column; /* Stack elements vertically */
align-items: start;
}


.price-text {
  font-size: 12px;
  color: black;
}

.terms {
  font-size: 10px;
  color: #6D6D6D;
}

.price {
  font-size: 22px;
  font-weight: bold;
}

.book-button {
  padding: 8px 12px;
  /* background-color: #3498db; */
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}




.more p {
 


font-family: Inter;
font-weight: 600;
font-size: 20px;
line-height: 24.2px;
letter-spacing: 5%;
text-align: center;
text-decoration: underline;
text-decoration-style: solid;
text-decoration-thickness: Auto;
text-decoration-skip-ink: auto;
cursor: pointer;

}

/* Responsive Styles */
@media (max-width: 768px) {
  .deal-content {
    flex-direction: row;
    align-items: center;
    text-align: center;
  }
.tab-container
{
  padding: auto;

}

.tab-title,.tab-price 
{
  font-size: 16px;
}
 

  .flight-path {
    flex-direction: row;
    gap: 5px;
  }

  .line {
    width: 100px;
  }

  .deal-footer {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
}
@media (max-width: 480px) {
  .tab-container
  {
    flex-direction: column;
  }

  .tab-title,.tab-price 
{
  font-size: 16px;
  margin: 0;
}
 
 

  .deal-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  
  }



  .deal-title {
    font-size: 12px;
  }

  .location strong {
    font-size: 14px;
  }

  .plane {
    font-size: 18px;
  }

  .line {
    width: 80px;
  }

  .deal-footer {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .price {
    font-size: 20px;
  }
  .more {
    font-size: 12px;
  }
}

@media (max-width: 325px) {

  .tab-container
  {
    flex-direction: column;
  }

  .tab-title,.tab-price 
{
  font-size: 16px;
  margin: 0;
}
 

  .deal-title {
    font-size: 10px;
  }

  .location strong {
    font-size: 12px;
  }

  .plane {
    font-size: 16px;
  }

  .line {
    width: 60px;
  }

  .deal-footer {
    flex-direction: column;
    gap: 8px;
  }

  .price {
    font-size: 18px;
  }

  .call-button,
  .book-button {
    font-size: 12px;
    /* padding: 4px 8px;  */
    padding:auto;
  }

  .more {
    font-size: 10px;
  }
}



</style>
