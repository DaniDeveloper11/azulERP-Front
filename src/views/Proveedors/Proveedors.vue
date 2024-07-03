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
      <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="proveedor in proveedors" :key="proveedor.id" class="overflow-hidden rounded-lg bg-white shadow">
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
            <div class="mt-4 text-right">
              <button 
                v-on:click="editOpen = true; emptyPerson = proveedor;"
                class="text-indigo-600 hover:text-indigo-900">
                Edit<span class="sr-only">, {{ proveedor.name }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from '@/utils/axios';
import useAuthStore from '../../store/auth';
import loader from '../../components/LoaderCss.vue';

const showLoader = ref(true);
const proveedors = ref([]);
const editOpen = ref(false);
const emptyPerson = ref({});

// Obtener los datos de los proveedores
const fetchProveedors = async () => {
  try {
    const response = await axios.get('/proveedors');
    proveedors.value = response.data;
  } catch (error) {
    console.error('Error fetching proveedores:', error);
  } finally {
    showLoader.value = false;
  }
};

// Función para obtener la URL de la imagen del proveedor
const getImageUrl = (proveedor) => {
  // Reemplaza esto con la lógica adecuada para obtener la URL de la imagen del proveedor
  return proveedor.image || 'https://via.placeholder.com/64';
};

// Llamar a fetchProveedors cuando el componente se monte
onMounted(() => {
  fetchProveedors();
});
</script>
