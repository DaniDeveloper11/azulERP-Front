<template>
  <div v-if="showloader" class="flex justify-center w-full">
    <div class="grid h-full">
      <loader class="fixed top-1/2"></loader>
    </div>
  </div>

  <div v-else class="">
    <div class="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
      <!-- Details section -->
      <section aria-labelledby="details-heading">
        <div class="flex flex-col items-center text-center">
          <h2 id="details-heading" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">REQUISICIONES
          </h2>
          <!-- <p class="mt-3 max-w-3xl text-lg text-gray-600">
            Una requisición es una solicitud interna para la compra de bienes o servicios, detallando 
            necesidades y obteniendo aprobaciones antes de proceder con la orden de compra.
          </p> -->
        </div>

        <div class="mt-16 grid grid-cols-1 gap-y-2 lg:grid-cols-2 lg:gap-x-8">
          <router-link to="solicitarRequisicion">
            <div class="relative group cursor-pointer ">
              <div
                class="aspect-h-2 aspect-w-3 w-full transition duration-500 overflow-hidden border-4 border-blue-700 rounded-xl shadow-sm hover:shadow-4xl hover:bg-blue-500 transform hover:scale-105">
                <img src="/src/assets/requisicion.png"
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  class="h-full w-full object-cover object-center transition duration-500  " />
              </div>
              <div
                class="flex place-content-evenly mt-2 sm:mt-8 sm:px-10 sm:opacity-0 sm:transition-opacity sm:duration-500 sm:group-hover:opacity-100">
                <p class="  text-base text-black ">
                  Solicitar Requisicion.
                </p>
                <arrow-right class="text-blue-600" ></arrow-right>
              </div>
            </div>
          </router-link>
          <router-link to="listaRequisiciones">
            <div class="relative group cursor-pointer ">
              <div
                class="aspect-h-2 aspect-w-3 w-full transition duration-500 overflow-hidden border-4 border-blue-700 rounded-xl shadow-sm hover:shadow-4xl hover:bg-blue-500 transform hover:scale-105">
                <img src="/src/assets/requisicionList.png"
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  class="h-full w-full object-cover object-center transition duration-500  " />
              </div>
              <div
                class="flex place-content-evenly mt-2 sm:mt-8 sm:px-10 sm:opacity-0 sm:transition-opacity sm:duration-500 sm:group-hover:opacity-100">
                <p class="  text-base text-black ">
                  Revisa las requisicion previamente realizadas.
                </p>
                <arrow-right class="text-blue-600" </arrow-right>
              </div>

            </div>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import loader from '@/components/LoaderCss.vue'
import async from 'utilities/lib/async'
import ArrowRight from '@/components/icons/arrawExpandRight.vue'

const showloader = ref(true)


onMounted(async () => {
  setLoader();
})

// Funcion para cambiar el valor del loader
const setLoader = () => {
  setTimeout(() => {
    showloader.value = false
  }, 3000)
}



</script>
