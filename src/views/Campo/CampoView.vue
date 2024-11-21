<template>
    <div>
      <h2 class="text-base font-semibold text-gray-900">Projects</h2>
      <p class="mt-1 text-sm text-gray-500">You haven’t created a project yet. Get started by selecting a template or start from an empty project.</p>
      <ul role="list" class="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2">
        <li v-for="(item, itemIdx) in items" :key="itemIdx" class="flow-root">
            <router-link :to="item?.to">
          <div class="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
            <div :class="[item.background, 'flex size-16 shrink-0 items-center justify-center rounded-lg']">
              <component :is="item.icon" class="size-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-900">
                <a href="#" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true" />
                  <span>{{ item.title }}</span>
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
            </div>
          </div>
        </router-link>

        </li>
      </ul>
      <div class="mt-4 flex">
        <!-- <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Or start from an empty project
          <span aria-hidden="true"> &rarr;</span>
        </a> -->
      </div>
    </div>
  </template>
  
  <script setup>
import { RouterLink, useRouter } from 'vue-router';


  import {
    Bars4Icon,
    CalendarIcon,
    PhotoIcon,
    ViewColumnsIcon,
  } from '@heroicons/vue/24/outline'
  
  const items = [
    {
      title: 'Lista de Parcelas',
      description: 'Another to-do system you’ll try but eventually give up on.',
      icon: Bars4Icon,
      background: 'bg-pink-500',
      to:'/'
    },
    {
      title: 'Guardar un punto',
      description: 'Stay on top of your deadlines, or don’t — it’s up to you.',
      icon: CalendarIcon,
      background: 'bg-yellow-500',
      to:'/savePointView'
    },
    {
      title: 'Galeria de fotos',
      description: 'Great for mood boards and inspiration.',
      icon: PhotoIcon,
      background: 'bg-green-500',
    },
    {
      title: 'Bitacora',
      description: 'Track tasks in different stages of your project.',
      icon: ViewColumnsIcon,
      background: 'bg-blue-500',
    },

  ]
  </script>