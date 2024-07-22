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
                </div>
                <p class="text-sm font-semibold leading-6 text-gray-500">{{ order.nameDepartment }}</p>
                <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                    <p class="whitespace-nowrap">
                        Creado en <time :datetime="order.date">{{ formateDate(order.date) }}</time>
                    </p>
                    <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                        <circle cx="1" cy="1" r="1" />
                    </svg>
                    <p class="truncate">Creado por: {{ order.userRequest.name + ' ' + order.userRequest.lastname }}</p>
                    <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                        <circle cx="1" cy="1" r="1" />
                    </svg>
                    <p class="flex gap-2">{{ order.payMethod == 1 ? 'Efectivo' : order.payMethod == 2 ? 'Tarjeta de credito' :
                        'Transferencia' }}
                    </p>
                    <svg v-if="order.payMethod == 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>
                        <svg v-if="order.payMethod == 2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg>
                        <svg v-if="order.payMethod == 3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" class="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
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


                <button v-if="order.docStatus == 1" @click="orderModal = order; open = true"
                    class="flex rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:flex">
                </button>
            </div>


        </li>
    </ul>


    <!-- modal para aprobar o rechazar solicitudes de compra -->
    <!-- <modal1 @update-value="handleUpdate" v-bind:request="requestModal" v-bind:open="open" @close="open = false"></modal1> -->
    <RequestDetails v-if="showDetails" :data="itemSelected" @closeModal="handleClose">
    </RequestDetails>
    <modal1 @update-value="handleUpdate" v-bind:request="orderModal" v-bind:kind="2" v-bind:open="open"
        @close="open = false"></modal1>

</template>

<script setup>
import { ref, computed,inject } from 'vue'
import axios from '@/utils/axios'
import Swal from 'sweetalert2';
import RequestDetails from '../views/OrderPurchases/modals/OrderDetails.vue';
import { formateDate } from '@/utils/formateDate';
import modal1 from '@/components/ModalRequest.vue'


// const open = ref(false);
const getOrders = inject('getOrders')
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
    getOrders(); 
};

</script>
