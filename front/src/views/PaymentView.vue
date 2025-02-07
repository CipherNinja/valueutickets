<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import PremiumSupport from '../components/PremiumSupp.vue'
import BookingNumSMS from '../components/BookingNumSMS.vue'
import Review_Itinerary from '../components/Review_Itinerary.vue'
import WhosFlying from '../components/WhosFlying.vue'
import TravelProtection from '../components/TravelProtection.vue'
import lost_cancel from '../components/lost_baggage_and_extended_cancellation.vue'
import Bill_Pay from '../components/Billing_payment.vue'
import T_C from '../components/Terms_condition.vue'
</script>

<template>
  <main>
    <Header />
    <div class="header-bar">
      <span href="#" class="text">&#60;&nbsp;Back</span>
      <div class="task-group">
        <div class="task">  
          <span class="number">&#9312;
            <span class="tick">&#9989;</span>
          </span>
          <span class="task-text">Ticket Selection</span>
        </div>
        <div class="dash"></div>
        <div class="task">
          <span class="number">&#9313;</span>
          <span class="task-text">Payment</span>
        </div>
        <div class="dash"></div>
        <div class="task">
          <span class="number">&#9314;</span>
          <span class="task-text">Confirmation</span>
        </div>
      </div>  
    </div>
    <Review_Itinerary/>
    <WhosFlying/>
    <TravelProtection/>
    <lost_cancel/>
    <PremiumSupport/>
    <BookingNumSMS/>
    <Bill_Pay/>
    <T_C/>
    <Footer/>
</main>
</template>

<style scoped>

main{  background: #EAF3F2;  }

.header-bar{
  display: flex;
  flex-direction: row;
  height: 100px;
  border-radius: 20px;
  color: white;
  align-items: center;
  background-color: #4B4DC8;
  margin: 7px;
  margin-top: 14px;
  font-size: 20px;
  padding: 6px;
}
.header-bar .text{
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  margin-right: 5%;
}
.task-group{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.task{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: large;
  margin: 0px;
}
.number{
  position: relative;
  font-size: 40px;
  font-weight: 50 ;
}
.tick{
  position: absolute;
  top: 5px;
  left: -5px;
  font-size: 34px;
}
.task-text{
  font-size: 16px;
  font-weight: bold;
}
.dash{
  align-items: center;
  align-self: center;
  width: 37%;
  height: 2px;
  background-color: white;
  margin-top: 0px;
}
</style>
