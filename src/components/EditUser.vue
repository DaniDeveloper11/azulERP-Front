<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="open = false">
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
                <form>
                  <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                      <h2 class="text-base font-semibold leading-7 text-gray-900">Perfil</h2>
                      <p class="mt-1 text-sm leading-6 text-gray-600">Esta informacion sera vista por Directivos y
                        Administrativos.
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
                              <input v-model="User.user_nickname" type="text" name="username" id="username" autocomplete="username"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="janesmith" />
                            </div>
                          </div>
                        </div>

                        <div class="col-span-full">
                          <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                          <div class="mt-2 flex items-center gap-x-3">
                            <UserCircleIcon class="h-12 w-12 text-gray-300" aria-hidden="true" />
                            <button v-on:click="openModal = true" type="button"
                              class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cambiar</button>
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
                            <input v-model="User.user_name" type="text" name="first-name" id="first-name" autocomplete="given-name"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>

                        <div class="sm:col-span-3">
                          <label for="last-name"
                            class="block text-sm font-medium leading-6 text-gray-900">Apellido</label>
                          <div class="mt-2">
                            <input v-model="User.user_lastname" type="text" name="last-name" id="last-name" autocomplete="family-name"
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

                        <div class="sm:col-span-3">
                          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Pais</label>
                          <div class="mt-2">
                            <select v-model="User.constry" id="country" name="country" autocomplete="country-name"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-span-full">
                          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Domicilio
                            (calle y
                            numero)</label>
                          <div class="mt-2">
                            <input v-model="User.user_addres" type="text" name="street-address" id="street-address" autocomplete="street-address"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>

                        <div class="sm:col-span-2 sm:col-start-1">
                          <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Ciudad o
                            Municipio</label>
                          <div class="mt-2">
                            <input v-model="User.city" type="text" name="city" id="city" autocomplete="address-level2"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>

                        <div class="sm:col-span-2">
                          <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Estado</label>
                          <div class="mt-2">
                            <input v-model="User.state" type="text" name="region" id="region" autocomplete="address-level1"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>

                        <div class="sm:col-span-2">
                          <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">Codigo
                            Postal</label>
                          <div class="mt-2">
                            <input v-model="User.cp" type="text" name="postal-code" id="postal-code" autocomplete="postal-code"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label for="role" class="block text-sm font-medium leading-6 text-gray-900">Role</label>
                      <ListBox v-model="User.role" id="role" v-bind:publishing-options="publishingOptions"></ListBox>
                    </div>

                    <div>
                      <label for="puesto" class="block text-sm font-medium leading-6 text-gray-900">Puesto</label>
                      <div class="mt-2">
                        <input v-model="User.user_department" type="text" name="puesto" id="puesto"
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
                      <Switch v-model="enabled"
                        :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2']">
                        <span aria-hidden="true"
                          :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                      </Switch>
                    </SwitchGroup>

                  </div>

                  <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button  type="button" class="text-sm font-semibold leading-6 text-gray-900 hover:bg-red-600 hover: px-3 py-2 hover:rounded-md hover:text-white">Eliminar
                    </button>
                    <button v-on:click="sendValue()" type="button"
                      class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
                  </div>
                </form>
                <DropZone v-bind:open="openModal" @close="openModal = false"></DropZone>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import { ref,defineEmits } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import ListBox from '@/components/ListBox.vue'
import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import DropZone from '@/components/DropZone.vue'


defineProps({
  open: Boolean,
  User: {}
})
const openModal = ref(false)
const enabled = ref(false)
const emit = defineEmits(['update-value']);

const sendValue = () => {
  emit('update-value',true)
}

const publishingOptions = ref([
    { title: 'Administrador', description: 'El Administrador el es super Usuario de la aplicacion, capaz de ver todos los modulos de la aplicacion.', current: true },
    { title: 'Directivo', description: 'El Directivo tiene la capacidad de aprobar requisiciones, ver analitica, accede a la informacion de los usuarios y tiene permiso de modificacion.', current: false },
]);


</script>
