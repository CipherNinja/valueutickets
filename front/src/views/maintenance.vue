<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
//   export default {
//     name: "MaintenanceMessage",
//   };
</script>

<template>
    <Header />
    <div class="maintenance-message">
      <h1>This page is under maintenance</h1>
      <p>It will be available in a few hours. We appreciate your patience!</p>
    </div>
    <Footer />
    
</template>
  
  
  <style scoped>
  .maintenance-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    text-align: center;
    background-color: #f9f9f9;
    color: #333;
    font-family: Arial, sans-serif;
  }
  
  .maintenance-message h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .maintenance-message p {
    font-size: 1.2rem;
  }
  </style>
  