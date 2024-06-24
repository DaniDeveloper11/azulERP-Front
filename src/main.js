import './assets/main.css'
// import '@/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Swal from'sweetalert2'
import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.config.globalProperties.$swal = Swal

app.mount('#app')
