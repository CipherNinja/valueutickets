import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFlightStore = defineStore("flightStore", {
  state: () => ({
    flightData: []
  }),
  actions: {
    setFlightData(data) {
      this.flightData = data;
    }
  }
});
