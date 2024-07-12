<template>

  <div v-if="showloader" class="flex justify-center w-full">
    <div class=" grid h-full">
      <loader class="fixed top-1/2"></loader>
    </div>
  </div>


  <TransitionRoot v-else as="template" :show="open">
    <Dialog class="relative z-10" @close="emit('update-value', false)">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-20 text-left shadow-xl transition-all sm:my-20 sm:w-auto sm:p-6">
              <!-- <h1>{{ User.name }}</h1> -->
              <form @submit.prevent="Update">
                <div class="space-y-12">
                  <div class="border-b border-gray-900/10 pb-12">
                    <h2 class="text-base font-semibold leading-7 text-gray-900">Perfil</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600">Esta informacion sera vista por directivos y administrativos.
                    </p>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div class="sm:col-span-4">
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Nombre de
                          Usuario</label>
                        <div class="mt-2">
                          <div
                            class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <span
                              class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">AzulERP.com/</span>
                            <input v-model="User.user_nickname" type="text" name="username" id="username"
                              autocomplete="username"
                              class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="janesmith" />
                          </div>
                        </div>
                      </div>

                      <!-- subir imagen -->
                      <div class="col-span-full">
                        <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                        <div class="mt-2 sm:flex items-center gap-x-3">
                          <!-- avatar -->
                          <div
                            class=" mb-2 mt-5 relative w-20 h-20  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 object-cover flex justify-center">
                            <svg v-if="!fileUrl" class=" w-full text-gray-400 -left-1" fill="currentColor"
                              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd">
                              </path>
                            </svg>
                            <img v-if="fileUrl" :src="fileUrl" alt="Image preview"
                              class="absolute inset-0 w-full object-cover" />
                          </div>

                          <!-- dropzone para foto solo para pantallas mayores a sm-->
                          <div class="hidden sm:flex items-center justify-center sm:w-96 ">
                            <label for="dropzone-file"
                              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                    class="font-semibold">Click to
                                    upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX.
                                  800x400px)</p>
                                <p v-if="fileName" class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{ fileName }}
                                </p>
                              </div>
                              <input @change="inputImage" id="dropzone-file" type="file" class="hidden"
                                aria-describedby="file_input_help" />
                            </label>
                          </div>
                          <!--Image input para pantallas menores sm -->
                          <div class="sm:hidden">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input">Upload
                              file</label>
                            <input @change="inputImage"
                              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              aria-describedby="file_input_help" id="file_input" type="file">
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG
                              or GIF (MAX.
                              800x400px).</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="border-b border-gray-900/10 pb-12">
                    <h2 class="text-base font-semibold leading-7 text-gray-900">Informacion Personal</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600">Use una Direccion de correo donde pueda recibir y
                      enviar correos
                      electronicos.</p>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                        <div class="mt-2">
                          <input v-model="User.user_name" type="text" name="first-name" id="first-name"
                            autocomplete="given-name"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                      </div>

                      <div class="sm:col-span-3">
                        <label for="last-name"
                          class="block text-sm font-medium leading-6 text-gray-900">Apellido</label>
                        <div class="mt-2">
                          <input v-model="User.user_lastname" type="text" name="last-name" id="last-name"
                            autocomplete="family-name"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                      </div>

                      <div class="sm:col-span-4">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Direccion de correo
                          electronico</label>
                        <div class="mt-2">
                          <input v-model="User.user_email" id="email" name="email" type="email" autocomplete="email"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                      </div>
                      <div class="col-span-full">
                        <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Domicilio
                          (calle y
                          numero)</label>
                        <div class="mt-2">
                          <input v-model="User.user_address" type="text" name="street-address" id="street-address"
                            autocomplete="street-address"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                      </div>

                      <div class="sm:col-span-2 sm:col-start-1">
                        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Ciudad o
                          Municipio</label>
                        <div class="mt-2">
                          <input v-model="User.user_city" type="text" name="city" id="city"
                            autocomplete="address-level2"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                      </div>

                      <div class="sm:col-span-2">
                        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Estado</label>
                        <div class="mt-2">
                          <input v-model="User.user_state" type="text" name="region" id="region"
                            autocomplete="address-level1"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label for="role" class="block text-sm font-medium leading-6 text-gray-900">Role</label>
                    <Listbox as="div" v-model="User.user_level">
                      <ListboxLabel class="sr-only">Change published status</ListboxLabel>
                      <div class="relative">
                        <div class="inline-flex divide-x divide-indigo-700 rounded-md shadow-sm">
                          <div
                            class="inline-flex items-center gap-x-1.5 rounded-l-md bg-indigo-600 px-3 py-2 text-white shadow-sm">
                            <CheckIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
                            <p class="text-sm font-semibold">{{ User.user_level == 1 ? 'Administrativo' :
                              User.user_level == 2 ? 'Directivo' : 'Miembro' }}</p>
                          </div>
                          <ListboxButton
                            class="inline-flex items-center rounded-l-none rounded-r-md bg-indigo-600 p-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50">
                            <span class="sr-only">Change published status</span>
                            <ChevronDownIcon class="h-5 w-5 text-white" aria-hidden="true" />
                          </ListboxButton>
                        </div>

                        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                          leave-to-class="opacity-0">
                          <ListboxOptions
                            class="absolute left-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <ListboxOption as="template" v-for="option in publishingOptions" :key="option.value"
                              :value="option.value" v-slot="{ active, }">
                              <li
                                :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'cursor-default select-none p-4 text-sm']">
                                <div class="flex flex-col">
                                  <div class="flex justify-between">
                                    <p :class="User.user_level ? 'font-semibold' : 'font-normal'">{{ option.title }}</p>
                                    <span v-if="User.useer_level" :class="active ? 'text-white' : 'text-indigo-600'">
                                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  </div>
                                  <p :class="[active ? 'text-indigo-200' : 'text-gray-500', 'mt-2']">{{
                                    option.description }}</p>
                                </div>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </transition>
                      </div>
                    </Listbox>
                  </div>

                  <div>
                    <label for="puesto" class="block text-sm font-medium leading-6 text-gray-900">Puesto</label>
                    <div class="mt-2">
                      <input v-model="User.user_position" type="text" name="puesto" id="puesto"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Credito y Cobranza" />
                    </div>
                    <p class="mt-2 text-sm text-gray-500" id="email-description">Ingrese el puesto que desempeña el
                      usuario dentro de la empresa.</p>
                  </div>
                  <SwitchGroup as="div" class="flex items-center justify-between">
                    <span class="flex flex-grow flex-col">
                      <SwitchLabel as="span" class="text-sm font-medium leading-6 text-gray-900" passive>Habilita el
                        estado del
                        Usuario
                      </SwitchLabel>
                      <SwitchDescription as="span" class="text-sm text-gray-500">Presiona el Switch para que el usuario
                        este
                        disponible o dejalo apagado para no disponible
                      </SwitchDescription>
                    </span>
                    <Switch v-model="userActiveBoolean"
                      :class="[userActiveBoolean ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2']">
                      <span aria-hidden="true"
                        :class="[userActiveBoolean ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                    </Switch>
                  </SwitchGroup>

                </div>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                  <button type="button" @click="Delete(); sendValue()"
                    class="text-sm font-semibold leading-6 text-gray-900 hover:bg-red-600 hover: px-3 py-2 hover:rounded-md hover:text-white">Eliminar
                  </button>
                  <button v-on:click="sendValue()" type="submit"
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
                </div>
              </form>

            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import { ref, defineEmits, watchEffect, computed } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import ListBox from '@/components/ListBox.vue'
import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import DropZone from '@/components/DropZone.vue'
import axios from '@/utils/axios'
import Swal from 'sweetalert2';
import loader from '../components/LoaderCss.vue'

import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid';

let props = defineProps({
  open: Boolean,
  User: {}
})
const openModal = ref(false)
// const enabled = ref(false)
const emit = defineEmits(['update-value']);

const fileName = ref('');
const fileUrl = ref('');
const showloader = ref(false)

const sendValue = () => {
  emit('update-value', false)
}

const publishingOptions = ref([
  { title: 'Administrador', value: 1, description: 'El Administrador el es super Usuario de la aplicacion, capaz de ver todos los modulos de la aplicacion.', current: true },
  { title: 'Directivo', value: 2, description: 'El Directivo tiene la capacidad de aprobar requisiciones, ver analitica, accede a la informacion de los usuarios y tiene permiso de modificacion.', current: false },
  { title: 'Miembro', value: 3, description: 'El usuario Miembro tiene la capacidad de solicitar material, items, insumos, comestibles o cualquier elemento que pase como requision', current: false },

]);

function inputImage(event) {
  const file = event.target.files[0];
  if (file) {
    fileName.value = file.name;
    const reader = new FileReader();
    reader.onload = (e) => {
      fileUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

watchEffect(() => {
  if (props.User && props.User.user_image) {
    fileName.value = props.User.user_image;
  }
});

const userActiveBoolean = computed({
  get() {
    return props.User.user_active === 1;
  },
  set(value) {
    props.User.user_active = value ? 1 : 0;
  }
});

const Delete = async () => {
  showloader.value = true;
  let data = {
    user_active: 0
  }
  try {
    const response = await axios.put(`http://localhost:3000/users/${props.User.user_id}`, data);
    if (response) {
      Swal.fire({
        title: 'Correcto',
        text: 'Usuario Eliminado Correctamente',
        icon: 'success'
      });

    }
  } catch (error) {
    console.error('Error:', error);
    Swal.fire({
      title: 'Error',
      text: 'No se pudo Eliminar el Usuario',
      icon: 'error'
    });
  } finally {
    showloader.value = false

  }
}

const Update = async () => {
    console.log("holi")
    try {
      const response = await axios.put(`http://localhost:3000/users/${props.User.user_id}`, props.User, {
      });
      if (response) {
      Swal.fire({
        title: 'Correcto',
        text: 'Usuario Actualizado Correctamente',
        icon: 'success'
      });

    }

      console.log('Respuesta del servidor:', response.data);
    } catch(error) {
      console.error('Error al actualizar el usuario',error);
      Swal.fire({
          title: 'Error',
          text: 'No se pudo Actulizar el usuario',
          icon: 'error'
        });
    } finally {
      console.log('holi fin')
    }

  }
</script>
