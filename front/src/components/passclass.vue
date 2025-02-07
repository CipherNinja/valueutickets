<template>
  <div class="mod-se-box mod-se-psng" id="passengerPopup">
    <div class="w-100-fl se-psng">
      <div class="w-100-fl se-psng-cont" @click="togglePopup">
        <span><i class="fas fa-user"></i> 
          <span id="txtPaxDetails">{{ passengerDetails }}</span> 
        </span>
        <i :class="{'fa fa-angle-up': isPopupVisible, 'fa fa-angle-down': !isPopupVisible}" class="angle-icon"></i>
      </div>
      <div v-if="isPopupVisible" class="psg_dls">
        <div class="popup-content">
          <div class="passenger-count">
            <div class="pass_bx">
              <label>Adult <small>(+12 yrs)</small></label>
              <div class="input-group number-spinner">
                <button class="btn mns_btn" @click="decreaseCount('adult')">
                  <i class="fa fa-minus"></i>
                </button>
                <input type="text" v-model="adultCount" class="text-center add_num" readonly />
                <button class="btn add_btn" @click="increaseCount('adult')">
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <div class="pass_bx">
              <label>Child <small>(0-12 yrs)</small></label>
              <div class="input-group number-spinner">
                <button class="btn mns_btn" @click="decreaseCount('child')">
                  <i class="fa fa-minus"></i>
                </button>
                <input type="text" v-model="childCount" class="text-center add_num" readonly />
                <button class="btn add_btn" @click="increaseCount('child')">
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <div class="pass_bx">
              <label>Infant <small>(Upto 2 yrs)</small></label>
              <div class="input-group number-spinner">
                <button class="btn mns_btn" @click="decreaseCount('infant')">
                  <i class="fa fa-minus"></i>
                </button>
                <input type="text" v-model="infantCount" class="text-center add_num" readonly />
                <button class="btn add_btn" @click="increaseCount('infant')">
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="se-cls-wr">
            <div class="radio" v-for="(cabin, index) in cabinClasses" :key="index">
              <input 
                type="radio" 
                :id="'cabin' + index" 
                :value="cabin.value" 
                v-model="selectedCabin" 
              />
              <label :for="'cabin' + index">{{ cabin.label }}</label>
            </div>
          </div>
          <div class="w-100-fl psg_dls_btn">
            <button class="btn" type="button" @click="doneSelection">Done</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adultCount: 1,
      childCount: 0,
      infantCount: 0,
      selectedCabin: 1, // Default to Economy
      isPopupVisible: false,
      cabinClasses: [
        { value: 1, label: "Economy" },
        { value: 2, label: "Premium Economy" },
        { value: 3, label: "Business" },
        { value: 4, label: "First" },
      ],
    };
  },
  computed: {
    passengerDetails() {
      const totalTravellers = this.adultCount + this.childCount + this.infantCount;
      const cabin = this.cabinClasses.find(c => c.value === this.selectedCabin)?.label || "Economy";
      return `${totalTravellers}${totalTravellers > 1 ? 's' : ''}, ${cabin}`;
    },
  },
  methods: {
    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },
    increaseCount(type) {
      const totalTravellers = this.adultCount + this.childCount + this.infantCount;
      if (totalTravellers >= 9) return;
      
      if (type === 'adult') this.adultCount++;
      else if (type === 'child') this.childCount++;
      else if (type === 'infant' && this.infantCount < this.adultCount) this.infantCount++;
    },
    decreaseCount(type) {
      if (type === 'adult' && this.adultCount > 1) {
        this.adultCount--;
        if (this.infantCount > this.adultCount) {
          this.infantCount = this.adultCount;
        }
      }
      else if (type === 'child' && this.childCount > 0) this.childCount--;
      else if (type === 'infant' && this.infantCount > 0) this.infantCount--;
    },
    doneSelection() {
      const selectedData = {
        adults: this.adultCount,
        children: this.childCount,
        infants: this.infantCount,
        ticket_class: this.cabinClasses.find(c => c.value === this.selectedCabin)?.label || "Economy"
      };
      
      // Emit data to parent
      this.$emit("update-passenger", selectedData);

      this.isPopupVisible = false;
    },
  },
};
</script>


<style scoped>
#passengerPopup {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  padding: 10px;
  margin-top: 0px;
  border-radius: 10px;
  border: 1px solid #000000;
  background: #ffffff;
  position: relative;
  width: 200px;
  height: 50px;
  z-index: 9000;
}
.w-100-fl.se-psng-cont {
  position: relative;
  margin-top: 3px;
}
.w-100-fl.se-psng-cont i{
  margin-right: 3px;
}
.w-100-fl.se-psng-cont span{
  cursor: pointer;
}
.angle-icon {
  position: absolute;
  right: -11px;
  top: 3px;
}
.psg_dls {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 9000;
}

.popup-content {
  padding: 5px;
  z-index: 9000;
}

.passenger-count {
  display: flex;
  flex-direction: column;  /* Change from row to column */
  gap: 10px;
  margin-bottom: 10px;
}

.pass_bx {
  width: 100%;  /* Ensure each section takes full width */
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 5px;
}

.pass_bx label {
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-bottom: 5px;
}

.input-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.angle-icon {
  float: right;
}

.input-group .btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1px 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.input-group .btn:hover {
  background-color: #0056b3;
}

.input-group .add_num {
  text-align: center;
  border: none;
  background-color: transparent;
  font-size: 18px;
  width: 40px;
}

.se-cls-wr {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
}

.radio {
  display: flex;
  align-items: center;
}

.radio input {
  margin-right: 10px;
  width: 18px;
  height: 18px;
}

.radio label {
  margin-top: 0px;
  font-size: 17px;
  margin-bottom: 0px;
}

.psg_dls_btn .btn {
  width: 100%;
  background-color: #007bff;
  color: white;
  font-size: 17px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.psg_dls_btn .btn:hover {
  background-color: #0056b3;
}
</style>
