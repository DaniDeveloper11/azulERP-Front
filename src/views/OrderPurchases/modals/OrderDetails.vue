<!-- RequestDetails.vue -->
<template>
    <TransitionRoot :show="open">
        <Dialog class="relative z-10" @close="closeModal">
            <TransitionChild enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            </TransitionChild>
            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                            <div class="border-t border-gray-100">
                                <dl class="divide-y divide-gray-100">
                                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt class="text-sm font-medium leading-6 text-gray-900">Departamento</dt>
                                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {{ data.department }}
                                        </dd>
                                    </div>
                                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt class="text-sm font-medium leading-6 text-gray-900">Concepto</dt>
                                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {{ data.concept }}
                                        </dd>
                                    </div>
                                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt class="text-sm font-medium leading-6 text-gray-900">solicitante</dt>
                                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {{ data.userRequest }}
                                        </dd>
                                    </div>
                                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt class="text-sm font-medium leading-6 text-gray-900">Total</dt>
                                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {{ moneyFormatter(data.docTotal) }}
                                        </dd>
                                    </div>
                                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt class="text-sm font-medium leading-6 text-gray-900">Comentarios</dt>
                                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {{ data.comments }}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <!-- Botones para cerrar el modal -->
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
                                                <tr v-for="item in data.items" :key="item.id">
                                                    <td
                                                        class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0 text-center align-middle">
                                                        {{ "x" + item.quantity }}
                                                    </td>
                                                    <td
                                                        class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
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
                            </div>
                            <!-- Botones para cerrar el modal -->
                            <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                <button type="button"
                                    class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                                    @click="pdfDownload">Descargar PDF
                                </button>
                                <button type="button"
                                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                                    @click="closeModal">Cerrar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <div id="orden-compra" ref="pdfContent">
        <div class="text-center">
            <img src="../../../assets/logo.png" width="150" alt="Logo" class="logo">
        </div>
        <div id="encabezado">
            <h1>ORDEN DE COMPRA: {{data.id}}</h1>
            <h2>DESTILADORA AGAVE AZUL</h2>
        </div>

        <div id="informacion-orden">
            <div class="item" id="informacion-cliente">
                <p><strong>PERSONA QUE SOLICITA EL MATERIAL: {{data.userRequest}}</strong></p>
            </div>
            <div class="item" id="informacion-cliente">
                <p><strong>DEPARTAMENTO: {{data.department}}</strong></p>
            </div>

            <!-- <div class="item" id="informacion-proveedor">
                <p><strong>PROVEEDOR:</strong></p>
                <p>Nombre:</p>
                <p>Dirección:</p>
                <p>Teléfono:</p>
            </div> -->
        </div>

        <table id="tabla-productos">
            <thead>
                <tr>
                    <!-- <th>FECHA</th> -->
                    <th>CANTIDAD</th>
                    <th>CONCEPTO</th>
                    <th>P. UNIT.</th>
                    <th>P. TOTAL</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data.items">
                    <!-- <td>2024-07-02</td> -->
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.article }}</td>
                    <td>{{ moneyFormatter(item.price / item.quantity) }}</td>
                    <td>{{ moneyFormatter(item.price) }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">Sub-Total</td>
                    <td id="subtotal">$</td>
                </tr>
                <tr>
                    <td colspan="3">I.V.A. (16%)</td>
                    <td id="iva">$</td>
                </tr>
                <tr>
                    <td colspan="3">Total</td>
                    <td id="total">{{ moneyFormatter(data.docTotal) }}</td>
                </tr>
            </tfoot>
        </table>

        <div id="firmas">
            <div class="firma">
                <p><strong>FIRMA DE RECIBIDO DE QUIEN SOLICITA EL MATERIAL</strong></p>
                <!-- <p>Nombre:</p>
                <p>Fecha:</p> -->
            </div>
            <div class="firma">
                <p><strong>FIRMA DE PROVEEDOR</strong></p>
                <!-- <p>Nombre:</p>
                <p>Fecha:</p> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const open = ref(true)
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['closeModal', 'downloadPDF'])
const showPDF = ref(false);
const closeModal = () => {
    open.value = false
    emit('closeModal', 'Datos desde el hijo')
}

const pdfContent = ref(null);

const pdfDownload = () => {
    nextTick(() => {
        showPDF.value = true;
        if (!pdfContent.value) {
            console.error("No se encontró el contenido del PDF.");
            return;
        }

        setTimeout(() => {
            html2canvas(pdfContent.value, {
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
        showPDF.value = false;
    });
}


const moneyFormatter = new Intl.NumberFormat('es-mx', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
}).format
</script>

<style >
    
#orden-compra {
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 20px;
}

#informacion-orden {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.item {
    display: flex;
    justify-content: space-between;
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

.firma {
    width: 32%;
    text-align: center;
    margin-bottom: 50px
}
</style>
