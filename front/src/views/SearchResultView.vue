<script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import Header from "../components/Header.vue";
  import FlightSearch from "../components/FlightSearch.vue";
  import Footer from "../components/Footer.vue";
  import Filter from "../components/Filter.vue";
  import FM from "../components/FM.vue";
  import resultlist from '../components/resultlist.vue';

  // Reactive state to track window width
  const windowWidth = ref(window.innerWidth);

  // Update windowWidth on resize
  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  // Watch for window resize events
  onMounted(() => {
    window.addEventListener("resize", updateWindowWidth);
  });

  // Clean up the event listener on component unmount
  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateWindowWidth);
  });
</script>

<template>
  <main>
    <Header />
    <FlightSearch />
    <!-- Conditional rendering based on screen size -->
    <div class="main-box">  
      <Filter v-if="windowWidth >770" /><FM v-else />
      <div><resultlist/></div>
    </div>
    <Footer/>
  </main>
</template>

<style scoped>
  main{  background: #F9F2F2;  }
  .main-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 20px;
    position: relative;
  }
</style>