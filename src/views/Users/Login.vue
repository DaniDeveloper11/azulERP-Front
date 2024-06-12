<template>
  <div class="flex items-center justify-center min-h-screen bgcustom">
    <div class="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
      <img src="../../assets/logo.png" />
     
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block mb-1 text-sm font-semibold" for="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            v-model="user_nickname"
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
// import { useAuthStore } from '@/store';
import { ref, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import axios from '../../utils/axios';
import useAuthStore from '../../store/auth' // Importa el store de autenticación



const router = useRouter();
const user_nickname = ref('');
const user_password = ref('');
const errorMessage = ref('');
const { proxy } = getCurrentInstance();
const authStore = useAuthStore();

const login = async () => {
  try {
    const response = await axios.post('http://localhost:3000/auth/login', {
      user_nickname: user_nickname.value,
      user_password: user_password.value,
    });
    localStorage.setItem('token', response.data.access_token);
    authStore.login(response.data.user); //utiliza la accion del login el store de autentificacion
    console.log(response.data)//solo devuelve el token
    router.push('/');
  } catch (error) {
    proxy.$swal.fire({
      title: 'Error',
      text: 'Nombre de usuario o contraseña incorrectos',
      icon: 'error'
    });
  }
};

if (localStorage.getItem('token')) {
  router.push('/');
}
</script>
<style>
.bgcustom {
  background-image: url("../../assets/AGAVE-AZUL.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
