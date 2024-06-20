<template>
    <div v-if="showloader" class="flex justify-center w-full">
      <div class=" grid h-full">
        <loader class="fixed top-1/2"></loader>
  
      </div>
    </div>
  
    <div v-else class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Proveedores</h1>
          <p class="mt-2 text-sm text-gray-700">Lista de proveedores donde se especifica, nombre, correo, contacto, etc. Ademas puedes crear un nuevo proveedor, editarlo y hasta eliminarlo </p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <RouterLink to="/addproveedors" type="button"
            class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Añadir Proveedor</RouterLink>
        </div>
      </div>
    </div>
</template>