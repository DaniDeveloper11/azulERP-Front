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
    <ul role="list" class="divide-y divide-gray-100">
        <li v-for="order in filterOrders" :key="order.id" class="flex items-center justify-between gap-x-6 py-5">
            <div class="min-w-0">
                <div class="flex items-start gap-x-3">
                    <p class="text-sm font-semibold leading-6 text-gray-900">{{ order.concept }}</p>
                    <!-- <div class="px-3 py-0.5 font-medium rounded-full text-sm"
                        :class="request.docStatus == 1 ? statuses.pendiente : request.docStatus == 2 ? statuses.aprobado : request.docStatus == 3 ? statuses.rechazado : statuses.cerrado">
                        {{ request.docStatus == 1 ? 'Pendiente' : request.docStatus == 2 ? 'Aprobado' : request.docStatus == 3 ? 'Rechazado' : 'Cerrado' }}
                    </div> -->
                </div>
                <p class="text-sm font-semibold leading-6 text-gray-500">{{ order.nameDepartment }}</p>

                <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                    <p class="whitespace-nowrap">
                        Creado en <time :datetime="order.date">{{ formateDate(order.date) }}</time>
                    </p>
                    <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                        <circle cx="1" cy="1" r="1" />
                    </svg>
                    <p class="truncate">Creado por: {{ order.userRequest_name }}</p>

                    <!-- <p class="truncate">Creado por: {{ request.userRequest_name }}</p> -->
                </div>
            </div>
            <div class="flex flex-none items-center gap-x-4">

                <button v-if="order.docStatus == 2" @click="showModal(order)"
                    class="flex rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    PDF
                </button>


                <button v-if="order.docStatus == 1" @click="orderModal = order;  open = true"
                    class="flex rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:flex">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg> -->
                    revision
                </button>


            </div>

            <!-- <h1>holi</h1> -->
        </li>
    </ul>


    <!-- modal para aprobar o rechazar solicitudes de compra -->
    <!-- <modal1 @update-value="handleUpdate" v-bind:request="requestModal" v-bind:open="open" @close="open = false"></modal1> -->
    <RequestDetails v-if="showDetails" :data="itemSelected" @closeModal="handleClose">
    </RequestDetails>
    <modal1 @update-value="handleUpdate" v-bind:request="orderModal" v-bind:kind="2" v-bind:open="open" @close="open = false"></modal1>

</template>

<script setup>
import { ref, computed } from 'vue'
import axios from '@/utils/axios'
import Swal from 'sweetalert2';
import RequestDetails from '@/views/RequestPurchases/modals/RequestDetails.vue';
import { formateDate } from '@/utils/formateDate';
import modal1 from '@/components/ModalRequest.vue'


// const open = ref(false);
const showDetails = ref(false)
const itemSelected = ref('')
const orderModal = ref('')
const open = ref(false);
// const isOrder = 2
const props = defineProps({
    orders: Array
})

const statuses = {
    pendiente: 'text-yellow-800 bg-yellow-100 ring-yellow-600/20',
    aprobado: 'text-green-700 bg-green-100 ring-green-600/20',
    rechazado: 'text-red-600 bg-red-100 ring-red-600/20',
    cerrado: 'text grey-700 bg-gray-100 ring-gray-600/20'
}

const searchQuery = ref('');

const getStatusText = (docStatus) => {
    switch (docStatus) {
        case 1:
            return 'pendiente'
        case 2:
            return 'aprobado'
        case 3:
            return 'rechazado'
        case 6:
            return 'cerrado'
        default:
            return ''
    }
}

const filterOrders = computed(() => {
    const queries = searchQuery.value.toLowerCase().split(',').map(q => q.trim())
    return props.orders.filter(order => {
        const statusText = getStatusText(order.docStatus).toLowerCase()
        return queries.every(query =>
            order.concept.toLowerCase().includes(query) ||
            order.userRequest_name.toLowerCase().includes(query) ||
            statusText.includes(query)
        )
    })
})

function search() {
    // Este método puede ser usado para realizar alguna acción adicional cuando se hace clic en el botón de búsqueda
    console.log('Buscando:', searchQuery.value)
}

async function showModal(item) {
    const token = localStorage.getItem('token');
    if (item.items) {
        itemSelected.value = item
        showDetails.value = true

    } else {
        Swal.fire({
            title: 'Error',
            text: 'No cuenta con items esta solicitud',
            icon: 'warning'
        });
    }
};

const handleClose = () => {
    showDetails.value = false;
    itemSelected.value = null
};

const handleUpdate = (value) => {
  open.value = value;
    // getOrder(); that will be a refresh 
};

</script>
