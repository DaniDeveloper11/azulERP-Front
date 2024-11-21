<template>
<div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Guarda un punto</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Registra la latitud y longitud de una parcela para guardarla tu lista
        </p>
        <hr class="bg-indigo-600" style="height:3px; margin: .7rem" />
        </div>

        </div>

        <div class="flex justify-center mb-10">
                <Gmapa :userPosition="userPosition" @updatePosition="handlePositionUpdate"></Gmapa>
            </div>

        <div class="flex justify-center">
            <button @click="handleClick(userPosition)" type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-2xl sm:text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
         <BookmarkIcon class="-ml-0.5 size-5" aria-hidden="true" />
            Guardar punto
         </button>
         
        </div>
        
</template>
<script setup>
import { onMounted,ref } from 'vue';
import { useRouter } from 'vue-router';

import Gmapa from './components/GoogleMaps.vue'
import { BookmarkIcon } from '@heroicons/vue/20/solid'
import Swal from 'sweetalert2';



const router = useRouter();

const userPosition = ref({ lat: 19.432608, lng: -99.133209 });
const currentPosition = ref({ ...userPosition.value }); // Posición actual que se actualizará desde el mapa


onMounted(() =>{
    getLocation();  
})

const handleClick = (value) => {
  try{
    console.log(value)
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