<template>
  <div class="w-full items-center justify-center bg-gray-150 py-1 px-4 sm:px-2 lg:px-2">
    <div class="max-w-md w-full space-y-8" style="border: 3px solid #4f46e5; border-radius: 2%;">
      <div>
        <h2 class="pb-8 text-center text-4xl font-extrabold text-gray-1000" style="background-color: #4f46e5; color: white">
          Agregar Proveedor
        </h2>
        <hr>
      </div>
      <form @submit.prevent="submitForm" class="p-2 space-y-6">
        <div class="grid grid-cols-12 gap-5">
          <div class="col-span-12">
            <label for="name" class="sr-only">Nombre</label>
            <input v-model="name" id="name" name="name" type="text" required
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nombre" />
          </div>
          <div class="col-span-4">
            <label for="rfc" class="sr-only">RFC</label>
            <input v-model="rfc" id="rfc" name="rfc" type="text"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="RFC" />
          </div>
          <div class="col-span-4">
            <label for="curp" class="sr-only">CURP</label>
            <input v-model="curp" id="curp" name="curp" type="text"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="CURP" />
          </div>
          <div class="col-span-4">
            <label for="phone" class="sr-only">Teléfono</label>
            <input v-model="phone" id="phone" name="phone" type="phone"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Teléfono" />
          </div>
          <div class="col-span-12">
            <label for="address" class="sr-only">Dirección</label>
            <input v-model="address" id="address" name="address" type="text"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Dirección" />
          </div>
          <div class="col-span-12">
            <label for="city" class="sr-only">Ciudad</label>
            <input v-model="city" id="city" name="city" type="text"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Ciudad" />
          </div>
          <div class="col-span-12">
            <label for="state" class="sr-only">Estado</label>
            <input v-model="state" id="state" name="state" type="text"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Estado" />
          </div>
        </div>
        <div>
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Crear
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthStore from '../../store/auth';
import Swal from 'sweetalert2';

const name = ref('');
const rfc = ref('');
const curp = ref('');
const phone = ref('');
const address = ref('');
const city = ref('');
const state = ref('');

const submitForm = async () => {
  const token = localStorage.getItem('token');
  const authStore = useAuthStore();

  const formData = {
    name: name.value,
    rfc: rfc.value,
    curp: curp.value,
    phone: phone.value,
    address: address.value,
    city: city.value,
    state: state.value,
    active: 1,
  };

  try {
    const response = await fetch('http://localhost:3000/Proveedors', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      Swal.fire({
        title: 'Correcto',
        text: 'Proveedor creado correctamente',
        icon: 'success',
      });
    } else {
      throw new Error('No se pudo crear Proveedor');
    }
  } catch (error) {
    console.error('Error:', error);
    Swal.fire({
      title: 'Error',
      text: 'No se pudo crear Proveedor',
      icon: 'error',
    });
  }
};
</script>

<style scoped>
</style>
