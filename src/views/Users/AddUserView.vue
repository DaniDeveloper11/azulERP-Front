<template>
  <div v-if="showloader" class="flex justify-center w-full">
    <div class=" grid h-full">
      <loader class="fixed top-1/2"></loader>
    </div>
  </div>

  <form v-else @submit.prevent="register">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Perfil</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Esta informacion sera vista por Directivos y Administrativos.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Nombre de Usuario</label>
            <div class="mt-2">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">AzulERP.com/</span>
                <input v-model="user_nickname" type="text" name="username" id="username" autocomplete="username"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="usuario" required />
              </div>
            </div>
          </div>
          <!-- password -->
          <div class="sm:col-span-4 max-w-md">
            <label for="password"
              class="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
            <input v-model="user_password" type="password" id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••" required />
          </div>
          <div class="sm:col-span-4 max-w-md">
            <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900">Confirma
              contraseña</label>
            <input v-model="confirm_password" type="password" id="confirm_password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••" required />
            <p v-if="user_password && confirm_password && user_password != confirm_password"
              class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">La Contraseña no
                incorrecta</span> debe coinsidir con la anterior.</p>
            <p v-if="user_password && confirm_password && user_password === confirm_password"
              class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Contraseña
                correcta</span>.</p>

          </div>

          <!-- subir imagen -->
          <div class="col-span-full">
            <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
            <div class="mt-2 sm:flex items-center gap-x-3">
              <!-- avatar -->
              <div class=" mb-2 mt-5 relative w-20 h-20  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 object-cover flex justify-center">
                <svg v-if="!fileUrl" class=" w-full text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
                  </path>
                </svg>
              <img v-if="fileUrl" :src="fileUrl" alt="Image preview" class="absolute inset-0 w-full object-cover" />
              </div>

              <!-- dropzone para foto solo para pantallas mayores a sm-->
              <div class="hidden sm:flex items-center justify-center sm:w-96 ">
                <label for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to
                        upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    <p v-if="fileName" class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{ fileName }}</p>
                  </div>
                  <input @change="inputImage" id="dropzone-file" type="file" class="hidden"
                    aria-describedby="file_input_help" />
                </label>
              </div>
              <!--Image input para pantallas menores sm -->
              <div class="sm:hidden">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
                  file</label>
                <input @change="inputImage"
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help" id="file_input" type="file">
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX.
                  800x400px).</p>
              </div>
              <p v-if="errorMessage" class="mt-1 text-sm text-red-600 dark:text-red-500">{{ errorMessage }}</p>
            </div>
          </div>

        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Informacion Personal</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Use una Direccion de correo donde pueda recibir y enviar correos
          electronicos.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
            <div class="mt-2">
              <input v-model="user_name" type="text" name="first-name" id="first-name" autocomplete="given-name"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Apellido</label>
            <div class="mt-2">
              <input v-model="user_lastname" type="text" name="last-name" id="last-name" autocomplete="family-name"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Numero de
              Telefono</label>
            <input v-model="user_phone" type="number" id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678" required />
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Direccion de correo
              electronico</label>
            <div class="mt-2">
              <input v-model="user_email" id="email" name="email" type="email" autocomplete="email" required
                placeholder="nombre@gmail.com"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Estado</label>
            <div class="mt-2">
              <select v-model="user_state" required class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <option value="" disabled selected>Seleccione un estado</option>
                <option v-for="estado in estados" :key="estado.abreviatura" :value="estado.abreviatura">
                  {{ estado.nombre }}
                </option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Ciudad o Municipio</label>
            <div class="mt-2">
              <input v-model="user_city" type="text" name="city" id="city" autocomplete="address-level2" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Domicilio (calle y
              numero)</label>
            <div class="mt-2">
              <input v-model="user_address" type="text" name="street-address" id="street-address" required
                autocomplete="street-address"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <label for="role" class="block text-sm font-medium leading-6 text-gray-900">Role</label>
        <ListBox id="role" v-bind:publishing-options="publishingOptions" @update:selected="handleSelectedUpdate"
          required>
        </ListBox>
      </div>

   <div>
        <label for="department" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Departamento</label>
        <div class="mt-2 sm:col-span-2 sm:mt-0">
          <select v-model="user_department" id="department" name="department" @change="getSubdepartaments"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option value="" disabled selected>Seleccione un departamento</option>
            <option v-for="depa in departments" :key="depa.id" :value="depa.id">{{ depa.name }}</option>
          </select>
        </div>
      </div>
      <div>
        <label for="puesto" class="block text-sm font-medium leading-6 text-gray-900">Puesto</label>
        <div class="mt-2">
          <input v-model="user_position" type="text" name="puesto" id="puesto"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Credito y Cobranza" required />
        </div>
        <p class="mt-2 text-sm text-gray-500" id="email-description">Ingrese el puesto que desempeña el usuario dentro
          de la empresa.</p>
      </div>
      <SwitchGroup as="div" class="flex items-center justify-between">
        <span class="flex flex-grow flex-col">
          <SwitchLabel as="span" class="text-sm font-medium leading-6 text-gray-900" passive>Habilita el estado del
            Usuario
          </SwitchLabel>
          <SwitchDescription as="span" class="text-sm text-gray-500">Presiona el Switch para que el usuario este
            disponible o dejalo apagado para no disponible
          </SwitchDescription>
        </span>
        <Switch v-model="user_status"
          :class="[user_status ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2']">
          <span aria-hidden="true"
            :class="[user_status ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
        </Switch>
      </SwitchGroup>

    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <RouterLink to="/users" type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancelar</RouterLink>
      <button type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
    </div>
  </form>

</template>

<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid';
import { reactive, ref, onBeforeMount, onMounted, computed } from 'vue';
import ListBox from '@/components/ListBox.vue';
import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue';
import axios from '@/utils/axios';
import Swal from 'sweetalert2';
import loader from '../../components/LoaderCss.vue';

const showloader = ref(false);
const user_name = ref('');
const user_lastname = ref('');
const user_nickname = ref('');
const user_phone = ref('');
const user_password = ref('');
const confirm_password = ref('');
const user_address = ref('');
const user_state = ref('');
const user_city = ref('');
const user_create = ref('');
const user_image = ref('');
const user_department = ref('');
const user_email = ref('');
const user_level = ref('');
const user_position = ref('');
const user_status = ref(true);
const fileName = ref(''); 
const fileUrl = ref(''); 
const showMessage = ref(false); 
const errorMessage = ref('');

const register = async () => {
  showloader.value = true; // Mostrar loader al iniciar la consulta
  try {
    const response = await axios.post('/auth/register', {
      user_name: user_name.value,
      user_lastname: user_lastname.value,
      user_nickname: user_nickname.value,
      user_phone: user_phone.value,
      user_password: user_password.value,
      user_address: user_address.value,
      user_state: user_state.value,
      user_city: user_city.value,
      user_image: user_image.value,
      user_department: user_department.value,
      user_email: user_email.value,
      user_level: user_level.value,
      user_position: user_position.value,
      user_active: user_status.value ? 1 : 0,
    });
    if (response) {
      Swal.fire({
        title: 'Correcto',
        text: 'Usuario Guardado Correctamente',
        icon: 'success',
      });
    }
  } catch (error) {
    console.error('Error:', error);
    Swal.fire({
      title: 'Error',
      text: 'No se pudo crear el Usuario',
      icon: 'error',
    });
  } finally {
    showloader.value = false;
    resetForm();
  }
};

const publishingOptions = ref([
  { title: 'Administrador', value: 1, description: 'El Administrador es el super Usuario de la aplicación, capaz de ver todos los módulos de la aplicación.', current: true },
  { title: 'Directivo', value: 2, description: 'El Directivo tiene la capacidad de aprobar requisiciones, ver analítica, acceder a la información de los usuarios y tiene permiso de modificación.', current: false },
  { title: 'Miembro', value: 3, description: 'El usuario Miembro tiene la capacidad de solicitar material, items, insumos, comestibles o cualquier elemento que pase como requisición', current: false },
]);

const estados = ref([
  { nombre: "Aguascalientes", abreviatura: "AGS" },
  { nombre: "Baja California", abreviatura: "BC" },
  { nombre: "Baja California Sur", abreviatura: "BCS" },
  { nombre: "Campeche", abreviatura: "CAMP" },
  { nombre: "Chiapas", abreviatura: "CHIS" },
  { nombre: "Chihuahua", abreviatura: "CHIH" },
  { nombre: "Ciudad de México", abreviatura: "CDMX" },
  { nombre: "Coahuila", abreviatura: "COAH" },
  { nombre: "Colima", abreviatura: "COL" },
  { nombre: "Durango", abreviatura: "DGO" },
  { nombre: "Estado de México", abreviatura: "MEX" },
  { nombre: "Guanajuato", abreviatura: "GTO" },
  { nombre: "Guerrero", abreviatura: "GRO" },
  { nombre: "Hidalgo", abreviatura: "HGO" },
  { nombre: "Jalisco", abreviatura: "JAL" },
  { nombre: "Michoacán", abreviatura: "MICH" },
  { nombre: "Morelos", abreviatura: "MOR" },
  { nombre: "Nayarit", abreviatura: "NAY" },
  { nombre: "Nuevo León", abreviatura: "NL" },
  { nombre: "Oaxaca", abreviatura: "OAX" },
  { nombre: "Puebla", abreviatura: "PUE" },
  { nombre: "Querétaro", abreviatura: "QRO" },
  { nombre: "Quintana Roo", abreviatura: "QROO" },
  { nombre: "San Luis Potosí", abreviatura: "SLP" },
  { nombre: "Sinaloa", abreviatura: "SIN" },
  { nombre: "Sonora", abreviatura: "SON" },
  { nombre: "Tabasco", abreviatura: "TAB" },
  { nombre: "Tamaulipas", abreviatura: "TAMPS" },
  { nombre: "Tlaxcala", abreviatura: "TLAX" },
  { nombre: "Veracruz", abreviatura: "VER" },
  { nombre: "Yucatán", abreviatura: "YUC" },
  { nombre: "Zacatecas", abreviatura: "ZAC" },
]);


function handleSelectedUpdate(selectedOption) {
  console.log('Selected option:', selectedOption);
  user_level.value = selectedOption;
}


// Funsion para agregar imagen desde el evento del input tipo file
const inputImage = (event) => {
  const file = event.target.files[0];
  if (file) {
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']; // Extensiones válidas
    if (validExtensions.includes(file.type)) {
      fileName.value = file.name;
      user_image.value = fileName.value;
      errorMessage.value = ''; // Clear the error message if file is valid

      const reader = new FileReader();
      reader.onload = (e) => {
        fileUrl.value = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      errorMessage.value = 'Por favor, seleccione un archivo de imagen válido (jpg, jpeg, png, gif).';
    }
  }
};

const dismissMessage = () => {
  setTimeout(() => {
    showMessage.value = false;
  }, 3000);
};

const subdepartments = ref([]);
const departments = ref([]);

const getSubdepartaments = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get(`/subdepartments/group/${user_department.value}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    subdepartments.value = response.data;
  } catch (error) {
    console.error('Error al obtener subdepartamentos:', error);
  }
};

const getDepartments = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get('/departments', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    departments.value = response.data;
  } catch (error) {
    console.log('Error al obtener departamentos:', error);
  }
};

onMounted(() => {
  getDepartments();
});

const resetForm = () => {
  user_name.value = '';
  user_lastname.value = '';
  user_nickname.value = '';
  user_phone.value = '';
  user_password.value = '';
  user_address.value = '';
  user_state.value = '';
  user_city.value = '';
  user_create.value = '';
  user_image.value = '';
  user_department.value = '';
  user_email.value = '';
  user_level.value = '';
  user_position.value = '';
  user_status.value = true;
  confirm_password.value = '';
  fileName.value = ''; 
  fileUrl.value = ''; 
  errorMessage.value = '';
};
</script>

