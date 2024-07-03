<template>
  <div>
    <div v-if="showLoader" class="flex justify-center w-full">
      <div class="grid h-full">
        <loader class="fixed top-1/2"></loader>
      </div>
    </div>

    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Proveedores</h1>
          <p class="mt-2 text-sm text-gray-700">
            Lista de proveedores donde se especifica, nombre, correo, contacto, etc. Además, puedes crear un nuevo proveedor, editarlo y hasta eliminarlo.
          </p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <RouterLink to="/addproveedors" type="button"
            class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Añadir Proveedor
          </RouterLink>
        </div>
      </div>
      <hr class="bg-indigo-600" style="height:3px; margin: .7rem">
      <div class="flex mx-auto py-4 sm:py-10">
        <div class="flex w-full mx-10 rounded bg-white">
          <input v-model="searchQuery"
            class="w-full border-indigo bg-transparent px-4 py-1 text-gray-800 outline-none focus:outline-none"
            type="search" name="search" placeholder="Busqueda..." />
          <select v-model="statusFilter" class="border-none bg-transparent px-4 py-1 text-gray-800 outline-none focus:outline-none">
            <option value="">Todos</option>
            <option value="1">Activo</option>
            <option value="0">Inactivo</option>
          </select>
          <button type="submit" @click="search" class="m-2 rounded bg-blue-600 px-4 py-2 text-white">
            <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                width="512px" height="512px">
                <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div class="mt-1 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="proveedor in filteredProveedors" :key="proveedor.id" class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-6">
            <div class="flex items-center">
              <div class="h-16 w-16 flex-shrink-0">
                <img class="h-16 w-16 rounded-full" :src="getImageUrl(proveedor)" alt="Proveedor" />
              </div>
              <div class="ml-4">
                <div class="text-lg font-medium text-gray-900">{{ proveedor.name }}</div>
                <div class="text-gray-500">{{ proveedor.rfc }}</div>
              </div>
            </div>
            <div class="mt-4">
              <div class="text-sm text-gray-700"><strong>CURP:</strong> {{ proveedor.curp }}</div>
              <div class="text-sm text-gray-700"><strong>Teléfono:</strong> {{ proveedor.phone }}</div>
              <div class="text-sm text-gray-700"><strong>Dirección:</strong> {{ proveedor.address }}</div>
              <div class="text-sm text-gray-700"><strong>Ciudad:</strong> {{ proveedor.city }}</div>
              <div class="text-sm text-gray-700"><strong>Estado:</strong> {{ proveedor.state }}</div>
              <div class="mt-2">
                <span 
                  :class="proveedor.active ? 'text-green-700 bg-green-100' : 'text-red-500 bg-red-100'"
                  class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-green-600/20">
                  {{ proveedor.active ? 'Activo' : 'Inactivo' }}
                </span>
              </div>
            </div>
            <div class="mt-4 text-center">
              <button 
                v-on:click="confirmDelete(proveedor.id)"
                class="rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 inline-block mr-12">
                Eliminar<span class="sr-only">, {{ proveedor.name }}</span>
              </button>
              <button 
                v-on:click="editProveedor(proveedor)"
                class="rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 inline-block">
                Editar<span class="sr-only">, {{ proveedor.name }}</span>
              </button>
              <button 
                v-on:click="ConfirmAvailable(proveedor.id)" v-if="proveedor.active == 0"
                class="rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 inline-block">
                Habilitar<span class="sr-only">, {{ proveedor.name }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal :open="editOpen" :proveedor="selectedProveedor" @close="editOpen = false"></modal>
  </div>
</template>

<script setup>
import { ref, onMounted, computed,provide } from 'vue';
import axios from '@/utils/axios';
import loader from '../../components/LoaderCss.vue';
import defaultImage from '../../assets/provideer.png';
import Swal from 'sweetalert2';
import modal from './modal/modalProveedors.vue';

const showLoader = ref(true);
const proveedors = ref([]);
const editOpen = ref(false);
const selectedProveedor = ref(null); 
const searchQuery = ref('');
const statusFilter = ref('1');

const fetchProveedors = async () => {
  try {
    const response = await axios.get('/proveedors');
    proveedors.value = response.data;
  } catch (error) {
    console.error('Error al obtener proveedores:', error);
  } finally {
    showLoader.value = false;
  }
};

const getImageUrl = (proveedor) => {
  return proveedor.image || defaultImage;
};

const confirmDelete = (id) => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarlo!'
  }).then((result) => {
    if (result.isConfirmed) {
      deleteProveedor(id);
    }
  });
};

const ConfirmAvailable = (id) => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "No podrás revertir esto!",
    icon: 'done',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, Habilitarlo!'
  }).then((result) => {
    if (result.isConfirmed) {
      Available(id);
    }
  });
};

const Available = async (id) => {
  try {
    await axios.put(`/proveedors/${id}`, {
      active: 1
    });
    proveedors.value = proveedors.value.filter(proveedor => proveedor.id !== id);
    Swal.fire(
      'Habilitado!',
      'El proveedor ha sido habilitado.',
      'success'
    );
    fetchProveedors();
  } catch (error) {
    console.error('Error available proveedor:', error);
    Swal.fire(
      'Error!',
      'Hubo un problema habilitando el proveedor.',
      'error'
    );
  }
};
provide('fetchProveedors',fetchProveedors);
const deleteProveedor = async (id) => {
  try {
    await axios.put(`/proveedors/${id}`, {
      active: 0
    });
    proveedors.value = proveedors.value.filter(proveedor => proveedor.id !== id);
    Swal.fire(
      'Eliminado!',
      'El proveedor ha sido eliminado.',
      'success'
    );
     fetchProveedors();
  } catch (error) {
    console.error('Error deleting proveedor:', error);
    Swal.fire(
      'Error!',
      'Hubo un problema eliminando el proveedor.',
      'error'
    );
  }
};

const editProveedor = (proveedor) => {
  selectedProveedor.value = proveedor;
  editOpen.value = true;
};



const filteredProveedors = computed(() => {
  return proveedors.value.filter(proveedor => {
    const matchesSearchQuery = proveedor.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      proveedor.rfc.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesStatus = statusFilter.value === '' || proveedor.active == statusFilter.value;
    return matchesSearchQuery && matchesStatus;
  });
});

onMounted(() => {
  fetchProveedors();
});
</script>
