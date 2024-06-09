<template>


  <div v-if="showloader" class="flex justify-center w-full">
    <div class=" grid h-full">
      <loader class="fixed top-1/2"></loader>

    </div>
  </div>


  <!-- Settings forms -->
  <div v-else class="divide-y divide-black/5">
    <div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
      <div>
        <h2 class="text-base font-semibold leading-7 text-black">Informacion Personal</h2>
        <p class="mt-1 text-sm leading-6 text-gray-400">Usa un correo personal donde puedas recibir correos.</p>
      </div>

      <form class="md:col-span-2">
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
          <div class="col-span-full flex items-center gap-x-8">
            <img
              src="/src/assets/yo.jfif"
              alt="" class="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover" />
            <div>
              <button v-on:click="openModal = true" type="button"
                class="rounded-md bg-black/10 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/20">Cambiar
                Foto</button>
              <p class="mt-2 text-xs leading-5 text-gray-400">JPG, GIF or PNG. 1MB max.</p>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-black">Nombre</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                class="block w-full rounded-md border-0 bg-black/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-black">Apellido</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                class="block w-full rounded-md border-0 bg-black/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="email" class="block text-sm font-medium leading-6 text-black">Direccion de Correo</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email"
                class="block w-full rounded-md border-0 bg-black/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="username" class="block text-sm font-medium leading-6 text-black">Nombre de Usuario</label>
            <div class="mt-2">
              <div
                class="flex rounded-md bg-black/5 ring-1 ring-inset ring-black/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <span class="flex select-none items-center pl-3 text-gray-400 sm:text-sm">AzulERP.com/</span>
                <input type="text" name="username" id="username" autocomplete="username"
                  class="flex-1 border-0 bg-transparent py-1.5 pl-1 text-black focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith" />
              </div>
            </div>
          </div>

        </div>

        <div class="mt-8 flex">
          <button v-on:click="showMessage = true; dismissMessage()" type="button"
            class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Guardar</button>
        </div>
      </form>
    </div>

    <div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
      <div>
        <h2 class="text-base font-semibold leading-7 text-black">Change password</h2>
        <p class="mt-1 text-sm leading-6 text-gray-400">Update your password associated with your account.</p>
      </div>

      <form class="md:col-span-2">
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
          <div class="col-span-full">
            <label for="current-password" class="block text-sm font-medium leading-6 text-black">Contraseña
              Actual</label>
            <div class="mt-2">
              <input id="current-password" name="current_password" type="password" autocomplete="current-password"
                class="block w-full rounded-md border-0 bg-black/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="new-password" class="block text-sm font-medium leading-6 text-black">Nueva Contraseña</label>
            <div class="mt-2">
              <input id="new-password" name="new_password" type="password" autocomplete="new-password"
                class="block w-full rounded-md border-0 bg-black/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="confirm-password" class="block text-sm font-medium leading-6 text-black">Confirma
              Contraseña</label>
            <div class="mt-2">
              <input id="confirm-password" name="confirm_password" type="password" autocomplete="new-password"
                class="block w-full rounded-md border-0 bg-black/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>

        <div class="mt-8 flex">
          <button v-on:click="showMessage = true; dismissMessage()" type="button"
            class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Guardar</button>
        </div>
      </form>
    </div>
    <div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
      <div>
        <h2 class="text-base font-semibold leading-7 text-black">Borrar Contraseña</h2>
        <p class="mt-1 text-sm leading-6 text-gray-400">Puedes borrar tu cuenta de usuario justo aqui. Esta accion no es
          reversible. Toda la Informacionrelevante sera borrada permanentemente</p>
      </div>

      <form class="flex items-start md:col-span-2">
        <button type="submit"
          class="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-red-400">Borrar mi
          cuenta de usuario</button>
      </form>
    </div>
  </div>
  <DropZone v-bind:open="openModal" @close="openModal = false"></DropZone>
  <SuccesMessege v-bind:message="'Usuario Editado Correctamente'" v-show="showMessage" class="fixed bottom-72 z-40">
  </SuccesMessege>

</template>

<script setup>
import { ref,onMounted } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import DropZone from '@/components/DropZone.vue'
import SuccesMessege from '@/components/SuccesMessege.vue'
import loader from '@/components/LoaderCss.vue'

const showMessage = ref(false)
const openModal = ref(false)
const showloader = ref(true)

// Funcion para cambiar valor del loader
const setLoader = () => {
  setTimeout(() =>{
    showloader.value = false
  },3000)
}

onMounted(async () => {
  setLoader();
})

const dismissMessage = () => {
  setTimeout(() => {
    showMessage.value = false
  }, 3000)
}

</script>
