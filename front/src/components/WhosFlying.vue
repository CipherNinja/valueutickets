<template>
    <div class="passenger-section">
      <h3>Who's Flying</h3>
      <p>Enter traveler's name(s) and date(s) of birth exactly as shown on the passport or other government-issued photo ID to be used on this trip.</p>
      <div class="passenger-card">
        <h4 class="passenger-title">Passenger 1: Adult</h4>
        <div class="form-group">
          <div class="input-box">
            <input
              type="text"
              id="first-name"
              placeholder="First Name *"
              class="form-input"
            />
          </div>
          <div class="input-box">
            <input
              type="text"
              id="middle-name"
              placeholder="Middle Name"
              class="form-input"
            />
          </div>
          <div class="input-box">
            <input
              type="text"
              id="last-name"
              placeholder="Last Name *"
              class="form-input"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-box">
            <div class="dob-box">
              <select
                v-model="selectedDay"
                :class="{ 'has-value': selectedDay }"
                class="form-select"
              >
                <option disabled value="">Day</option>
                <option v-for="day in 31" :key="day">{{ day }}</option>
              </select>
              <select
                v-model="selectedMonth"
                :class="{ 'has-value': selectedMonth }"
                class="form-select"
              >
                <option disabled value="">Month</option>
                <option v-for="month in months" :key="month">{{ month }}</option>
              </select>
              <select
                v-model="selectedYear"
                :class="{ 'has-value': selectedYear }"
                class="form-select"
              >
                <option disabled value="">Year</option>
                <option v-for="year in years" :key="year">{{ year }}</option>
              </select>
            </div>
          </div>
          <div class="input-box">
            <select
              v-model="selectedGender"
              :class="{ 'has-value': selectedGender }"
              class="form-select"
            >
              <option disabled value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div class="input-box" v-if="selectedGender === 'Other'">
            <input type="text" placeholder="Enter Gender" class="form-input" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      months: [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
      ],
      years: Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i),
      selectedDay: "",
      selectedMonth: "",
      selectedYear: "",
      selectedGender: "",
      selectedAgeGroup: "Adult", // Default to Adult
    };
  },
  computed: {
    age() {
      if (this.selectedDay && this.selectedMonth && this.selectedYear) {
        const birthDate = new Date(this.selectedYear, this.selectedMonth - 1, this.selectedDay);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      }
      return null;
    },
    passengerTitle() {
      const age = this.age;
      if (age === null) {
        return "Passenger 1: Adult"; // Default title
      }
      if (age >= 18) {
        return "Passenger 1: Adult";
      } else if (age >= 2) {
        return "Passenger 1: Child";
      } else {
        return "Passenger 1: Infant";
      }
    },
  },
  methods: {
    validateDOB() {
      const age = this.age;
      if (age === null) {
        return; // No date selected, no validation needed
      }

      if (this.selectedAgeGroup === "Adult" && age < 18) {
        alert("The traveler must be at least 18 years old.");
        this.resetDOB(); // Optionally reset the DOB fields
      } else if (this.selectedAgeGroup === "Child" && (age < 2 || age > 18)) {
        alert("The traveler must be between 2 and 18 years old.");
        this.resetDOB();
      } else if (this.selectedAgeGroup === "Infant" && age > 2) {
        alert("The traveler must be 2 years old or younger.");
        this.resetDOB();
      }
    },
    resetDOB() {
      // Clear the date fields
      this.selectedDay = "";
      this.selectedMonth = "";
      this.selectedYear = "";
    },
  },
  watch: {
    // Watch for changes in the age group to validate the DOB when the group changes
    selectedAgeGroup() {
      this.validateDOB();
    },
  },
};
</script>

  
  <style scoped>
 /* Universal box-sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

.passenger-section {
  background-color: #e7f1ee;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 400px;
  margin-bottom: 60px;
  margin-top: 50px;
}

.passenger-card {
  background: white;
  padding: 15px;
  padding-top: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: auto;
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
  margin-top: 20px;
  width: 100%;
  height: 60px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background: white;
  color: #aaa; /* Default text color */
  transition: color 0.2s ease, border-color 0.2s ease;
}

/* Select elements */
.form-select {
  color: #aaa; /* Default color for the date and gender select inputs */
}

.form-select.has-value {
  color: #000; /* Dark black text color once an option is selected */
}

.form-input::placeholder {
  color: #aaa;
}

.form-select option {
  color: #000;
}

.form-select option:disabled {
  color: #aaa;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #555;
  color: #000; /* Dark black text color on focus */
}

.form-input:not(:placeholder-shown),
.form-select:not(:placeholder-shown) {
  color: #000; /* Dark black text color once the placeholder is gone */
}

.dob-box {
  display: flex;
  gap: 10px;
  width: 100%;
}

.dob-box .form-select {
  flex: 1;
}

@media (min-width: 900px) {
  .input-box {
    flex: 1 1 250px;
  }
}

@media (max-width: 768px) {
  .passenger-section {
    width: 100%;
    padding: 15px;
  }

  .passenger-card {
    padding-top: 20px;
  }

  .form-group {
    flex-direction: column;
  }

  .input-box {
    flex: 1 1 100%;
    min-width: 100%;
  }

  .form-input,
  .form-select {
    height: 50px;
    font-size: 14px;
  }

  .dob-box {
    flex-direction: column;
  }

  .dob-box .form-select {
    width: 100%;
  }
}
  </style>
  