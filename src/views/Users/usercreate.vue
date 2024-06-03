<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold text-center">Registrar Usuario</h1>
        <form @submit.prevent="register">
          <div class="mb-4">
            <label class="block mb-1 text-sm font-semibold" for="user_name">Nombre de usuario</label>
            <input
              type="text"
              id="user_name"
              v-model="user_name"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm font-semibold" for="user_lastname">Apellido del usuario</label>
            <input
              type="text"
              id="user_lastname"
              v-model="user_lastname"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm font-semibold" for="user_nickname">Apodo del usuario</label>
            <input
              type="text"
              id="user_nickname"
              v-model="user_nickname"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm font-semibold" for="user_phone">Número de teléfono</label>
            <input
              type="text"
              id="user_phone"
              v-model="user_phone"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm font-semibold" for="user_password">Contraseña</label>
            <input
              type="password"
              id="user_password"
              v-model="user_password"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm font-semibold" for="user_address">Dirección</label>
            <input
              type="text"
              id="user_address"
              v-model="user_address"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm font-semibold" for="state">Estado</label>
            <input
              type="text"
              id="state"
              v-model="state"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm font-semibold" for="user_create">Fecha de creación</label>
            <input
              type="date"
              id="user_create"
              v-model="user_create"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm font-semibold" for="user_image">Imagen del usuario</label>
            <input
              type="text"
              id="user_image"
              v-model="user_image"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm font-semibold" for="user_department">Departamento</label>
            <input
              type="number"
              id="user_department"
              v-model="user_department"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Registrarse
          </button>
        </form>
        <p v-if="errorMessage" class="mt-2 text-sm text-center text-red-600">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from '../../utils/axios';
  import { useRouter } from 'vue-router';
  
  const user_name = ref('');
  const user_lastname = ref('');
  const user_nickname = ref('');
  const user_phone = ref('');
  const user_password = ref('');
  const user_address = ref('');
  const state = ref('');
  const user_create = ref('');
  const user_image = ref('');
  const user_department = ref('');
  const errorMessage = ref('');
  const router = useRouter();
  
  const register = async () => {
    try {
      await axios.post('/auth/register', {
        user_name: user_name.value,
        user_lastname: user_lastname.value,
        user_nickname: user_nickname.value,
        user_phone: user_phone.value,
        user_password: user_password.value,
        user_address: user_address.value,
        state: state.value,
        user_create: user_create.value,
        user_image: user_image.value,
        user_department: user_department.value,
      });
      router.push('/'); 
    } catch (error) {
      errorMessage.value = 'Fallo el registro del usuario';
    }
  };
  </script>
  
  <style scoped>
  </style>
  