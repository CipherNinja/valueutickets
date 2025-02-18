<script setup>
import { computed } from "vue";
import { usePassengerStore } from "@/stores/passengerStore";

const passengerStore = usePassengerStore();
const passengers = computed(() => passengerStore.passengers);

const updatePassengerData = (index, field, value) => {
  passengerStore.updatePassenger(index, field, value);
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
          <input type="text" :value="passenger.first_name" @input="updatePassengerData(index, 'first_name', $event.target.value)" placeholder="First Name *" class="form-input" />
        </div>
        <div class="input-box">
          <input type="text" :value="passenger.middle_name" @input="updatePassengerData(index, 'middle_name', $event.target.value)" placeholder="Middle Name" class="form-input" />
        </div>
        <div class="input-box">
          <input type="text" :value="passenger.last_name" @input="updatePassengerData(index, 'last_name', $event.target.value)" placeholder="Last Name *" class="form-input" />
        </div>
      </div>

      <div class="form-group">
        <div class="input-box">
          <input type="date" :value="passenger.dob" @input="updatePassengerData(index, 'dob', $event.target.value)" class="form-input" />
        </div>
        <div class="input-box">
          <select :value="passenger.gender" @change="updatePassengerData(index, 'gender', $event.target.value)" class="form-select">
            <option disabled value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>


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