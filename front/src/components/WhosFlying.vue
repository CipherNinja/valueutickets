<script setup>
import { ref, onMounted } from "vue";
import { useFlightStore } from "@/stores/flightStore";
import { usePostDataStore } from "@/stores/postDataStore";

const postDataStore = usePostDataStore();
const flightStore = useFlightStore();

const passengers = ref([]);

onMounted(() => {
  passengers.value = generatePassengers();
});

const generatePassengers = () => {
  const types = [];
  for (let i = 0; i < postDataStore.postdata?.adults; i++) types.push({ type: "Adult" });
  for (let i = 0; i < postDataStore.postdata?.children; i++) types.push({ type: "Child" });
  for (let i = 0; i < postDataStore.postdata?.infants; i++) types.push({ type: "Infant" });

  return types.map((passenger) => ({
    type: passenger.type,
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
  }));
};

// Helper function to calculate date limits
const getDateLimit = (type) => {
  const today = new Date();
  let minDate, maxDate;

  if (type === "Adult") {
    maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()).toISOString().split("T")[0];
    minDate = "1900-01-01"; // Arbitrary old date
  } else if (type === "Child") {
    maxDate = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate()).toISOString().split("T")[0];
    minDate = new Date(today.getFullYear() - 17, today.getMonth(), today.getDate()).toISOString().split("T")[0];
  } else if (type === "Infant") {
    maxDate = new Date().toISOString().split("T")[0];
    minDate = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate()).toISOString().split("T")[0];
  }

  return { minDate, maxDate };
};
</script>

<template>
  <div class="passenger-section">
    <h3>Who's Flying</h3>
    <p>
      Enter traveler's name(s) and date(s) of birth exactly as shown on the passport or other
      government-issued photo ID to be used on this trip.
    </p>

    <div v-for="(passenger, index) in passengers" :key="index" class="passenger-card">
      <h4 class="passenger-title">Passenger {{ index + 1 }}: {{ passenger.type }}</h4>
      <div class="form-group">
        <div class="input-box">
          <input type="text" v-model="passenger.firstName" placeholder="First Name *" class="form-input" />
        </div>
        <div class="input-box">
          <input type="text" v-model="passenger.middleName" placeholder="Middle Name" class="form-input" />
        </div>
        <div class="input-box">
          <input type="text" v-model="passenger.lastName" placeholder="Last Name *" class="form-input" />
        </div>
      </div>

      <div class="form-group">
        <div class="input-box">
          <input
            type="date"
            v-model="passenger.dob"
            class="form-input"
            :min="getDateLimit(passenger.type).minDate"
            :max="getDateLimit(passenger.type).maxDate"
          />
        </div>
        <div class="input-box">
          <select v-model="passenger.gender" class="form-select">
            <option disabled value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>
        </div>
      </div>
    </div>
    <pre>{{ passenger }}</pre>
  </div>
</template>



<script>
export default {
  data() {
    return {
      passengers: [],
      maxDate: new Date().toISOString().split("T")[0] // Sets max date to today
    };
  },
  methods: {
    addPassenger() {
      this.passengers.push({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        gender: "",
        type: "Adult"
      });
    },
    removePassenger(index) {
      this.passengers.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.passenger-section {
  background-color: #e7f1ee;
  padding: 20px;
  margin-bottom: 60px;
  margin-top: 50px;
}
.passenger-card {
  background: white;
  padding: 15px;
  padding-top: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
.passenger-title {
  margin-bottom: 10px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}
.form-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
}
.input-box {
  flex: 1 1 220px;
  min-width: 220px;
}
.form-input,
.form-select {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background: white;
}

</style>