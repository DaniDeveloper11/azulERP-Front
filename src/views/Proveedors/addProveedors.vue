<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crear Proveedor
          </h2>
        </div>
        <form @submit.prevent="submitForm" class="mt-8 space-y-6">
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="p-2">
              <label for="name" class="sr-only">Nopre</label>
              <input v-model="name" id="name" name="name" type="text" required
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nombre" />
            </div>
            <div class="p-2">
              
              <input v-model="rfc" id="rfc" name="rfc" type="text"
                       class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="RFC" />
            </div>
            <div class="p-2">
              
              <input v-model="curp" id="curp" name="curp" type="text"
                       class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="CURP" />
            </div>
            <div class="p-2">
              
              <input v-model="phone" id="phone" name="phone" type="phone"
                       class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Telefono" />
            </div>
            <div class="p-2">
              
              <input v-model="address" id="address" name="address" type="text"
                       class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Direccion" />
            </div>
            <div class="p-2">
              
              <input v-model="city" id="city" name="city" type="text"
                       class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Ciudad" />
            </div>
            <div class="p-2">
              
              <input v-model="state" id="state" name="state" type="text"
                       class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Estado" />
            </div>
          </div>
          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Crear Proveedor
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
import useAuthStore from '../../store/auth.js';
import axios from 'axios';
import Swal from 'sweetalert2';

  export default {
    data() {
      return {
        name: '',
        rfc: '',
        curp: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        active: 1,
      };
    },
    methods: {


        async submitForm() {
      const token = localStorage.getItem('token');
      const authStore = useAuthStore();

      const formData = {
          name: this.name,
          rfc: this.rfc,
          curp: this.curp,
          phone: this.phone,
          address: this.address,
          city: this.city,
          state: this.state,
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
        console.log(response);
        if (response.ok) {
          Swal.fire({
            title: 'Correcto',
            text: 'Proveedor creado correctamente',
            icon: 'success',
          });
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo crear Proveedor',
          icon: 'error',
        });
      }
    },
    },
  };
  </script>
  
  <style scoped>
  </style>
  