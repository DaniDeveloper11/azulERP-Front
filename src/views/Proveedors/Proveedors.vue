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
        <div class="mt-8 flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table class="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Nombre</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">RFC</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">CURP</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Teléfono</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Dirección</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Ciudad</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Estado</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Activo</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="proveedor in proveedors" :key="proveedor.id">
                    <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="font-medium text-gray-900">{{ proveedor.name }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ proveedor.rfc }}</td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ proveedor.curp }}</td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ proveedor.phone }}</td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ proveedor.address }}</td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ proveedor.city }}</td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ proveedor.state }}</td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span 
                        :class="proveedor.active ? 'text-green-700 bg-green-100' : 'text-red-500 bg-red-100'"
                        class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-green-600/20">
                        {{ proveedor.active ? 'Activo' : 'Inactivo' }}
                      </span>
                    </td>
                    <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <button 
                        v-on:click="editOpen = true; emptyPerson = proveedor;"
                        class="text-indigo-600 hover:text-indigo-900">
                        Edit<span class="sr-only">, {{ proveedor.name }}</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <RouterLink to="/addproveedors" type="button"
            class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Añadir Proveedor
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from '@/utils/axios'
import Swal from 'sweetalert2';
import loader from '@/components/LoaderCss.vue';


const showLoader = ref(true);
const proveedors = ref([]);
const editOpen = ref(false);
const emptyPerson = ref({});


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


onMounted(() => {
  fetchProveedors();
});
</script>

<style>

</style>
