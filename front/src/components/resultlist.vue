<template>
    <div class="tab-container">
    <!-- Mobile Dropdown -->
    <div class="mobile-dropdown" v-if="isMobile">
      <button @click="toggleDropdown" class="dropdown-button">
        Sort By: {{ activeTab }}
      </button>
      <div v-if="dropdownOpen" class="dropdown-menu">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="selectTab(tab)"
          class="tab"
          :class="{ active: activeTab === tab }"
        >
          {{ tab }}
        </button>
      </div>
    </div>

    <!-- Desktop Tabs -->
    <div class="desktop-tabs" v-else>
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        class="tab"
        :class="{ active: activeTab === tab }"
      >
        {{ tab }}
      </button>
    </div>
  </div>
  <div class="class-group">
    <flightcard />
    <flightcard />
    <flightcard />
    <flightcard />
  </div>
</template>

<script setup>
import flightcard from "./flightcard.vue";
import { ref, onMounted, onUnmounted } from "vue";

const tabs = ["Recommended", "Cheapest", "Quickest", "Lowest Emission"];
const activeTab = ref(tabs[0]);
const isMobile = ref(window.innerWidth < 770);
const dropdownOpen = ref(false);

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 770;
};

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectTab = (tab) => {
  activeTab.value = tab;
  dropdownOpen.value = false; // Close dropdown after selection
};

// Listen for screen resize
onMounted(() => {
  window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});
</script>

<style scoped>
.tab-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Desktop Tabs */
.desktop-tabs {
  display: flex;
  gap: 4px;
}

.tab {
  font-size: 15px;
  font-weight: bold;
  width: 130px;
  padding: 10px 0;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: white;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab:hover {
  background-color: #f0f0f0;
}

.active {
  background-color: #3b82f6; /* Blue */
  color: white;
  border-color: #3b82f6;
}

/* Mobile Dropdown */
.mobile-dropdown {
  position: relative;
  width: 100%;
  height: 40px;
}

.dropdown-button {
  position: absolute;
  left: 20px;
  width: 200px;
  padding: 5px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdown-button:hover {
  background-color: #f0f0f0;
  border-radius: 10px;
}

.dropdown-menu {
  position: absolute;
  padding: 0px;
  top: 32px;
  left: 20px;
  width: 200px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 1000;
}

.dropdown-menu .tab {
  width: 100%;
  text-align: center;
  border-radius: 0px;
  padding: 5px;
}
.dropdown-menu .tab:first-child {
  border-radius: 10px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}
.dropdown-menu .tab:last-child {
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
}

.class-group {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  gap: 15px;
  justify-content: center;
}

@media (max-width: 770px) {
  .desktop-tabs {
    display: none; /* Hide desktop tabs on small screens */
  }
}

@media (min-width: 770px) {
  .mobile-dropdown {
    display: none; /* Hide mobile dropdown on larger screens */
  }
}
</style>
