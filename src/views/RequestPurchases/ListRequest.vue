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

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div v-for="req in requestFilter" :key="req.id" 
                :class="[ req.docStatus == 1 ? 'focus-within:ring-yellow-600 hover:border-yellow-300': req.docStatus == 2 ? 'focus-within:ring-green-600 hover:border-green-300' :
                    req.docStatus == 3 || req.docStatus == 4 ? 'focus-within:ring-red-600 hover:border-red-300' : 'focus-within:ring-indigo-500 hover:border-gray-400']"
                class="place-content-between relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2
                 focus-within:ring-offset-2 " >
                <div class="min-w-0 flex gap-5" >

                        <button @click="showModal(req)" class="text-blue-500 hover:underline z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                            </svg>
                        </button>

                    <a href="#" class="focus:outline-none">
                        <span class="absolute inset-0" aria-hidden="true" />
                        <p class="text-sm font-medium text-gray-900"><span>Folio: </span>{{ req.id }}</p>
                        <p class="truncate text-sm text-gray-500"><span>Fecha de Creacion: </span>{{ formateDate(req.date)}}</p>
                    </a>
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
        </div>
        <div class="noHasData" v-if="!hasData">
            <p class="mt-6 text-xl leading-8 text-gray-700">No hay resultados</p>
        </div>

        <RequestDetails v-if="showDetails" :data="itemSelected" @closeModal="handleClose">
<<<<<<< HEAD
            
        </RequestDetails>

        <div v-if="showPdfContent" ref="pdfContent" class="pdf-content">
            <!-- <div class="text-center">
                <a href="/"><img src="../../assets/logo.png" width="150" alt="Logo" class="logo"></a>
            </div>
            <div class="border-t border-gray-100">
                <dl class="divide-y divide-gray-100">
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Departamento</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {{ itemSelected.department }}
                        </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Concepto</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {{ itemSelected.concept }}
                        </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Beneficiario</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {{ itemSelected.beneficiary }}
                        </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Total</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {{ moneyFormatter(itemSelected.docTotal) }}
                        </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Comentarios</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {{ itemSelected.comments }}
                        </dd>
                    </div>
                </dl>
            </div>
            <div class="flow-root">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col"
                                        class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    </th>
                                    <th scope="col"
                                        class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Articulo
                                    </th>
                                    <th scope="col"
                                        class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Descripcion
                                    </th>
                                    <th scope="col"
                                        class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Precio
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="item in itemSelected.items" :key="item.id">
                                    <td
                                        class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0 text-center align-middle">
                                        {{ "x" + item.quantity }}
                                    </td>
                                    <td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                                        {{ item.article }}
                                    </td>
                                    <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                                        {{ item.description }}
                                    </td>
                                    <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                        {{ moneyFormatter(item.price) }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> -->
            <div><h1>SE IMPRIME</h1></div>
        </div>
=======
        </RequestDetails>
>>>>>>> fa697d72a552b698ef8932973bb8e1c3b55e3f22
    </div>
</template>

<script>
import axios from '@/utils/axios';
import Swal from 'sweetalert2';
import RequestDetails from './modals/RequestDetails.vue';
import { formateDate } from '@/utils/formateDate';


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
<<<<<<< HEAD
        returnTitle() {
            return this.user.user_position == 'Miembro' ? "Mis solicitudes de compra" : "Solicitudes de compras"
        },
        print(){
         setTimeout(this.getPDF, 500);

        },
=======
>>>>>>> fa697d72a552b698ef8932973bb8e1c3b55e3f22
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

        async showModal(item) {
            
            if (item?.items?.length > 0) {
                this.itemSelected = { ...item }
                const response = await axios.get(`/users/${item.userRequest.id}`, {
                    headers: {
                        Authorization: `Bearer ${this.token}`,
                    },
                });

                const response2 = await axios.get(`/departments/${item.department.id}`, {
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
<<<<<<< HEAD
        getPDF() {
            this.showPdfContent = true; 
            this.$nextTick(() => {
                const pdfContent = this.$refs.pdfContent;
                console.log('pdfContent:', pdfContent);

                if (!pdfContent) {
                    console.error("No se encontró el contenido del PDF.");
                    return;
=======
        search() {
            if (this.statusFilter) {
                if (this.searchQuery != "" && this.searchQuery != null) {
                    this.requestFilter = this.request.filter(
                        req =>
                            (req.concept.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                                req.userRequest.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                                req.docTotal.toString().includes(this.searchQuery)) &&
                            req.docStatus == this.statusFilter
                    )
                } else {
                    this.requestFilter = this.request.filter(req => req.docStatus == this.statusFilter)
>>>>>>> fa697d72a552b698ef8932973bb8e1c3b55e3f22
                }
            }
            if (this.searchQuery) {
                this.requestFilter = this.request.filter(
                    req =>
                        req.concept.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        req.userRequest.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        req.docTotal.toString().includes(this.searchQuery)
                )
            }
            if (this.statusFilter == 0 && (this.searchQuery == "" || this.searchQuery == null)) {
                this.requestFilter = [...this.request]
            }
        },
        formateDate(dateString) {
            const date = new Date(dateString);

<<<<<<< HEAD
                setTimeout(() => {
                    html2canvas(pdfContent).then((canvas) => {
                        const imgData = canvas.toDataURL('image/png');
                        const pdf = new jsPDF({
                            orientation: 'landscape',
                            unit: 'px',
                            format: [canvas.width, canvas.height]
                        });
                        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
                        pdf.save('Orden_Compra.pdf'); // Ocultar el contenido del PDF después de generar el PDF
                          this.showPdfContent = false; 
                    }).catch((error) => {
                        console.error("Error generando el PDF:", error); // Asegurarse de ocultar el contenido en caso de error

                          this.showPdfContent = false; 
                    });
                }, 500); // retraso para asegurar que el contenido esté completamente renderizado
            });
            this.itemSelected = null;
=======
            const day = date.getUTCDate().toString().padStart(2, '0');
            const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Los meses empiezan en 0
            const year = date.getUTCFullYear();

            const formattedDate = `${day}/${month}/${year}`;
            return formattedDate
>>>>>>> fa697d72a552b698ef8932973bb8e1c3b55e3f22
        }
    }
}
</script>
<style></style>