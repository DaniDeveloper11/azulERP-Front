<template>


  <!-- Main modal -->
  <div v-if="open"
    class="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
    <div class="fixed inset-0 bg-gray-900 bg-opacity-70">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 sm:max-w-4xl mx-auto overflow-y-auto h-screen">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 md:p-5  rounded-t">

          <img src="../assets/logo2.png" class="w-3/6">

          <button type="button" @click="closeModal"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
           >
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="flex items-center justify-between p-4">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ request.concept }}
          </h3>
          <div class="px-3 py-1.5 rounded-xl border border-red-500 text-center sm:w-1/6 text-red-500">Nº {{ request.id
            }}</div>
        </div>
        <div class="grid gap-2 items-center justify-between p-4">
          <p>Nombre del Solicitante: <span>{{ request.userRequest_name }}</span></p>
          <p>Fecha: <span>{{ date }}</span></p>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <article v-for="item in request.items" :key="item.id" class="flex max-w-xl flex-col items-start justify-between">
            
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="date" class="text-gray-500">{{ date }}</time>
              <a 
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{
                  item.id }}</a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a >
                  <span class="absolute inset-0" />
                  {{ item.article }}
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ item.description }}</p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <!-- <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" /> -->
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <a>
                    <span class="absolute inset-0" />
                    {{ item.quantity }}
                  </a>
                </p>
                <p class="text-gray-600">{{ item.price }}</p>
              </div>
            </div>
          </article>
        </div>
        <!-- Modal footer -->
        <div class="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button  type="button" @click="approveRequest()"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Aprobar</button>
          <button  type="button"
            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Rechazar</button>
        </div>
      </div>
    </div>
  </div>













  
</template>


<script setup>
import { ref, defineEmits, watchEffect, computed, onMounted } from 'vue'
import axios from '@/utils/axios'
// import { initModals } from 'flowbite';
import { formatDate } from '@/utils/formateDate';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

const router = useRouter();
const emit = defineEmits(['update-value']);

let props = defineProps({
  open: Boolean,
  request: {},
  // items: {}
})
const date = ref('')
const items = ref(props.items)

// const items = props.request.items
// const openModal = ref(false)
// const enabled = ref(false)
const closeModal = () => {
  emit('update-value', false)
}

onMounted(() => {
  // initModals();
  date.value = formatDate(props.request.payDate)
  // console.log(typeof(items))

})
// const posts = [
//   {
//     id: 1,
//     title: 'Boost your conversion rate',
//     href: '#',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     category: { title: 'Marketing', href: '#' },
//     author: {
//       name: 'Michael Foster',
//       role: 'Co-Founder / CTO',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     id: 2,
//     title: 'Boost your conversion rate',
//     href: '#',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     category: { title: 'Marketing', href: '#' },
//     author: {
//       name: 'Michael Foster',
//       role: 'Co-Founder / CTO',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     id: 3,
//     title: 'Boost your conversion rate',
//     href: '#',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     category: { title: 'Marketing', href: '#' },
//     author: {
//       name: 'Michael Foster',
//       role: 'Co-Founder / CTO',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
// ]

const approveRequest = async () => {
  // props.request.docStatus.value = 2;
  const token = localStorage.getItem('token');
  const docStatus = 2;
  try {
    const response = await axios.put(`http://localhost:3000/requestPurchases/${props.request.id}`,{docStatus},{
      Authorization: `Bearer ${token}`,
    });
    if(response){
      Swal.fire({
        title:'Correcto',
        text:'Solicitud Aprobada',
        icon:'success'
      })
      // window.location.reload()
    }
  } catch (error) {
    console.error(error)
    Swal.fire({
      title:'Error',
      text: 'Error al Intentar Aprobar la Solicitud',
      icon:'error'
    });
  // props.request.docStatus.value = 1;

  }finally{
    closeModal()
  }
}


</script>