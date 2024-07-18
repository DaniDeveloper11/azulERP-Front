<template>
  <div>
    <div v-if="showtable === 1"  class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Solicitudes de compra</h1>
        <p class="mt-2 text-sm text-gray-700">
        Aprueba o Rechaza las solicitudes de compra, Genera una Orden de compra desde una Solicitud de compra y revisa
        el estatus de cada una de estas.
        </p>
      </div>
    </div>
    <div v-if="showtable === 2"  class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Ordenes de compra</h1>
        <p class="mt-2 text-sm text-gray-700">
        Revisa el estado de las Solicitudes de compra, descargala en formato PDF
        </p>
      </div>
    </div>
    <hr class="bg-indigo-600" style="height:3px; margin: .7rem">


    <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      <li v-for="project in projects" :key="project.name" class="col-span-1 flex rounded-md shadow-sm">
        <div
          :class="[project.bgColor, 'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white']">
          {{ project.initials }}</div>
        <div
          class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
          <div @click="project.value != showtable ? showtable = project.value: showtable = showtable " class="flex-1 truncate px-4 py-2 text-sm cursor-pointer">
            <a  class="font-medium text-gray-900 hover:text-gray-600">{{ project.name }}</a>
            <p class="text-gray-500">{{project.value == 1 ?  countRequests : project.value== 2 ? countOrders : '' }} Registros</p>
          </div>
          <div class="flex-shrink-0 pr-2">
            <Menu as="div" class="relative flex-none">
                    <MenuButton class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                        <span class="sr-only">Open options</span>
                        <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
                    </MenuButton>
                    <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                            class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                            <MenuItem v-slot="{ active }">
                            <a 
                                :class="[active ? 'bg-gray-50' : '', ' hover:text-white hover:bg-green-300 block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer']">Aprobar<span
                                    class="sr-only"> </span></a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <a 
                                :class="[active ? 'bg-gray-50' : '', ' hover:text-white hover:bg-red-500 block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer']">Rechazar<span
                                    class="sr-only"></span></a>
                            </MenuItem>
                        </MenuItems>
                    </transition>
                </Menu>
          </div>
        </div>
      </li>
    </ul>
    <!-- <tables v-bind:requests="requests"></tables> -->
    <!-- <tableRequests v-if="showtable === 1" v-bind:requests="requests"></tableRequests> -->
    
    <div v-if="showtable === 1">
      <tableRequests   v-bind:requests="requests"></tableRequests>

    </div>


    <div v-if="showtable === 2" >
      <tableOrders v-if="hasData" v-bind:orders="orders"></tableOrders>
      <p v-else class="mt-6 text-xl leading-8 text-gray-700">No hay resultados</p>
    </div>
  </div>
</template>

<script setup>
import { initFlowbite, initDropdowns } from 'flowbite'
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
import tableRequests from '../../components/tableRequests.vue'
import axios from '../../utils/axios';
import { onMounted, ref, reactive, provide } from 'vue'
import { request } from 'utilities';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import tableOrders from '@/components/tableOrders.vue'
// import { hatSanta } from 'fontawesome';

const showtable = ref(1) //1 tabla solicitudes de compra 2 tabla ordenes de compra
const hasData = ref(true);
const hasRequest = ref(true);
const requests = ref([]);
const orders = ref([])
const countRequests = ref(0)
const countOrders = ref(0)
const projects = [
  { name: 'Solicitud de compra', initials: 'SC', href: '#', members: 16, bgColor: 'bg-pink-600',value:1 },
  { name: 'Orden de Compra', initials: 'OC', href: '#', members: 12, bgColor: 'bg-purple-600', value:2 },
]

onMounted(() => {
  getRequests();
 getOrders();
})

const getRequests = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get('/requestPurchases', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if(response.data.length > 0 ){
      requests.value = response.data;
      countRequests.value = requests.value.length
    }
    else{
      hasRequest.value = false
    }
    
  } catch (error) {
    console.log('algo salio mal')
    hasRequest.value = false
  } finally {

  }
}

provide('getRequests',getRequests);

const getOrders = async () => {
  const token = localStorage.getItem('token');
  try{
    const response = await axios.get('/orderPurchases', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if(response.data.length > 0){
      orders.value = response.data
      countOrders.value = orders.value.length
    }else{
      hasData.value = false
    }
  }catch(error){
    console.error(error)
    hasData.value = false;
  }
}



</script>