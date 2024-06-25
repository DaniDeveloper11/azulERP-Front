<template>
  <div>
    <h2 class="text-sm font-medium text-gray-500">Pinned Projects</h2>
    <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      <li v-for="project in projects" :key="project.name" class="col-span-1 flex rounded-md shadow-sm">
        <div
          :class="[project.bgColor, 'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white']">
          {{ project.initials }}</div>
        <div
          class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a :href="project.href" class="font-medium text-gray-900 hover:text-gray-600">{{ project.name }}</a>
            <p class="text-gray-500">{{ project.members }} Members</p>
          </div>
          <div class="flex-shrink-0 pr-2">
            <button type="button"
              class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="sr-only">Open options</span>
              <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <tables v-bind:requests="requests"></tables>
</template>

<script setup>
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
import tables from '../../components/table.vue'
import axios from '../../utils/axios';
import { onMounted, ref, reactive } from 'vue'
import { request } from 'utilities';

const requests = ref([]);
const countRequests = ref('')
const projects = [
  { name: 'Solicitud de compra', initials: 'SC', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Orden de Compra', initials: 'OC', href: '#', members: 12, bgColor: 'bg-purple-600' },

]

onMounted(() => {
  getRequests();
})

const getRequests = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get('http://localhost:3000/requestPurchases', {
      Authorization: `Bearer ${token}`
    });
    requests.value = response.data;
    countRequests.value = requests.value.length
    for (const element of requests.value) {
      const response2 = await axios.get(`http://localhost:3000/users/${element.userRequest}`, {
        headers: { // Corregir el uso de headers
          Authorization: `Bearer ${token}`
        }
      });
      element.userRequest_name = response2.data.user_name; // Asignar el nombre obtenido de la respuesta
    }
  } catch (error) {
    console.log('algo salio mal')
  } finally {

  }
}

const getUser = async (userRequest) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get(`http://localhost:3000/users/${userRequest}`, {
      Authorization: `Bearer ${token}`
    });

    // agrega el nombre del usuario al objeto en turno 

  } catch (error) {
    console.log('Error al obtener datos del usuario')
  }
}
</script>