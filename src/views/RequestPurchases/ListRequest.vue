<template>
    <div>
        <!-- <h4 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ returnTitle() }}</h4> -->
        <div class="px-4 sm:px-6 lg:px-8 mb-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-base font-semibold leading-6 text-gray-900">Solicitudes de compra</h1>
                    <p class="mt-2 text-sm text-gray-700">
                        Este módulo permite a los usuarios gestionar y realizar un seguimiento de las solicitudes de
                        compra dentro de la organización.
                        Los usuarios pueden ver todas las solicitudes de compra en curso, incluyendo detalles como el
                        artículo solicitado,
                        el costo estimado y el estado actual de la solicitud (aprobado o rechazado).
                    </p>
                </div>
            </div>
        </div>

        <hr class="bg-indigo-600" style="height:3px; margin: .7rem">
        <div class="flex mx-auto py-4 sm:py-10">
            <div class="flex w-full mx-10 rounded bg-white">
                <input v-model="searchQuery" @input="search"
                    class="w-full border-indigo bg-transparent px-4 py-1 text-gray-800 outline-none focus:outline-none"
                    type="search" name="search" placeholder="Busqueda..." />
                <select v-model="statusFilter" @change="search"
                    class="border-none bg-transparent px-4 py-1 text-gray-800 outline-none focus:outline-none">
                    <option value="0">-Selecione un estado-</option>
                    <option value="1">PENDIENTE</option>
                    <option value="2">APROBADO</option>
                    <option value="3">RECHAZADO</option>
                    <option value="4">CANCELADO</option>
                    <option value="6">CERRADO</option>
                </select>
                <button type="submit" @click="search" class="m-2 rounded bg-blue-600 px-4 py-2 text-white">
                    <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                        xml:space="preserve" width="512px" height="512px">
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </button>
            </div>
        </div>

        <ul role="list" class="divide-y divide-gray-200" v-if="hasData">
            <li v-for="req in requestFilter" :key="req.id" class="px-4 py-4 sm:px-0">
                <div class="flex justify-between items-center" v-if="requestFilter.length > 0">
                    <div class="ml-4 mr-4">
                        <button @click="showModal(req)" class="text-blue-500 hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex-1">
                        <h3 class="text-lg font-medium text-gray-900">{{ req.concept }}</h3>
                        <p class="text-sm text-gray-500">{{ req.beneficiary }}</p>
                        <p class="text-sm text-gray-500">{{ moneyFormatter(req.docTotal) }}</p>
                    </div>
                    <div class="ml-4">
                        <span v-if="req.docStatus == 1"
                            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-4 bg-yellow-100 text-yellow-600">
                            PENDIENTE
                        </span>
                        <span v-if="req.docStatus == 2"
                            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-4 bg-green-100 text-green-600">
                            APROBADO
                        </span>
                        <span v-if="req.docStatus == 3"
                            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-4 bg-red-100 text-red-600">
                            RECHAZADO
                        </span>
                        <span v-if="req.docStatus == 4"
                            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-4 bg-red-100 text-red-600">
                            CANCELADO
                        </span>
                        <span v-if="req.docStatus == 5"
                            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-4 bg-blue-100 text-blue-600">
                            IMPRESO
                        </span>
                        <span v-if="req.docStatus == 6"
                            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-4 bg-gray-100 text-gray-600">
                            CERRADO
                        </span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="noHasData" v-if="!hasData">
            <p class="mt-6 text-xl leading-8 text-gray-700">No hay resultados</p>
        </div>

        <RequestDetails v-if="showDetails" :data="itemSelected" @closeModal="handleClose">
        </RequestDetails>
    </div>
</template>

<script>
import axios from '../../utils/axios.js';
import Swal from 'sweetalert2';
import RequestDetails from './modals/RequestDetails.vue';


export default {
    components: {
        RequestDetails,
    },
    data() {
        return {
            request: [],
            requestFilter: [],
            user: JSON.parse(localStorage.getItem("user")),
            token: localStorage.getItem('token'),
            hasData: true,
            showDetails: false,
            itemSelected: null,
            filename: "Solicitud de compra.pdf",
            showPdfContent: false,
            searchQuery: null,
            statusFilter: 0,
        }
    },
    created() {
        this.getRequest()
    },
    computed: {
        moneyFormatter() {
            return new Intl.NumberFormat('es-mx', {
                style: 'currency',
                currency: 'MXN',
                minimumFractionDigits: 0,
            }).format;
        }
    },
    methods: {
        async getRequest() {
            try {
                let response
                if (this.user.user_level == 3) {
                    response = await axios.get(`/requestPurchases/forUserRequest/${this.user.user_id}`, {
                        headers: {
                            Authorization: `Bearer ${this.token}`,
                        },
                    });
                } 
                else if (this.user.user_level == 1 && this.user.user_id == 7) {

                    response = await axios.get(`/requestPurchases`, {
                        headers: {
                            Authorization: `Bearer ${this.token}`,
                        },
                    })
                } else {
                    response = await axios.get(`/requestPurchases/forDepartment/${this.user.user_department}`, {
                        headers: {
                            Authorization: `Bearer ${this.token}`,
                        },
                    })
                }
                if (response.data.length > 0) {
                    this.request = response.data
                    this.requestFilter = [...this.request];
                } else {
                    this.hasData = false;
                }
            } catch (error) {
                console.log(error);
                Swal.fire({
                    title: 'Error',
                    text: 'No se pudieron recuperar datos',
                    icon: 'error',
                });
                this.hasData = false;
            }

        },
        // toggleItems(id) {
        //     const req = this.request.find(r => r.id === id);
        //     if (req) {
        //         req.showItems = !req.showItems;
        //     }
        // }
        async showModal(item) {
            if (item?.items?.length > 0) {
                this.itemSelected = { ...item }
                const response = await axios.get(`/users/${item.userRequest}`, {
                    headers: {
                        Authorization: `Bearer ${this.token}`,
                    },
                });

                const response2 = await axios.get(`/departments/${item.department}`, {
                    headers: {
                        Authorization: `Bearer ${this.token}`,
                    },
                });

                if (response && response2) {
                    this.itemSelected.userRequest = response.data.user_name + " " + response.data.user_lastname
                    this.itemSelected.department = response2.data.name
                    this.showDetails = true;
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'No se econtro solicitud',
                        icon: 'error',
                    });
                }

            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'No cuenta con items esta solicitud',
                    icon: 'warning',
                });
            }
        },
        handleClose() {
            this.showDetails = false;
            this.itemSelected = null;
        },
        search() {
            if (this.statusFilter) {
                if (this.searchQuery != "" && this.searchQuery != null ) {
                    this.requestFilter = this.request.filter(
                        req =>
                            (req.concept.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                                req.beneficiary.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                                req.docTotal.toString().includes(this.searchQuery)) &&
                            req.docStatus == this.statusFilter
                    )
                } else {
                    this.requestFilter = this.request.filter(req => req.docStatus == this.statusFilter)
                }
            }
            if (this.searchQuery) {
                this.requestFilter = this.request.filter(
                    req =>
                        req.concept.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        req.beneficiary.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        req.docTotal.toString().includes(this.searchQuery)
                )
            }
            if (this.statusFilter == 0 && (this.searchQuery == "" || this.searchQuery == null)) {
                this.requestFilter = [...this.request]
            }
        }
    }
}
</script>
<style></style>