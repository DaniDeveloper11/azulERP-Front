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
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showLoader = ref(true);

// Simulación de una carga de datos
setTimeout(() => {
  showLoader.value = false;
}, 2000);
</script>

<style>
/* Agrega cualquier estilo adicional aquí si es necesario */
</style>
