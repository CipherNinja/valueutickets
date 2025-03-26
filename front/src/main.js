// import 'font-awesome/css/font-awesome.min.css'; 
//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head';
import VueGtag from 'vue-gtag';

const app = createApp(App)
const pinia = createPinia()
const head = createHead();

app.use(router)
app.use(pinia) // Make sure to put this after the router
app.use(head);

app.use(VueGtag, {
    config: { id: 'AW-16888061376' },
  }, router);

app.mount('#app')
