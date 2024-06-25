<template>
    <!-- Buscador -->
    <form class="max-w-lg mx-auto mt-12">
        <div class="flex">
            <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your
                Email</label>
            <button id="dropdown-button" data-dropdown-toggle="dropdown"
                class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                </svg></button>
            <div id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                    <li>
                        <button type="button"
                            class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                    </li>
                    <li>
                        <button type="button"
                            class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                    </li>
                    <li>
                        <button type="button"
                            class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                    </li>
                    <li>
                        <button type="button"
                            class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                    </li>
                </ul>
            </div>
            <div class="relative w-full">
                <input type="search" id="search-dropdown"
                    class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos, Design Templates..." required />
                <button type="submit"
                    class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </div>
        </div>
    </form>

    <!-- tabla -->
    <ul role="list" class="divide-y divide-gray-100">
        <li  v-for="request in props.requests" :key="request.id" class="flex items-center justify-between gap-x-6 py-5">
            <div class="min-w-0">
                <div class="flex items-start gap-x-3">
                    <p class="text-sm font-semibold leading-6 text-gray-900">{{ request.concept }}</p>
                    <p>
                        {{ request.type }}</p>
                </div>
                <div  class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                    <p class="whitespace-nowrap">
                        Due on <time :datetime="request.date">{{ request.date }}</time>
                    </p>
                    <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                        <circle cx="1" cy="1" r="1" />
                    </svg>
                    <p class="truncate">Created by {{ request.userRequest_name }}</p>
                </div>
            </div>
            <div class="flex flex-none items-center gap-x-4">
                <a
                    class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                    >Revisar<span
                        class="sr-only">, {{ request.concept }}</span></a>
                <Menu as="div" class="relative flex-none">
                    <MenuButton class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                        <span class="sr-only">Open options</span>
                        <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
                    </MenuButton>
                    <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                            class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                            <MenuItem v-slot="{ active }">
                            <a href="#"
                                :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">Aprobar<span
                                    class="sr-only">, {{ project.name }}</span></a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <a href="#"
                                :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">Rechazar<span
                                    class="sr-only">, {{ project.name }}</span></a>
                            </MenuItem>


                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
import { initFlowbite, initDropdowns } from 'flowbite'
import axios from '@/utils/axios'


const props = defineProps({

    requests: {}
})
const userData = reactive({})
const statuses = {
    Complete: 'text-green-700 bg-green-50 ring-green-600/20',
    'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
    Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
}


onMounted(() => {
    initFlowbite();
})


</script>