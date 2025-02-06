// import 'font-awesome/css/font-awesome.min.css'; 
//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia) // Make sure to put this after the router

app.mount('#app')
