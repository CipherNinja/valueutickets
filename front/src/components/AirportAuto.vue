<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import axios from 'axios'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Enter airport',
    required: true,
  }
})
const emit = defineEmits(['update:modelValue', 'update:iata'])

const query = ref(props.modelValue)
const suggestions = ref([])
const allAirports = ref([])
const autocompleteContainer = ref(null)

const fetchAllAirports = async () => {
  try {
    const response = await axios.get('https://gcp.agratasinfotech.com/api/v1/airports/')
    allAirports.value = response.data
  } catch (error) {
    console.error('Error fetching airports:', error)
    allAirports.value = []
  }
}

const getPriority = (airport, search) => {
  const s = search.toLowerCase()
  if (airport.city?.toLowerCase().includes(s)) return 1
  if (airport.airport_name?.toLowerCase().includes(s)) return 2
  if (airport.iata?.toLowerCase().includes(s)) return 3
  if (airport.icao?.toLowerCase().includes(s)) return 4
  return 5
}

const filterAirports = (searchTerm) => {
  const term = searchTerm.toLowerCase()
  const filtered = allAirports.value.filter(airport => {
    return (
      airport.city?.toLowerCase().includes(term) ||
      airport.airport_name?.toLowerCase().includes(term) ||
      airport.iata?.toLowerCase().includes(term) ||
      airport.icao?.toLowerCase().includes(term)
    )
  })

  filtered.sort((a, b) => {
    const pa = getPriority(a, term)
    const pb = getPriority(b, term)
    if (pa === pb && a.city && b.city) {
      return a.city.localeCompare(b.city)
    }
    return pa - pb
  })
  suggestions.value = filtered
}

watch(query, (newValue) => {
  emit('update:modelValue', newValue)
  if (newValue && newValue.length >= 3) {
    filterAirports(newValue)
  } else {
    suggestions.value = []
  }
})

onMounted(() => {
  fetchAllAirports()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleClickOutside = (event) => {
  if (autocompleteContainer.value && !autocompleteContainer.value.contains(event.target)) {
    suggestions.value = []
  }
}

const selectSuggestion = (suggestion) => {
  query.value = `${suggestion.city} (${suggestion.iata})`
  suggestions.value = []
  
  // Emit both input text & IATA code separately
  emit('update:modelValue', query.value)
  emit('update:iata', suggestion.iata) // This is the IATA code
}
</script>

<template>
  <div class="airport-autocomplete" ref="autocompleteContainer">
    <input 
      type="text" 
      :placeholder="placeholder" 
      v-model="query" 
      autocomplete="on"
    />
    <ul v-if="suggestions.length">
      <li 
        v-for="airport in suggestions" 
        :key="airport.id" 
        @click="selectSuggestion(airport)"
      >
        <span v-if="airport.iata">{{ airport.iata }} - </span>
        {{ airport.city }} - {{ airport.airport_name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.airport-autocomplete {
  position: relative;
  width: 100%;
}
.airport-autocomplete input {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  padding-left: 3px;
  font-size: 19px;
  box-sizing: border-box;
  border: 0px solid #00000000;
}
.airport-autocomplete ul {
  position: absolute;
  top: 120%;
  left: -100px;
  right: 0;
  width: 200%;
  background: #fff;
  border: 1px solid #000000;
  border-radius: 10px;
  max-height: 250px;
  overflow-y: auto;
  z-index: 5000;
  margin: 0;
  padding: 0;
  list-style: none;
}
.airport-autocomplete li {
  padding: 5px;
  border-block: 1px solid #000000;
  cursor: pointer;
  z-index: 5000;

}
.airport-autocomplete li:hover {
  background-color: #f0f0f0;
}
</style>
