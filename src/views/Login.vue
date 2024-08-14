<template>
  <div v-if="showLoader" class="flex justify-center w-full">
    <div class="grid h-full">
      <loader class="fixed top-1/2"></loader>
    </div>
  </div>

  <div v-else class="flex justify-center min-h-screen bgcustom">
    <div class="w-11/12 max-w-md px-3 py-8  space-y-3 rounded-lg shadow-md absolute top-10 sm:top-4">
      <img src="@/assets/welcome.png"  class="size-max"/>

      <form @submit.prevent="login" >
        <div class="bg-white mb-4 mt-6 flex border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 items-center pl-3 gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-blue-200 stroke-blue-400">
          <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
          </svg>
          <!-- <label class="block mb-1 text-sm font-semibold" for="username">Nombre de usuario</label> -->
          <input placeholder="Username" type="text" id="username" v-model="userNickname" class="bg-blue-200 text-blue-600a w-full px-4 py-2 border rounded-full focus:outline-none ring-2 ring-blue-400" required />
        </div>
        <div class=" bg-white mb-4 flex border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 items-center pl-3 gap-1">
          <!-- <label class="block mb-1 text-sm font-semibold" for="password">Contraseña</label> -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-blue-200 stroke-blue-400">
          <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
          </svg>

          <input placeholder="Password" type="password" id="password" v-model="userPassword" class="bg-blue-200 w-full px-4 py-2 border rounded-full focus:outline-none ring-2 ring-blue-400" required />
        </div>
        <button type="submit" class="hidden sm:block w-full px-4 py-2 shadow-md text-blue-300 stroke-blue-400 font-bold bg-white rounded-full hover:bg-blue-800 hover:text-white">Entrar</button>
        <div class="flex mt-8 justify-center sm:hidden">
          <button type="submit" class=" rounded-full px-4 py-4 bg-white p-1 text-blue-200 stroke-blue-400 font-bold shadow-sm hover:text-white focus-visible:text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
          </svg>
        </button>
        </div>
        

      </form>
      <p v-if="errorMessage" class="mt-2 text-sm text-center text-red-600">{{ errorMessage }}</p>

      <div class="w-full">
        <div class="flex mt-8 justify-end gap-2">
          
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-8 h-8" viewBox="0,0,256,256">
          <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path></g></g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-8 h-8" viewBox="0,0,256,256">
          <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path></g></g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="h-8 w-8" viewBox="0,0,256,256">
          <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M28,6.937c-0.957,0.425 -1.985,0.711 -3.064,0.84c1.102,-0.66 1.947,-1.705 2.345,-2.951c-1.03,0.611 -2.172,1.055 -3.388,1.295c-0.973,-1.037 -2.359,-1.685 -3.893,-1.685c-2.946,0 -5.334,2.389 -5.334,5.334c0,0.418 0.048,0.826 0.138,1.215c-4.433,-0.222 -8.363,-2.346 -10.995,-5.574c-0.458,0.788 -0.721,1.704 -0.721,2.683c0,1.85 0.941,3.483 2.372,4.439c-0.874,-0.028 -1.697,-0.268 -2.416,-0.667c0,0.023 0,0.044 0,0.067c0,2.585 1.838,4.741 4.279,5.23c-0.447,0.122 -0.919,0.187 -1.406,0.187c-0.343,0 -0.678,-0.034 -1.003,-0.095c0.679,2.119 2.649,3.662 4.983,3.705c-1.825,1.431 -4.125,2.284 -6.625,2.284c-0.43,0 -0.855,-0.025 -1.273,-0.075c2.361,1.513 5.164,2.396 8.177,2.396c9.812,0 15.176,-8.128 15.176,-15.177c0,-0.231 -0.005,-0.461 -0.015,-0.69c1.043,-0.753 1.948,-1.692 2.663,-2.761z"></path></g></g>
          </svg>

        </div>
      </div>
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