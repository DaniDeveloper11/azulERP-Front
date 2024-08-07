<template>
  <div v-if="showLoader" class="flex justify-center w-full">
    <div class="grid h-full">
      <loader class="fixed top-1/2"></loader>
    </div>
  </div>

  <div v-else class="flex justify-center min-h-screen bgcustom">
    <div class="w-11/12 max-w-md px-3 py-8  space-y-3 rounded-lg shadow-md absolute top-36">
      <!-- <img src="@/assets/logo.png" /> -->

      <form @submit.prevent="login">
        <div class="bg-white mb-4 flex border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 items-center pl-3 gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-blue-200 ">
          <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
          </svg>
          <!-- <label class="block mb-1 text-sm font-semibold" for="username">Nombre de usuario</label> -->
          <input placeholder="Username" type="text" id="username" v-model="userNickname" class="bg-blue-200 text-blue-600a w-full px-4 py-2 border rounded-full focus:outline-none ring-2 ring-blue-400" required />
        </div>
        <div class=" bg-white mb-4 flex border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 items-center pl-3 gap-1">
          <!-- <label class="block mb-1 text-sm font-semibold" for="password">Contraseña</label> -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-blue-200">
          <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
          </svg>

          <input placeholder="Password" type="password" id="password" v-model="userPassword" class="bg-blue-200 w-full px-4 py-2 border rounded-full focus:outline-none ring-2 ring-blue-400" required />
        </div>
        <button type="submit" class="w-full px-4 py-2 text-blue-300 font-bold bg-white rounded-full hover:bg-blue-600">Entrar</button>
      </form>
      <p v-if="errorMessage" class="mt-2 text-sm text-center text-red-600">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted, resolveComponent } from 'vue';
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
    const response = await axios.post('/auth/login', {
      user_nickname: userNickname.value,
      user_password: userPassword.value,
    });

    if(response.data.user.user_active == 0){
      proxy.$swal.fire({
        title: 'Error',
        text: 'Usuario desactivado',
        icon: 'error',
      });
      userNickname.value = '';
      userPassword.value = '';
    }
    else{
      authStore.login(response.data);

      router.push('/');
    }
  } 
  catch (error) {
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