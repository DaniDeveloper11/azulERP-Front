<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="open = false">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full" enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
              leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <h2 id="slide-over-heading" class="text-base font-semibold leading-6 text-gray-900">Mi Usuario
                      </h2>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button"
                          class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 sfocus:ring-2 focus:ring-indigo-500"
                          @click="closeModal()">
                          <span class="absolute -inset-2.5" />
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- Main -->
                  <div>
                    <div class="pb-1 sm:pb-6">
                      <div>
                        <!-- <div class="relative h-40 sm:h-56">
                          <img class="absolute  w-full object-cover"
                            src="/src/assets/user.svg"
                            alt="" />
                        </div> -->
                        <div class="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                          <div class="sm:flex-1">
                            <div>
                              <div class="flex items-center">
                                <h3 class="text-xl font-bold text-gray-900 sm:text-2xl">{{ store.user.user_name }}  {{ store.user.user_lastname }}</h3>
                                <span class="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                                  <span class="sr-only">Online</span>
                                </span>
                              </div>
                              <p class="text-sm text-gray-500">{{ store.user.user_email }}</p>
                            </div>
                            <div class="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                              <button type="button" @click="firmadigital()"
                                class="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-1">Firma Digital</button>
                              <!-- <button type="button"
                                class="inline-flex w-full flex-1 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Call</button> -->
                              <div class="ml-3 inline-flex sm:ml-0">
                                <RouterLink to="/settings" type="button"
                                  class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>

                                  <span class="sr-only">Settings</span>
                                </RouterLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 pb-5 pt-5 sm:px-0 sm:pt-0">
                      <dl class="space-y-8 px-4 sm:space-y-6 sm:px-6">
                        <div>
                          <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">{{ store.user.user_level == 1 ? 'Adminitrativo': store.user.user_level == 2 ? 'Directivo' : store.user.user_level == 3 ? 'Miembro' : 'Unknown level' }}</dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                              <p v-if="store.user.user_level == 1" class="italic">El Usuario Administrativo tiene la capacidad de aprobar requisiciones, Autorizar Ordenes de compra, ver analitica, accede a la informacion de los usuarios y tiene permiso de modificacion.</p>
                              <p v-if="store.user.user_level == 2" class="italic">El Usuario Directivo tiene la capacidad de aprobar requisiciones, Autorizar Ordenes de compra, ver analitica, accede a la informacion de los usuarios y tiene permiso de modificacion.</p>
                              <p v-if="store.user.user_level == 3" class="italic" >El usuario Miembro tiene la capacidad de solicitar material, items, insumos, comestibles o cualquier elemento que pase como requision.</p>
                          </dd>
                        </div>
                        <div>
                          <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Posicion</dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">{{ store.user.user_position }}</dd>
                        </div>
                        <div>
                          <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Direccion</dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">{{ store.user.user_address }}, {{ store.user.user_city }}, {{ store.user.user_state }}</dd>
                        </div>
                        <div>
                          <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Telefono</dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">{{ store.user.user_phone }}</dd>
                        </div>

                      </dl>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref,defineEmits } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
import useAuthStore from '@/store/auth'
import { useRouter } from 'vue-router';


const emit = defineEmits(['update-value']);
const router = useRouter();
const store = useAuthStore();
//   const open = ref(true)
defineProps({
  open: Boolean
})

const firmadigital = () => {
  router.push('/signature');
  closeModal();
};
const closeModal = () => {
  emit('update-value', false)
}
</script>