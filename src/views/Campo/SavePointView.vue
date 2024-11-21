<template>
<div class="space-y-12">
  <div class="sm:flex sm:items-center mb-12">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold text-gray-900">Lista de Parcelas</h1>
          <p class="mt-2 text-sm text-gray-700">Datos Generales de Geolocalizacion</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <router-link to="/campoView" type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Volver</router-link>
        </div>
      </div>

        </div>

        <div class="flex justify-center mb-10">
                <Gmapa :userPosition="userPosition" @updatePosition="handlePositionUpdate"></Gmapa>
            </div>




        <div class="grid justify-center gap-3 md:grid-cols-3">
          <div class="sm:col-span-3">
            <label for="nombre" class="block text-sm/6 font-medium text-gray-900">Nombre Parcela</label>
            <div class="mt-2">
              <input v-model="newField.nombre" type="text" name="parcela-nombre" id="parcela-nombre" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="planta" class="block text-sm/6 font-medium text-gray-900">Planta</label>
            <div class="mt-2">
              <input v-model="newField.planta" type="text" name="planta" id="planta" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="dueño" class="block text-sm/6 font-medium text-gray-900">Dueño</label>
            <div class="mt-2">
              <input v-model="newField.dueño" type="text" name="dueño" id="dueño" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
            </div>
          </div>
            <button @click="handleClick(newField)" type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-2xl sm:text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
         <BookmarkIcon class="-ml-0.5 size-5" aria-hidden="true" />
            Guardar punto
         </button>
         
        </div>
        
</template>
<script setup>
import { computed, onMounted,ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthStore from '@/store/auth';

import Gmapa from './components/GoogleMaps.vue'
import { BookmarkIcon } from '@heroicons/vue/20/solid'
import Swal from 'sweetalert2';


const authStore = useAuthStore();
const router = useRouter();




const userPosition = ref({ lat: 19.432608, lng: -99.133209 });
const currentPosition = ref({ ...userPosition.value }); // Posición actual que se actualizará desde el mapa
const newField = ref({
  nombre:'',
  planta:'',
  coordenadas:userPosition.value,
  dueño:''

})

onMounted(() =>{
    getLocation();  
})

const handleClick = (value) => {
  try{
    authStore.addParcela(value);
    if(value){
      Swal.fire({
        title:'Correcto',
        text:'Ubicacion Guardada',
        icon:'success'
      })
      router.push('/campoView')
    }

  }catch(error){
    console.error('Error:',error);
    Swal.fire({
      title:'Error',
      text:'No se pudo Guardar la ubicacion',
      icon: 'error'
    })
  }

  

}

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        let lat = pos.coords.latitude;
        let lng = pos.coords.longitude;
        userPosition.value = { lat, lng };
        // console.log(lat, lng);
        // buttonDisabled.value = true;
        // invisibleState.value=true;
      },
      (error) => {
        console.error("Error al obtener la ubicación: ", error);
      }
    );
  } else {
    console.error("Geolocalización no es soportada por este navegador.");
  }
};

const handlePositionUpdate = (newPosition) => {
    console.log('Nueva posicion:', newPosition);
    currentPosition.value = newPosition
}
// import loader from '../../components/LoaderCss.vue';

</script>