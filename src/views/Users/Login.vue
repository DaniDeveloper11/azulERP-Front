<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-center">Inicio de sesión</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block mb-1 text-sm font-semibold" for="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            v-model="user_name"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block mb-1 text-sm font-semibold" for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="user_password"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Entrar
        </button>
      </form>
      <p v-if="errorMessage" class="mt-2 text-sm text-center text-red-600">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from '../../utils/axios';

const router = useRouter();
const user_name = ref('');
const user_password = ref('');
const errorMessage = ref('');

const login = async () => {
  try {
    const response = await axios.post('/auth/login', {
      user_name: user_name.value,
      user_password: user_password.value,
    });
    localStorage.setItem('token', response.data.access_token);
    router.push('/home'); 
  } catch (error) {
    errorMessage.value = 'El inicio de sesión falló, intente nuevamente.';
  }
};


if (localStorage.getItem('token')) {
  router.push('/home');
}
</script>

<style scoped>
</style>
