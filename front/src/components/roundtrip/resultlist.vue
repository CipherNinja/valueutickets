<template>
  <div class="results-container">
    <div class="tab-container">
      <!-- Mobile Dropdown -->
      <div class="mobile-dropdown" v-if="isMobile">
        <button @click="toggleDropdown" class="dropdown-button">
          Sort By: {{ activeTab }}
        </button>
        <div v-if="dropdownOpen" class="dropdown-menu-list" ref="dropdownMenu">
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
          @click="selectTab(tab)"
          class="tab"
          :class="{ active: activeTab === tab }"
        >
          {{ tab }}
        </button>
      </div>
    </div>
    <div class="class-group">
      <flightcard />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, onBeforeUnmount } from "vue";
import flightcard from "./flightcard.vue";

const tabs = ["Recommended", "Cheapest", "Quickest", "Lowest Emission"];
const activeTab = ref(tabs[0]);
const isMobile = ref(false);
const dropdownOpen = ref(false);
const dropdownMenu = ref(null);

const checkScreenSize = () => {
  if (typeof window !== "undefined") {
    isMobile.value = window.innerWidth < 770;
  }
};

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (dropdownMenu.value && !dropdownMenu.value.contains(event.target)) {
    dropdownOpen.value = false;
  }
};

// Update active tab and emit event for filtering
const selectTab = (tab) => {
  activeTab.value = tab;
  dropdownOpen.value = false;
  emit("update:activeTab", tab); // Notify parent to update flight list
};

// Optimize resize event listener using debounce
let resizeTimeout;
const onResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(checkScreenSize, 200);
};

// Add event listeners
onMounted(() => {
  checkScreenSize();
  if (typeof window !== "undefined") {
    window.addEventListener("resize", onResize);
    document.addEventListener("click", handleClickOutside);
  }
});

// Remove event listeners
onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", onResize);
    document.removeEventListener("click", handleClickOutside);
  }
});
</script>

<style scoped>
/* General Styles */
.results-container {
  width: 100%;
  margin: auto;
}
.tab-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
}

/* Desktop Tabs */
.desktop-tabs {
  display: flex;
  gap: 4px;
}

.tab {
  font-size: 15px;
  font-weight: bold;
  min-width: 130px;
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
  right: 20px;
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
}

.dropdown-menu-list {
  position: absolute;
  top: 32px;
  right: 20px;
  width: 200px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 1000;
}

.class-group {
  display: flex;
  padding: 15px;
  gap: 15px;
  justify-content: center;
  width: 100%;
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
