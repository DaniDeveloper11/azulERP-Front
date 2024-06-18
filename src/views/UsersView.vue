<template>
  <div v-if="showloader" class="flex justify-center w-full">
    <div class=" grid h-full">
      <loader class="fixed top-1/2"></loader>

    </div>
  </div>

  <div v-else class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Usuarios</h1>
        <p class="mt-2 text-sm text-gray-700">Lista de Usuarios donde se especifica, nombre, puesto, status, role.
          Ademas puedes crear un nuevo usuario, editarlo y hasta eliminarlo </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <RouterLink to="/adduser" type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Añadir Usuario</RouterLink>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Nombre
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Puesto</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">status</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="user in users" :key="user.user_id">
                <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div class="flex items-center">
                    <div class="h-11 w-11 flex-shrink-0">
                      <span class="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                        <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <!-- <img class="h-11 w-11 rounded-full" :src="person.image" alt="" /> -->
                    </div>
                    <div class="ml-4">
                      <div class="font-medium text-gray-900">{{ user.user_name }} {{ user.user_lastname }}</div>
                      <div class="mt-1 text-gray-700">{{ user.user_nickname }}</div>
                      <div class="mt-1 text-gray-500">{{ user.user_email }}</div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <!-- <div class="text-gray-900">{{ person.user_role }}</div> -->
                  <div class="mt-1 text-gray-500">{{ user.user_position }}</div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <span :class="user.user_active == 1 ? 'text-green-700 bg-green-100' : 'text-red-500 bg-red-100'"
                    class="inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-green-600/20">{{
                      user.user_active == 1 ? 'Activo' : 'Inactivo' }}</span>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ user.user_level == 1 ?
                  'Administrativo' : user.user_level == 2 ? 'Directivo': 'Miembro' }}</td>
                <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <button v-on:click="editOpen = true; emptyPerson = user;"
                    class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, {{ user.user_name
                      }}</span></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal para editar usuario selecionado 
        props = emptyuser: objeto con datos del usuario
                editOpen: bandera para abrir o cerrar el modal
      -->
  <EditUserModal @update-value="handleUpdate" v-bind:open="editOpen" v-bind:User="emptyPerson"
    @close="editOpen = false"></EditUserModal>
  <SuccesMessege v-show="showMessage" class="fixed bottom-72 z-40"></SuccesMessege>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EditUserModal from '../components/EditUser.vue'
import SuccesMessege from '../components/SuccesMessege.vue';
import loader from '@/components/LoaderCss.vue'
import axios from '../utils/axios';
const showloader = ref(false)
let showMessage = ref('')

// Funcion para cambiar valor del loader
const setLoader = () => {
  setTimeout(() => {
    showloader.value = false
  }, 3000)
}

onMounted(async () => {
  // setLoader();
  getUsers();

})

const handleUpdate = (value) => {
  showMessage.value = value;
  setTimeout(() => {
    showMessage.value = false
  }, 3000)
};


const users = ref([]);

const emptyPerson = ref({
  user_name: '',
  user_lastname: '',
  user_nickname: '',
  user_phone: null,
  user_password: '',
  user_addres: '',
  state: '',
  user_department: '',
  user_email: '',
  role: '',
  user_image:
    '',
  user_state: null,
  constry: '',
  city: '',
  cp: null,
})

const editOpen = ref(false)

// const handleUpdate = (value) => {
// showMessage.value = value;
// };
const getUsers = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get('http://localhost:3000/users', {
      Authorization: `Bearer ${token}`
    });
    users.value = response.data;
    console.log(response.data) // Suponiendo que la API devuelve un array de socios
  } catch (error) {
    console.log('algo salio mal')
    // proxy.$swal.fire({
    //   title: 'Error',
    //   text: 'Nombre de usuario o contraseña incorrectos',
    //   icon: 'error'
    // });
  }
};


</script>
