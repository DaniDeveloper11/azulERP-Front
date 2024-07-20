<template>
    <!-- Buscador -->
    <div class="flex mx-auto py-4 sm:py-10">

        <div class="flex w-full mx-10 rounded bg-white">
            <input v-model="searchQuery"
                class=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none "
                type="search" name="search" placeholder="Search..." />
            <button type="submit" class="m-2 rounded bg-blue-600 px-4 py-2 text-white">
                <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                    viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                    width="512px" height="512px">
                    <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
            </button>
        </div>
    </div>

   




<!-- tabla -->
<ul v-if="sortedFilteredRequests.length > 0"  role="list" class="divide-y divide-gray-100">
        <li v-for="request in sortedFilteredRequests" :key="request.id"
            class="flex items-center justify-between gap-x-6 py-5">
            <div class="min-w-0">
                <div class="flex items-start gap-x-3">
                    <p class="text-sm font-semibold leading-6 text-gray-900">{{ request.department.name }} / <span class="font-thin"></span></p>

                    <div class="px-3 py-0.5 font-medium rounded-full text-sm"
                        :class="request.docStatus == 1 ? statuses.pendiente : request.docStatus == 2 ? statuses.aprobado : request.docStatus == 3 ? statuses.rechazado : statuses.cerrado">
                        {{ request.docStatus == 1 ? 'Pendiente' : request.docStatus == 2 ? 'Aprobado' : request.docStatus == 3 ? 'Rechazado' : 'Cerrado' }}
                    </div>
                </div>
                <!-- <p class="text-sm font-semibold leading-6 text-gray-500">{{ request.nameDepartment }}</p> -->

                <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                    <p class="whitespace-nowrap">
                        Creado en <time :datetime="request.date">{{ formateDate(request.date) }}</time>
                    </p>
                    <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                        <circle cx="1" cy="1" r="1" />
                    </svg>
                    <p class="truncate">{{ request.userRequest.name }} {{ request.userRequest.lastname }}</p>
                </div>
            </div>
            <div class="flex flex-none items-center gap-x-4">
          
                <button @click="open = true; requestModal = request"
                    class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">
                    Revisar
                </button>

            </div>


        </li>
    </ul>
    <!-- <p v-else class="mt-6 text-xl leading-8 text-gray-700">No se encontro coinsidencia</p> -->

    <div v-else class="flex justify-center w-full">
    <div class="grid h-full">
            <loader></loader>
    </div>
    <!-- <p id="notResults" class="mt-6 text-xl leading-8 text-gray-700">No se encontro coinsidencia</p> -->
</div>

   


    <!-- modal para aprobar o rechazar solicitudes de compra -->
    <modal1 @update-value="handleUpdate" v-bind:request="requestModal" v-bind:open="open" v-bind:kind="1" @close="open = false"></modal1>
   

</template>

<script setup>
import { onMounted, reactive, ref, computed,inject } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
import { initFlowbite, initDropdowns, initModals, initDials } from 'flowbite'
import axios from '@/utils/axios'
import modal1 from '@/components/ModalRequest.vue'
import { formateDate } from '@/utils/formateDate';
import Swal from 'sweetalert2';
import loader from '@/components/LoaderCss2.vue'

// const isRequest = 1;
const getRequests =inject('getRequests')
const open = ref(false);
const requestModal = ref('') 
const showLoader = ref(true);
const props = defineProps({
    requests: Array
})

const statuses = {
    pendiente: 'text-yellow-800 bg-yellow-100 ring-yellow-600/20',
    aprobado: 'text-green-700 bg-green-100 ring-green-600/20',
    rechazado: 'text-red-600 bg-red-100 ring-red-600/20',
    cerrado: 'text grey-700 bg-gray-100 ring-gray-600/20'
}

const searchQuery = ref('');
// const modal1Open = ref(false);
const getStatusText = (docStatus) => {
    switch (docStatus) {
        case 1:
            return 'pendiente'
        case 2:
            return 'aprobado'
        case 3:
            return 'rechazado'
        default:
            return ''
    }
}

const filteredRequests = computed(() => {
    const query = searchQuery.value.toLowerCase().trim();
    return props.requests.filter(request => {
        const statusText = getStatusText(request.docStatus).toLowerCase();
        return (
            request.department.name.toLowerCase().includes(query) ||
            request.subdepartment.name.toLowerCase().includes(query) ||
            request.date.toLowerCase().includes(query) ||
            statusText.includes(query) ||
            request.userRequest.name.toLowerCase().includes(query)||
            request.userRequest.lastname.toLowerCase().includes(query)
        );
    });
});

const sortedFilteredRequests = computed(() => {
    showLoader.value = false; 
    return filteredRequests.value.sort((a, b) => new Date(b.date) - new Date(a.date));
});


onMounted(() => {
    initFlowbite();
    initDials();
    initModals();
    // showLoader.value = true
})

function search() {
    // Este método puede ser usado para realizar alguna acción adicional cuando se hace clic en el botón de búsqueda
    console.log('Buscando:', searchQuery.value)
}


const handleUpdate = (value) => {
  open.value = value;
    getRequests();
};


</script>
