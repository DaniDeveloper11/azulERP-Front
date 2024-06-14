<template>
  <div >
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Proveedor</h1>
        <p class="mt-2 text-sm text-gray-700">Listado de Proveedores, puedes agregar, borrar o editar un Proveedor, ademas de llamar o mandar correo con un Botton </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <RouterLink to="/addSupplier" type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Añadir Usuario</RouterLink>
      </div>
    </div>
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="person in people" :key="person.email" class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <div class="flex w-full items-center justify-between space-x-6 p-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="truncate text-sm font-medium text-gray-900">{{ person.name }}</h3>
              <span class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{ person.role }}</span>
            </div>
            <p class="mt-1 truncate text-sm text-gray-500">{{ person.title }}</p>
          </div>
          <img class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" :src="person.imageUrl" alt="" />
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <a :href="`mailto:${person.email}`" class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                <EnvelopeIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                Email
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a :href="`tel:${person.telephone}`" class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                <PhoneIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                Call
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  </template>
  
  <script setup>
  import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'
  
  const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      role: 'Proveedor',
      email: 'janecooper@example.com',
      telephone: '+',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },

    // More people...
  ]
  </script>