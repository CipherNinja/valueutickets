<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Header from "../components/Header.vue";
import FlightSearch from "../components/FlightSearchResults.vue";
import Footer from "../components/Footer.vue";
import Filter from "../components/Filter.vue";
import FM from "../components/FM.vue";

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
    <Filter v-if="windowWidth > 768" />
    <FM v-else />

    <Footer />
  </main>
</template>

<style scoped>
main {
  background: #f9f2f2;
}
</style>

<style scoped>
main {
  background: #f9f2f2;
}
</style>
