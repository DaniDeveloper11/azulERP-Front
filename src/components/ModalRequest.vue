<template>


  <!-- Main modal -->
  <div v-if="open" class="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
    <div class="fixed inset-0 bg-gray-900 bg-opacity-70">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 sm:max-w-4xl mx-auto overflow-y-auto h-screen">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 md:p-5  rounded-t">

          <img src="../assets/logo2.png" class="w-3/6">

          <button type="button" @click="closeModal"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="border border-b-stone-300">
          <div class="flex items-center justify-between p-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ request.concept }}
            </h3>
            <div class="px-3 py-1.5 rounded-xl border border-red-500 text-center sm:w-1/6 text-red-500">Nº {{ request.id
              }}</div>
          </div>
          <div class="grid gap-2 items-center justify-between p-4 sm:flex">

            <div>
              <p>Nombre del Solicitante: <span>{{ request.userRequest_name }}</span></p>
              <p>Fecha: <span>{{ formateDate(props.request.payDate) }}</span></p>
            </div>

            <div class=" grid font-medium items-center">
              <svg v-if="request.payMethod == 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="currentColor" class="size-6 sm:size-10 text-green-600">
                <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                <path fill-rule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                  clip-rule="evenodd" />
                <path
                  d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
              </svg>

              <svg v-if="request.payMethod == 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="currentColor" class="size-6 sm:size-10 text-yellow-400">
                <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                <path fill-rule="evenodd"
                  d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                  clip-rule="evenodd" />
              </svg>
              <svg v-if="request.payMethod == 3" mlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="currentColor" class="size-6 sm:size-10 text-teal-600">
                <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                <path fill-rule="evenodd"
                  d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                  clip-rule="evenodd" />
              </svg>

              <span>
                {{ request.payMethod == 1 ? 'Efectivo' : request.payMethod == 2 ? 'Tarjeta Credito' : 'Transferencia' }}
              </span>
            </div>



          </div>
        </div>

        <!-- Modal body -->
        <div class="sm:grid sm:grid-cols-3 sm:gap-8 p-4 md:p-5">
          <article v-for="(item, index) in request.items" :key="item.id"
            class="flex max-w-xl flex-col items-start justify-between mt-4 sm:mt-0">

            <div class="flex items-center gap-x-4 text-xs">
              <!-- <time :datetime="date" class="text-gray-500">{{ date }}</time> -->
              <a class="relative z-10 rounded-full bg-sky-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Articulo
                {{
                  index + 1 }}</a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a>
                  <span class="absolute inset-0" />
                  {{ item.article }}
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"><span>Descripcion:</span> <br>{{
                item.description }}</p>
            </div>
            <div class="relative mt-2 flex items-center gap-x-4">
              <!-- <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" /> -->
              <div class="text-sm leading-6">
                <p class="flex gap-1 font-semibold text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>

                  Cantidad:
                  <span class="absolute inset-0" />
                  {{ item.quantity }}

                </p>
                <p class="flex gap-1 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                  Precio:{{ item.price }}
                </p>
              </div>
            </div>
          </article>
        </div>
        <!-- Modal footer -->
        <div v-if="props.request.docStatus == 1"
          class="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button type="button" @click="approveRequest()"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Aprobar</button>
          <button type="button" @click="declineRequest()"
            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Rechazar</button>
        </div>

        <div v-if="props.request.docStatus == 2"
          class="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button type="button" @click="toOrderPurchase(props.request)"
            class="flex gap-1 text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Generar Orden de compra
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd" />
            </svg>

          </button>

        </div>
      </div>
    </div>
  </div>

</template>


<script setup>
import { ref, defineEmits, onMounted } from 'vue'
import axios from '@/utils/axios'

import { formateDate } from '@/utils/formateDate';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import Departments from '@/views/Departments/Departments.vue';
// import money from '@/components/icons/money.vue'

const router = useRouter();
const emit = defineEmits(['update-value']);

let props = defineProps({
  open: Boolean,
  request: {},

})
// const date = ref('')

const closeModal = () => {
  emit('update-value', false)
}
const handleGenerateOrder = () => {
  localStorage.setItem('orderData', JSON.stringify(props.request))
  router.push({ name: 'OrderComponent' })
}

onMounted(() => {
  // date.value = formatDate(props.request.payDate)


  // console.log(props.request.payDate)
})



const approveRequest = async () => {
  // props.request.docStatus.value = 2;
  const token = localStorage.getItem('token');
  const docStatus = 2;
  try {
    const response = await axios.put(`/requestPurchases/${props.request.id}`, { docStatus }, {
      Authorization: `Bearer ${token}`,
    });
    if (response) {
      Swal.fire({
        title: 'Correcto',
        text: 'Solicitud Aprobada',
        icon: 'success'
      })

    }
  } catch (error) {
    console.error(error)
    Swal.fire({
      title: 'Error',
      text: 'Error al Intentar Aprobar la Solicitud',
      icon: 'error'
    });

  } finally {
    closeModal()
  }
}

const declineRequest = async () => {
  const token = localStorage.getItem('token');
  const docStatus = 3;
  try {
    const response = await axios.put(`/requestPurchases/${props.request.id}`, { docStatus }, {
      Authorization: `Bearer ${token}`,
    })
    if (response) {
      Swal.fire({
        title: 'Correcto',
        text: 'Solicitud Rechazada',
        icon: 'success'
      })

    }
  } catch (error) {
    console.error(error)
    Swal.fire({
      title: 'Error',
      text: 'Error al Intentar Aprobar la Solicitud',
      icon: 'error'
    });
  } finally {
    closeModal()
  }
}

const toOrderPurchase = async (request) => {
  const token = localStorage.getItem('token');
  const newOrder = {
    department: request.department,
    supdepartment: request.supdepartment,
    type: request.type,
    subType: request.type,
    concept: request.concept,
    beneficiary: request.beneficiary,
    payConditions: request.payConditions,
    payMethod: request.payMethod,
    // docStatus: request.docStatus,
    userRequest: request.userRequest,
    payDate: request.payDate,
    invoice: request.invoice,
    docReference: request.docReference,
    docTotal: request.docTotal
  }
  try {
    const result = await axios.post('/orderPurchases', newOrder, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (result.data) {
      Swal.fire({
        title: 'Correcto',
        text: 'Orden de compra Generada',
        icon: 'success',
      });
    }
    const docStatus = 6
      const response2 = await axios.put(`/requestPurchases/${props.request.id}`, { docStatus }, {
      Authorization: `Bearer ${token}`,
    });
    if(response2){
      console.log('solicitud modificada')
    }
  } catch (error) {
    console.error(error)
    Swal.fire({
      title: 'Error',
      text: 'No se pudo crear Orden de compra',
      icon: 'error',
    });
  } finally {
    closeModal()
  }
}

</script>