<template>
    <form submit.prevent="register">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Agregar Proveedor</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Esta informacion sera vista por Directivos y Administrativos.
          </p>
  
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Nombre del Proveedor o Razon Social</label>
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input v-model="supplier_name" type="text" name="supplier_name" id="suppplier_name" autocomplete="name"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith" required />
                </div>
              </div>
            </div>
          </div>

          
        <div>
<<<<<<< HEAD
          <label for="kind_supplier" class="block text-sm font-medium leading-6 text-gray-900">Tipo de proveedor</label>
          <ListBox id="kind_supplier" v-bind:publishing-options="publishingOptions" @update:selected="handleSelectedUpdate"
=======
          <label for="role" class="block text-sm font-medium leading-6 text-gray-900">Role</label>
          <ListBox id="role" v-bind:publishing-options="publishingOptions" @update:selected="handleSelectedUpdate"
>>>>>>> 0ca5b2e285f0220c52ba024433532a296a4eb47e
            required>
          </ListBox>
        </div>
        </div>
  
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Informacion de contacto</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Use una Direccion de correo donde pueda recibir y enviar correos
            electronicos.</p>
  
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
  
            <div class="sm:col-span-2">
              <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Numero de
                Telefono</label>
              <input v-model="user_phone" type="tel" id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678" />
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
                <input v-model="state" type="text" name="region" id="region" autocomplete="address-level1" required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-2 sm:col-start-1">
              <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Ciudad o Municipio</label>
              <div class="mt-2">
                <input type="text" name="city" id="city" autocomplete="address-level2" required
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
  

        <div class="border-b border-gray-900/10 pb-12">

          <h2 class="text-base font-semibold leading-7 text-gray-900">Informacion Proveedor</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Use una Direccion de correo donde pueda recibir y enviar correos</p>


    </div>
  
        <div>
          <label for="puesto" class="block text-sm font-medium leading-6 text-gray-900">Puesto</label>
          <div class="mt-2">
            <input v-model="user_department" type="text" name="puesto" id="puesto"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Credito y Cobranza" />
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
        <RouterLink to="/users" type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</RouterLink>
        <button type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
    </form>
  
    <!-- <DropZone v-bind:open="openModal" @close="openModal = false"></DropZone> -->
    <SuccesMessege v-bind:message="'Usuario fue añadido con exito'" v-if="showMessage" class="fixed bottom-72 z-40">
    </SuccesMessege>
  
  </template>
  
  <script setup>
  // 
  import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
  import { reactive, ref, } from 'vue'
  import ListBox from '@/components/ListBox.vue'
  import SuccesMessege from '@/components/SuccesMessege.vue'
  import loader from '@/components/LoaderCss.vue'
  import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue'
  import axios from '@/utils/axios'
  
  
  const enabled = ref(false)
  let showMessage = ref(false)
  
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
  const user_email = ref('')
  const errorMessage = ref('');
  const user_rol = ref('');
  const user_status = ref(true);
  
  const confirm_password = ref('');
  const fileName = ref('');
  const fileUrl = ref('');
  
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
        user_email: user_email.value,
        user_rol: user_rol.value,
        user_status: user_status.value
      });
      // router.push('/');
      showMessage = true;
      dismissMessage();
  
    } catch (error) {
      errorMessage.value = 'Fallo el registro del usuario';
    }
  
  };
  
  // Roles de la aplicacion
  const publishingOptions = ref([
<<<<<<< HEAD
    { title: 'EMPRESA', description: 'El Administrador el es super Usuario de la aplicacion, capaz de ver todos los modulos de la aplicacion.', current: true },
    { title: 'INDIVIDUAL', description: 'El Directivo tiene la capacidad de aprobar requisiciones, ver analitica, accede a la informacion de los usuarios y tiene permiso de modificacion.', current: false },
=======
    { title: 'Administrador', description: 'El Administrador el es super Usuario de la aplicacion, capaz de ver todos los modulos de la aplicacion.', current: true },
    { title: 'Directivo', description: 'El Directivo tiene la capacidad de aprobar requisiciones, ver analitica, accede a la informacion de los usuarios y tiene permiso de modificacion.', current: false },
>>>>>>> 0ca5b2e285f0220c52ba024433532a296a4eb47e
    { title: 'Miembro', description: 'El usuario Miembro tiene la capacidad de solicitar material, items, insumos, comestibles o cualquier elemento que pase como requision', current: false },
  
  ]);
  
  // Funcion para recibir el rol seleccionado
  function handleSelectedUpdate(selectedOption) {
    console.log('Selected option:', selectedOption);
    user_rol.value = selectedOption;
  }
  
  
  // Funsion para agregar imagen desde el evento del input tipo file
  function inputImage(event) {
    const file = event.target.files[0];
    if (file) {
      user_image.value = file,
        fileName.value = file.name
  
      const reader = new FileReader();
      reader.onload = (e) => {
        fileUrl.value = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
  // Funsion para quitrar el mensaje de success despoues de 3 segundos
  const dismissMessage = () => {
    setTimeout(() => {
      showMessage.value = false
    }, 3000)
  }
  
  </script>