<!-- RequestDetails.vue -->
<template>
    <TransitionRoot :show="open">
        <Dialog class="relative z-10" @close="closeModal">
            <TransitionChild enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            </TransitionChild>
            <div class="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all top-14  sm:my-8 sm:p-6 sm:max-w-5xl sm:left-36 sm:h-full sm:max-h-xl sm:top-10 ">
                            <div class="sm:flex w-auto gap-6 ">
                                <!-- info section -->
                                <div class="sm:w-1/2">

                                    <div class="lg:col-start-3 lg:row-end-1">
                                        <h2 class="sr-only">Summary</h2>
                                        <div class="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                                            <dl class="flex flex-wrap">
                                                <div class="flex-auto pl-6 pt-6">
                                                    <dt class="text-sm font-semibold leading-6 text-gray-900">Total
                                                    </dt>
                                                    <dd class="mt-1 text-base font-semibold leading-6 text-gray-900">
                                                        ${{ data.docTotal }}</dd>
                                                </div>
                                                <div class="flex-none self-end px-6 pt-4">
                                                    <dt class="sr-only">Status</dt>
                                                    <dd
                                                        class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                        Paid</dd>
                                                </div>

                                                <!-- Usuarios Involucrados en la orden de compra -->
                                                <div
                                                    class="mt-6 sm:flex w-full flex-none gap-x-20 border-t border-gray-900/5 px-6 pt-6">

                                                    <div class="flex gap-1">
                                                        <dt class="flex-none">
                                                            <span class="sr-only">Client</span>
                                                            <UserCircleIcon class="h-6 w-5 text-gray-400"
                                                                aria-hidden="true" />
                                                        </dt>
                                                        <dd class="text-sm font-medium leading-6 text-gray-900">{{
                                                            data.userRequest.name }} {{ data.userRequest.lastname }}
                                                        </dd>
                                                    </div>
                                                    <div class="flex gap-1">
                                                        <dt class="flex-none">
                                                            <span class="sr-only">Client</span>
                                                            <UserCircleIcon class="h-6 w-5 text-gray-400"
                                                                aria-hidden="true" />
                                                        </dt>
                                                        <dd class="text-sm font-medium leading-6 text-gray-900">
                                                            Paulina Velador
                                                        </dd>
                                                    </div>
                                                    <div class="flex gap-1">
                                                        <dt class="flex-none">
                                                            <span class="sr-only">Client</span>
                                                            <UserCircleIcon class="h-6 w-5 text-gray-400"
                                                                aria-hidden="true" />
                                                        </dt>
                                                        <dd class="text-sm font-medium leading-6 text-gray-900">
                                                            Carlos Sierra </dd>
                                                    </div>
                                                </div>


                                                <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
                                                    <dt class="flex-none">
                                                        <span class="sr-only">Due date</span>
                                                        <CalendarDaysIcon class="h-6 w-5 text-gray-400"
                                                            aria-hidden="true" />
                                                    </dt>
                                                    <dd class="text-sm leading-6 text-gray-500">
                                                        <time datetime="2023-01-31">{{ formateDate(data.date) }}</time>
                                                    </dd>
                                                </div>
                                                <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
                                                    <dt class="flex-none">
                                                        <span class="sr-only">Metodo de pago</span>
                                                        <CreditCardIcon v-if="data.payMethod == 2"  class="h-6 w-5 text-gray-400"
                                                            aria-hidden="true" />
                                                            <!-- Cash Icon -->
                                                        <svg v-if="data.payMethod == 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-gray-400">
                                                        <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                                        <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clip-rule="evenodd" />
                                                        <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                                                        </svg>
                                                        <!-- Movile device Icon -->
                                                        <svg v-if="data.payMethod == 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-gray-400">
                                                        <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                                                        <path fill-rule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clip-rule="evenodd" />
                                                        </svg>    
                                                    </dt>
                                                    <dd class="text-sm leading-6 text-gray-500">Pagado con {{ data.payMethod == 1 ? 'Efectivo' : data.payMethod == 2 ? 'Tarjeta de Credito' : 'Trasferencia' }}
                                                    </dd>
                                                </div>
                                            </dl>
 
                                        </div>
                                    </div>

                                    <!-- Botones para cerrar el modal y vista previa -->
                                    <div class="mt-5  sm:flex sm:gap-4 sm:justify-end">
                                        <button type="button"
                                            class="mt-3 sm:inline-flex sm:w-1/3 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                                            @click="closeModal">Cerrar
                                        </button>
                                        <button type="button"
                                            class="sm:inline-flex sm:w-1/3 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-3"
                                            @click="pdfDownload">Descargar PDF
                                        </button>
                                    </div>


                                </div>

                                <!-- Preview Section -->
                                <div class="sm:w-1/2">
                                    <div class="pdf-preview ">
                                        <div ref="previewContent" class="py-4 px-10">

                                            <div class="flex place-content-between content-center">
                                                <div class="text-center">
                                                    <img src="../../../assets/logo2.png" width="200" alt="Logo"
                                                        class="logo">
                                                </div>
                                                <div id="encabezado" class="align-item-end">
                                                    <h1 class="font-bold text-xs sm:text-lg">ORDEN DE COMPRA</h1>
                                                    <div class="flex justify-end">
                                                        <div
                                                            class="centrar w-1/2 rounded-xl border border-blue-700 text-red-500 text-xs">
                                                            Nº 003</div>
                                                    </div>
                                                    <!-- <h2>DESTILADORA AGAVE AZUL</h2> -->
                                                </div>
                                            </div>

                                            <div id="informacion-orden" class="grid gap-1.5">
                                                <div class="item border border-blue-700" id="informacion-cliente">
                                                    <p class=" bg-blue-700 text-white text-xs py-1 px-3">PERSONA QUE
                                                        SOLICITA EL MATERIAL:</p>
                                                    <p class="py-1 px-3 text-xs text-left"> {{
                                                        data.userRequest.name + ' '
                                                        + data.userRequest.lastname }}</p>
                                                </div>
                                                <div class="item border border-blue-700" id="informacion-cliente">
                                                    <p class=" bg-blue-700 text-white text-xs py-1 px-3">DEPARTAMENTO:
                                                    </p>
                                                    <p class="py-1 px-3 text-xs text-left"> {{ data.department.name }}
                                                    </p>
                                                </div>
                                                <div class="item border border-blue-700" id="informacion-cliente">
                                                    <p class=" bg-blue-700 text-white text-xs py-1 px-3">PROVEEDOR:</p>
                                                    <p class="py-1 px-3 text-xs text-left"> {{ data.beneficiary.name }}
                                                    </p>
                                                </div>


                                            </div>

                                            <table id="tabla-productos">
                                                <thead>
                                                    <tr class="bg-blue-700 text-white text-xs">
                                                        <th>
                                                            <p class="text-center">CANTIDAD</p>
                                                        </th>
                                                        <th>
                                                            <p class="text-center">CONCEPTO</p>
                                                        </th>
                                                        <th>
                                                            <p class="text-center">P. UNIT.</p>
                                                        </th>
                                                        <th>
                                                            <p class="text-center">P. TOTAL</p>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="text-xs">
                                                    <tr class="text-center" v-for="item in data.items" :key="item.id">
                                                        <td>{{ item.quantity }}</td>
                                                        <td>{{ item.article }}</td>
                                                        <td>{{ moneyFormatter(item.price / item.quantity) }}</td>
                                                        <td>{{ moneyFormatter(item.price) }}</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot class="text-xs">

                                                    <tr v-for="index in 2" :key="index" class="h-8">
                                                        <td colspan="1"></td>
                                                        <td colspan="1"></td>
                                                        <td colspan="1"></td>
                                                        <td colspan="1"></td>

                                                    </tr>


                                                    <tr class="font-bold">
                                                        <td colspan="2"></td>
                                                        <td colspan="1">Sub-Total $</td>
                                                        <td id="subtotal"></td>
                                                    </tr>
                                                    <tr class="font-bold">
                                                        <td colspan="2"></td>
                                                        <td colspan="1">I.V.A.</td>
                                                        <td id="iva">$</td>
                                                    </tr>
                                                    <tr class="font-bold">
                                                        <td colspan="2"></td>
                                                        <td colspan="1">Total</td>
                                                        <td id="total">{{ moneyFormatter(data.docTotal) }}</td>
                                                    </tr>
                                                </tfoot>
                                            </table>

                                            <div id="firmas" class="mt-10">
                                                <div class="firma">
                                                    <p class="font-semibold text-xs">FIRMA DEL SOLICITANTE</p>
                                                    <img :src="signatureSolicitante" alt="Firma del usuario"
                                                        v-if="signatureSolicitante" />
                                                </div>
                                                <div class="firma">
                                                    <p class="font-semibold text-xs">FIRMA ADMINISTRACION</p>
                                                    <img :src="signaturePaulina" alt="Firma del usuario"
                                                        v-if="signaturePaulina" />
                                                </div>
                                                <div class="firma">
                                                    <p class="font-semibold text-xs">FIRMA DIRECCION</p>
                                                    <img :src="signatureCarlos" alt="Firma del usuario"
                                                        v-if="signatureCarlos" />
                                                </div>
                                            </div>
                                        </div>
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
import { ref, nextTick, onMounted } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import axios from '../../../utils/axios';
import Swal from 'sweetalert2';
import { CalendarDaysIcon, CreditCardIcon, UserCircleIcon} from '@heroicons/vue/20/solid';
import { formateDate } from '@/utils/formateDate';

const open = ref(true)


const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})



const emit = defineEmits(['closeModal', 'downloadPDF'])
const signatureCarlos = ref('');
const signaturePaulina = ref('');
const signatureSolicitante = ref('');

const closeModal = () => {
    open.value = false
    emit('closeModal', 'Datos desde el hijo')
}

const getSignature = async (userId, ref) => {
    try {
        const response = await axios.get(`/users/signature/${userId}`, {
            responseType: 'blob',
        });
        const blob = response.data;
        const url = URL.createObjectURL(blob);

        if (ref) ref.value = url;
    } catch (error) {
        console.error(`Error al obtener la firma del usuario ${userId}:`, error);
        Swal.fire({
            title: 'Firma no encontrada',
            text: `Firma del usuario ${userId} no encontrada`,
            icon: 'warning',
        });
    }
};

onMounted(() => {
    getSignature(props.data.userRequest.id, signatureSolicitante);
    getSignature(1, signaturePaulina);
    getSignature(2, signatureCarlos);
});

const pdfContent = ref(null);
const previewContent = ref(null); // Nueva referencia para el contenido de la vista previa

const pdfDownload = () => {
    nextTick(() => {
        if (!previewContent.value) {
            console.error("No se encontró el contenido del PDF.");
            return;
        }

        setTimeout(() => {
            html2canvas(previewContent.value, {
                scale: 2, // Aumenta la escala para mejorar la calidad de la imagen
                useCORS: true, // Habilita CORS para evitar problemas con imágenes de diferentes dominios
            }).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: 'portrait', // Usa 'portrait' para asegurar una visualización vertical
                    unit: 'mm', // Cambia la unidad a milímetros
                    format: 'a4' // Usa el formato A4
                });

                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save(`Orden_Compra_${props.data.id}.pdf`);
            }).catch((error) => {
                console.error("Error generando el PDF:", error);
            });
        }, 500); // retraso para asegurar que el contenido esté completamente renderizado
    });
}

// const showPDFPreview = () => {
//     showPreview.value = true;
//     nextTick(() => {
//         if (previewContent.value) {
//             // Puedes hacer algo adicional aquí si es necesario
//         }
//     });
// };

const moneyFormatter = new Intl.NumberFormat('es-mx', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
}).format

</script>


<style scoped>
#orden-compra {
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 20px;
}

/* #informacion-orden {
    display: flex;
    flex-direction: column;
    gap: 20px;
} */

.item {
    display: flex;
    /* justify-content: space-between; */
}

#tabla-productos {
    margin-top: 10px;
    width: 100%;
    border-collapse: collapse;
}

#tabla-productos th,
#tabla-productos td {
    border: 1px solid #ccc;
    padding: 5px;
}

#tabla-productos th {
    text-align: left;
}

#total {
    font-weight: bold;
}

#firmas {
    display: flex;
    justify-content: space-between;
}

#encabezado h1 {
    margin-bottom: 0.5rem;
    
}
.centrar{
    display: grid;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 0.375rem /* 6px */;
    padding-bottom: 0.375rem /* 6px */;
    text-align: center;
}

/* .paco{
    margin-bottom: 0.5rem;
} */

.firma {
    width: 32%;
    text-align: center;
    margin-bottom: 50px;
}

.signature-display {
    min-height: 100px;
}

.signature-display img {
    max-width: 100%;
    height: auto;
}

/* Estilos para la vista previa del PDF */
.pdf-preview {
    border: 1px solid #000;
    margin-top: 20px;
    /* padding: 40px; */
}


</style>
