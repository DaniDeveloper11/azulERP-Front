import './assets/main.css'
// import '@/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Swal from 'sweetalert2'
import VueSignaturePad from 'vue-signature-pad';
import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueGoogleMaps from 'vue-google-maps-community-fork'

const app = createApp(App)
const pinia = createPinia()

//app.use(VueExcelXlsx)
app.use(pinia)
app.use(VueSignaturePad)
app.use(router)
app.config.globalProperties.$swal = Swal
app.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCwkGVxvTW-pIGLmjTnSZLaINIu32MCUDI',
    },
  });

app.mount('#app')