<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80"></div>
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full" enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
            leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>

              </TransitionChild>
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 pt-4">
                <div class="flex h-16 shrink-0 items-center">
                  <img class="h-14 w-auto" src="../src/assets/logo.png" alt="Your Company" />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7 justify-between">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <RouterLink v-if="!item.children" @click="sidebarOpen = false" :to="item.to"
                            :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                            <component :is="item.icon"
                              :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
                              aria-hidden="true" />
                            {{ item.name }}
                          </RouterLink>
                          <Disclosure as="div" v-else v-slot="{ open }">
                            <DisclosureButton
                              :class="[item.current ? 'bg-gray-50' : 'hover:bg-gray-50', 'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700']">
                              <component :is="item.icon" class="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                              {{ item.name }}
                              <ChevronRightIcon
                                :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']"
                                aria-hidden="true" />
                            </DisclosureButton>
                            <DisclosurePanel as="ul" class="mt-1 px-2">
                        <li v-for="subItem in item.children" :key="subItem.name">
                          <!-- 44px -->
                          <DisclosureButton as="a" :href="subItem.href"
                            :class="[subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50', 'block rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-gray-700']">
                            {{ subItem.name }}</DisclosureButton>
                        </li>
                        </DisclosurePanel>
                        </Disclosure>

                    </li>
                  </ul>
                  </li>
                  <li>
                    <div @click="logout()" class="flex item-center gap-1 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                      </svg>

                      salir
                    </div>
                  </li>
                  </ul>
                </nav>
              </div>

            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div v-if="isToken" class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <img class="h-14 w-auto" src="../src/assets/logo.png" alt="Your Company" />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <RouterLink  v-if="!item.children" :to="item.to"
                    :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                    <component :is="item.icon"
                      :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
                      aria-hidden="true" />
                    {{ item.name }}
                  </RouterLink>
                  <Disclosure as="div" v-else v-slot="{ open }">
                    <DisclosureButton
                      :class="[item.current ? 'bg-gray-50' : 'hover:bg-gray-50', 'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700']">
                      <component :is="item.icon" class="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                      {{ item.name }}
                      <ChevronRightIcon
                        :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']"
                        aria-hidden="true" />
                    </DisclosureButton>
                    <DisclosurePanel as="ul" class="mt-1 px-2">
                <li v-for="subItem in item.children" :key="subItem.name">
                  <!-- 44px -->
                  <DisclosureButton as="a" :href="subItem.href"
                    :class="[subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50', 'block rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-gray-700']">
                    {{ subItem.name }}</DisclosureButton>
                </li>
                </DisclosurePanel>
                </Disclosure>
            </li>

          </ul>
          </li>

          </ul>
        </nav>
      </div>
      <Profile v-bind:open="profileOpen" @close="profileOpen = false" @update-value="handleUpdate"></Profile>

    </div>

    <div v-if="isToken" class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true"></div>
        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div class="flex items-center gap-x-4 lg:gap-x-6 w-full">
            <!-- Separator -->
            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true"></div>
            <div class="ml-auto">
              <Menu as="div" class="relative">
                <div>
                  <MenuButton class="-m-1.5 flex items-center p-1.5">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full bg-gray-50" src="./assets/user.svg" alt="" />
                    <span class="hidden lg:flex lg:items-center">
                      <span class="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">{{ user ?
                        `${user.user_name} ${user.user_lastname}` : '' }}</span>
                      <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <MenuItem v-slot="{ active }" class="cursor-pointer">
                    <span v-on:click="profileOpen = true" class="flex items-center gap-2"
                      :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 stroke-gray-400 ">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>

                      
                      Perfil</span>
                    </MenuItem>
                    <MenuItem v-slot="{ active }" class="cursor-pointer">
                      
                    <RouterLink to="/tutorialsView" class="flex items-center gap-2"
                      :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">
                      
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 stroke-zinc-400">
                       <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      Tutoriales</RouterLink>
                    </MenuItem>
                    <MenuItem v-slot="{ active }" class="cursor-pointer">
                    <span v-on:click="logout"
                      :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">Salir</span>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>

      </div>

      <main class="py-10 px-14">
        <div class="px-4 sm:px-6 lg:px-8">
          <RouterView />
        </div>
      <ChatBot/>

      </main>
    </div>

    <div v-else>
      <RouterView />
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import useAuthStore from './store/auth';
import { RouterLink, useRouter } from 'vue-router';
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UserIcon,
  XMarkIcon,
  HomeModernIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  SunIcon
} from '@heroicons/vue/24/outline';
import Profile from './components/ProfileModal.vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronRightIcon } from '@heroicons/vue/20/solid';
import Swal from 'sweetalert2';
import ChatBot from '@/components/ChatBot/ChatBot.vue'
// import { mdiSproutOutline } from '@mdi/js';
const router = useRouter();

// const token = localStorage.getItem("token");

const sidebarOpen = ref(false);
const profileOpen = ref(false);
const showSignatureModal = ref(false);

const store = useAuthStore();
const isToken = computed(() => store.isLoggedIn);
const user = computed(() => store.user);

const navigationProfiles = () => {
  switch (user.value.user_level) {
    case 3:
      navigation.value = [
        { name: 'Home', to: '/', icon: HomeIcon, current: true },
        {
          name: 'Solicitud de compra',
          icon: FolderIcon,
          current: false,
          children: [
            { name: 'Crear solicitud de compra', href: '/requestPurchase' },
            { name: 'Mis solicitudes de compra', href: '/listRequest' }
          ]
        }
      ];
      break;
    case 1:
      navigation.value = [
        { name: 'Home', to: '/', icon: HomeIcon, current: true },
        { name: 'Aprobación de solicitudes', to: '/approveRequest', icon: CheckBadgeIcon, current: false },
        { name: 'Usuarios', to: '/users', icon: UserIcon, current: false },
        { name: 'Departamentos', to: '/departments', icon: HomeModernIcon, current: false },
        { name: 'Proveedores', to: '/proveedors', icon: UserGroupIcon, current: false },
        {
          name: 'Orden de Compra',
          icon: FolderIcon,
          current: false,
          children: [
            { name: 'Crear orden de compra', href: '/orderPurchase' },
            { name: 'Mis órdenes de compra', href: '/listOrders' }
          ]
        },
        { name: 'Reportes', to: '/reports', icon: ChartPieIcon, current: false }
      ];
      break;
    case 2:
      navigation.value = [
        { name: 'Home', to: '/', icon: HomeIcon, current: true },
        { name: 'Aprobación de solicitudes', to: '/approveRequest', icon: CheckBadgeIcon, current: false },
        { name: 'Usuarios', to: '/users', icon: UserIcon, current: false },
        { name: 'Departamentos', to: '/departments', icon: HomeModernIcon, current: false },
        { name: 'Proveedores', to: '/proveedors', icon: UserGroupIcon, current: false },
        {
          name: 'Orden de Compra',
          icon: FolderIcon,
          current: false,
          children: [
            { name: 'Crear orden de compra', href: '/orderPurchase' },
            { name: 'Mis órdenes de compra', href: '/listOrders' }
          ]
        },
        { name: 'Reportes', to: '/reports', icon: ChartPieIcon, current: false }
      ];
      break;
      case 4:
        navigation.value = [
        { name: 'Home', to: '/', icon: HomeIcon, current: true },
        { name: 'Campo', to: '/campoView',
         icon: SunIcon,
          current: true },
        ]
  }
}

watch(user, (newValue) => {
  if (newValue) {
    navigationProfiles();
  }
});

onMounted(() => {
  if (isToken.value) {
    navigationProfiles();
  }
});

const logout = () => {
  store.logout();
  localStorage.clear();
  sidebarOpen.value = false;
  router.push('/login');
  Swal.fire({
    title: 'Sesion terminada',
    text: 'vuelva a iniciar sesion',
    icon: 'warning',
  });
};

// const firmadigital = () => {
//   router.push('/signature');
// };
const handleUpdate = (value) => {
  profileOpen.value = value;
    
};
const navigation = ref([]);
</script>

<style scoped></style>