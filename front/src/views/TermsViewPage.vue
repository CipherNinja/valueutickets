<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import TC from '../components/Terms&Conditions/T&C.vue';
</script>

<template>
  <div class="page-container">
    <Header />
    <main class="main-container">
      <TC />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
/* Full-page container setup */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the page takes up the full viewport */
  width: 100%; /* Makes sure the container spans the entire screen width */
}

/* Main container adjustments */
main {
  flex-grow: 1;
  padding: 0; /* Remove padding to let the component span full width */
  margin: 0; /* Remove margins */
  width: 100%; /* Ensures the main container takes full width */
  box-sizing: border-box; /* Include padding/border in the element's total width and height */
}

/* Header and footer alignment */
header, footer {
  width: 100%; /* Ensure header and footer are full-width */
  z-index: 10;
}
</style>
