<template>
  <div v-if="showLoader" class="flex justify-center w-full">
    <div class="grid h-full">
      <loader class="fixed top-1/2"></loader>
    </div>
  </div>

  <div v-else class="flex items-center justify-center min-h-screen bgcustom">
    <div class="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
      <img src="@/assets/logo.png" />

      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block mb-1 text-sm font-semibold" for="username">Nombre de usuario</label>
          <input type="text" id="username" v-model="userNickname" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        </div>
        <div class="mb-4">
          <label class="block mb-1 text-sm font-semibold" for="password">Contraseña</label>
          <input type="password" id="password" v-model="userPassword" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        </div>
        <button type="submit" class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Entrar</button>
      </form>
      <p v-if="errorMessage" class="mt-2 text-sm text-center text-red-600">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from '@/utils/axios';
import useAuthStore from '@/store/auth';
import loader from '@/components/LoaderCss.vue';

const router = useRouter();
const userNickname = ref('');
const userPassword = ref('');
const errorMessage = ref('');
const { proxy } = getCurrentInstance();
const authStore = useAuthStore();
const showLoader = ref(false);

const login = async () => {
  showLoader.value = true; // Mostrar loader al iniciar sesión
  try {
    const response = await axios.post('http://localhost:3000/auth/login', {
      user_nickname: userNickname.value,
      user_password: userPassword.value,
    });

    // Guardar el token y la información del usuario en el localStorage
    localStorage.setItem('token', response.data.access_token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    
    // Llamar a la acción login del store de autenticación
    authStore.login(response.data);

    // Redireccionar al dashboard
    router.push('/');
  } catch (error) {
    proxy.$swal.fire({
      title: 'Error',
      text: 'Nombre de usuario o contraseña incorrectos',
      icon: 'error',
    });
  } finally {
    showLoader.value = false;
  }
};

onMounted(() => {
  if (localStorage.getItem('token')) {
    router.push('/');
  }
});
</script>

<style>
.bgcustom {
  background-image: url("@/assets/AGAVE-AZUL.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
