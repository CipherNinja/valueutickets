import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { usePostDataStore } from "@/stores/postDataStore";

export const usePassengerStore = defineStore("passenger", () => {
  const postDataStore = usePostDataStore();
  //const postDataStore = {postdata: {adults: 1, children: 1, infants: 1}};
  const passengers = ref([]);

  const generatePassengers = () => {
    const types = [];
    for (let i = 0; i < postDataStore.postdata?.adults; i++) types.push({ type: "Adult" });
    for (let i = 0; i < postDataStore.postdata?.children; i++) types.push({ type: "Child" });
    for (let i = 0; i < postDataStore.postdata?.infants; i++) types.push({ type: "Infant" });

    return types.map((passenger) => ({
      type: passenger.type,
      first_name: "",
      middle_name: "",
      last_name: "",
      dob: "",
      gender: "Prefer not to say",
    }));
  };

  passengers.value = generatePassengers();

  const updatePassenger = (index, field, value) => {
    passengers.value[index][field] = value || "NA";
  };

  return { passengers, updatePassenger };
});
