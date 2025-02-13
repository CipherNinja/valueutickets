import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import { usePostDataStore } from "@/stores/postDataStore";

export const usePassengerStore = defineStore("passenger", () => {
  const postDataStore = usePostDataStore();
  const passengers = ref([]);

  const generatePassengers = () => {
    const postData = postDataStore.postdata || { adults: 1, children: 0, infants: 0 };
    const types = [];
    for (let i = 0; i < (postData.adults || 0); i++) types.push({ type: "Adult" });
    for (let i = 0; i < (postData.children || 0); i++) types.push({ type: "Child" });
    for (let i = 0; i < (postData.infants || 0); i++) types.push({ type: "Infant" });

    return types.map((passenger) => ({
      type: passenger.type,
      first_name: "",
      middle_name: "",
      last_name: "",
      dob: "",
      gender: "Prefer not to say",
    }));
  };

  // Initialize passengers
  passengers.value = generatePassengers();

  // Watch for changes in postDataStore and regenerate passengers if needed
  watch(
    () => postDataStore.postdata,
    (newPostData) => {
      passengers.value = generatePassengers(newPostData);
    },
    { deep: true, immediate: true }
  );

  const updatePassenger = (index, field, value) => {
    passengers.value[index] = { ...passengers.value[index], [field]: value };
  };

  return { passengers, updatePassenger };
});
