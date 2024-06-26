<template>

    <!-- <div v-if="showloader" class="flex justify-center w-full">
      <div class=" grid h-full">
        <loader class="fixed top-1/2"></loader>
      </div>
    </div> -->
  
  
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-10" @close="emit('update-value', false)">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
          leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
  
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:py-0">
            <TransitionChild as="template" enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel
                class=" absolute transform overflow-hidden rounded-lg bg-black px-4 pb-4 pt-4 text-left shadow-xl transition-all sm:w-3/4 sm:right-10  ">
                <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
            <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a :href="post.href">
                <span class="absolute inset-0" />
                {{ post.title }}
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <a :href="post.author.href">
                  <span class="absolute inset-0" />
                  {{ post.author.name }}
                </a>
              </p>
              <p class="text-gray-600">{{ post.author.role }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
  
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
  // import loader from './LoaderCss.vue'
  
  import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue';
  import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid';
  
  let props = defineProps({
    open: Boolean,
    // User: {}
  })
  // const openModal = ref(false)
  // const enabled = ref(false)
  const emit = defineEmits(['update-value']);
  
//   const fileName = ref('');
//   const fileUrl = ref('');
  const showloader = ref(false)
  
  const sendValue = () => {
    emit('update-value', false)
  }
  
  const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]
//   const publishingOptions = ref([
//     { title: 'Administrador', value: 1, description: 'El Administrador el es super Usuario de la aplicacion, capaz de ver todos los modulos de la aplicacion.', current: true },
//     { title: 'Directivo', value: 2, description: 'El Directivo tiene la capacidad de aprobar requisiciones, ver analitica, accede a la informacion de los usuarios y tiene permiso de modificacion.', current: false },
//     { title: 'Miembro', value: 3, description: 'El usuario Miembro tiene la capacidad de solicitar material, items, insumos, comestibles o cualquier elemento que pase como requision', current: false },
  
//   ]);
  
//   function inputImage(event) {
//     const file = event.target.files[0];
//     if (file) {
//       // user_image.value = file,
//       fileName.value = file.name;
//       // user_image.value = fileName.value;
  
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         fileUrl.value = e.target.result;
//       };
//       reader.readAsDataURL(file);
//     }
//   }
  
  // Watch for changes in User and update fileName
//   watchEffect(() => {
//     if (props.User && props.User.user_image) {
//       fileName.value = props.User.user_image;
//     }
//   });
  
  //funtion that change the boolean value in switch element to bit value witch means true = 1 & false = 0
//   const userActiveBoolean = computed({
//     get() {
//       return props.User.user_active === 1;
//     },
//     set(value) {
//       props.User.user_active = value ? 1 : 0;
//     }
//   });
  
  //resquest https to server
//   const Delete = async () => {
//     showloader.value = true;
//     try {
//       const response = await axios.delete(`http://localhost:3000/users/${props.User.user_id}`);
//       if (response) {
//         Swal.fire({
//           title: 'Correcto',
//           text: 'Usuario Eliminado Correctamente',
//           icon: 'success'
//         });
  
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       Swal.fire({
//         title: 'Error',
//         text: 'No se pudo Eliminar el Usuario',
//         icon: 'error'
//       });
//     } finally {
//       showloader.value = false
  
//     }
//   }
  
//   const Update = async () => {
//       console.log("holi")
//       try {
//         const response = await axios.put(`http://localhost:3000/users/${props.User.user_id}`, props.User, {
//         });
//         if (response) {
//         Swal.fire({
//           title: 'Correcto',
//           text: 'Usuario Actualizado Correctamente',
//           icon: 'success'
//         });
  
//       }
  
//         console.log('Respuesta del servidor:', response.data);
//       } catch(error) {
//         console.error('Error al actualizar el usuario',error);
//         Swal.fire({
//             title: 'Error',
//             text: 'No se pudo Actulizar el usuario',
//             icon: 'error'
//           });
//       } finally {
//         console.log('holi fin')
//       }
  
//     }
  </script>
  