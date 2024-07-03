<template>
    <div>
        <!-- <h4 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ returnTitle() }}</h4> -->
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-base font-semibold leading-6 text-gray-900">{{ returnTitle() }}</h1>
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
        <ul role="list" class="divide-y divide-gray-200" v-if="hasData">
            <li v-for="req in request" :key="req.id" v-if="request.length > 0" class="px-4 py-4 sm:px-0">
                <div class="flex justify-between items-center">
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
  
        <OrderDetails v-if="showDetails" :data="itemSelected" @closeModal="handleClose">
        </OrderDetails>
  
  
    </div>
  </template>
  <script>
  import axios from '../../utils/axios.js';
  import Swal from 'sweetalert2';
  import OrderDetails from './modals/OrderDetails.vue';
  
  
  export default {
    components: {
      OrderDetails,
    },
    data() {
        return {
            request: [],
            user: JSON.parse(localStorage.getItem("user")),
            token: localStorage.getItem('token'),
            hasData: true,
            showDetails: false,
            itemSelected: null,
            filename: "Solicitud de compra.pdf",
            showPdfContent: false
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
        returnTitle() {
            return this.user.user_position == 'Miembro' ? "Mis solicitudes de compra" : "Solicitudes de compras"
        },
        async getRequest() {
            try {
                let response
                if (this.user.user_position == "Gerente") {
                    response = await axios.get(`/orderPurchases`, {
                        headers: {
                            Authorization: `Bearer ${this.token}`,
                        },
                    });
                } else if (this.user.user_position == "Miembro") {
  
                    response = await axios.get(`/orderPurchases/forDepartment/${this.user.user_id}`, {
                        headers: {
                            Authorization: `Bearer ${this.token}`,
                        },
                    });
                } else {
                    response = await axios.get(`/orderPurchases`, {
                        headers: {
                            Authorization: `Bearer ${this.token}`,
                        },
                    });
                }
                if (response.data.length > 0) {
                    this.request = response.data
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
                
                if(response && response2){
                    this.itemSelected.userRequest = response.data.user_name + " " +response.data.user_lastname
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
  
    }
  }
  </script>
  <style></style>