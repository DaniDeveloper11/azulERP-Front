<template>
    <form>
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-5">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Analitica</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Modulo de reportes para análisis de datos y/o aclaraciones.</p>
                    </div>
                    <div class="sm:col-span-1">
                        <button v-if="okBtn" type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buscar</button>
                    </div>
                </div>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Documento</label>
                        <div class="mt-2">
                            <select v-model="type" class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                <option value="" disabled selected>Seleccione un tipo de documento</option>
                                <option v-for="option in types" :key="option.value" :value="option.value">
                                {{ option.nombre }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="sm:col-span-3" v-if="type != ''">
                        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Filtro</label>
                        <div class="mt-2">
                            <select v-model="filter" class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                <option value="" disabled selected>Seleccione un filtro</option>
                                <option v-for="option in filters" :key="option.value" :value="option.value">
                                {{ option.nombre }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="sm:col-span-3" v-if="filter == 1">
                        <label for="initDate">Fecha de inicio</label>
                        <div class="mt-2">
                            <input v-model="initDate" id="initDate" name="initDate" type="date" autocomplete="initDate" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div class="sm:col-span-3" v-if="filter == 1">
                        <label for="closeDate">Fecha de cierre</label>
                        <div class="mt-2">
                            <input v-model="closeDate" id="closeDate" name="closeDate" type="date" autocomplete="closeDate" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div class="sm:col-span-3" v-if="filter == 2">
                        <label for="department">Departamento</label>
                        <div class="mt-2">
                            <input v-model="department" id="department" name="department" type="text" autocomplete="department" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div class="sm:col-span-3" v-if="filter == 3">
                        <label for="subdepartment">Subdepartamento</label>
                        <div class="mt-2">
                            <input v-model="subdepartment" id="subdepartment" name="subdepartment" type="text" autocomplete="subdepartment" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div class="sm:col-span-3" v-if="filter == 4">
                        <label for="conditionsPay">Condiciones de pago</label>
                        <div class="mt-2">
                            <select v-model="conditionsPay" class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                <option value="" disabled selected>Seleccione un tipo de pago</option>
                                <option v-for="option in conditionsPays" :key="option.value" :value="option.value">
                                {{ option.nombre }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="sm:col-span-3" v-if="filter == 5">
                        <label for="payMethod">Metodos de pago</label>
                        <div class="mt-2">
                            <select v-model="payMethod" class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                <option value="" disabled selected>Seleccione un tipo de pago</option>
                                <option v-for="option in paymethods" :key="option.value" :value="option.value">
                                {{ option.nombre }}
                                </option>
                            </select>
                        </div>
                   </div>

                   <div class="sm:col-span-3" v-if="filter == 6">
                        <label for="status">Estatus</label>
                        <div class="mt-2">
                            <select v-model="status" class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                <option value="" disabled selected>Seleccione un estatus</option>
                                <option v-for="option in estatusArray" :key="option.value" :value="option.value">
                                {{ option.nombre }}
                                </option>
                            </select>
                        </div>
                   </div>

                   <div class="sm:col-span-3" v-if="filter == 7">
                        <label for="request">Solicitante</label>
                        <div class="mt-2">
                            <input v-model="request" id="request" name="request" type="text" autocomplete="request" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div class="sm:col-span-3" v-if="filter == 8">
                        <label for="payDate">Fecha de pago</label>
                        <div class="mt-2">
                            <input v-model="payDate" id="payDate" name="payDate" type="date" autocomplete="payDate" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div class="sm:col-span-3" v-if="filter == 9">
                        <label for="benefy">Beneficiario</label>
                        <div class="mt-2">
                            <input v-model="benefy" id="benefy" name="benefy" type="text" autocomplete="benefy" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data(){
        return{
            types: [
                { nombre: "Solicitudes de compra", value: 1 },
                { nombre: "Ordenes de compra", value: 2 }
            ],
            type: '',
            filters: [
                { nombre: "Fecha", value: 1 },
                { nombre: "Departamento", value: 2 },
                { nombre: "Subdepartamento", value: 3 },
                { nombre: "Condiciones de pago", value: 4 },
                { nombre: "Forma de pago", value: 5 },
                { nombre: "Estatus", value: 6 },
                { nombre: "Solicitante", value: 7 },
                { nombre: "Fecha de pago", value: 8 },
                { nombre: "Beneficiario", value: 9 },
                { nombre: "Todos", value: 10 }
            ],
            filter: '',
            initDate: '',
            closeDate: '',
            department: '',
            subdepartment: '',
            conditionsPays: [
                { nombre: 'Contado', value: 1 },
                { nombre: 'Credito', value: 2 }
            ],
            conditionsPay: '',
            paymethods: [
                { nombre: 'Efectivo', value: 1 },
                { nombre: 'Tarjeta de Credito', value: 2 },
                { nombre: 'Transferencia', value: 3 }
            ],
            payMethod: '',
            estatusArray: [
                { nombre: "Pendiente", value: 1 },
                { nombre: "Aprobado", value: 2 },
                { nombre: "Rechazado", value: 3 },
                { nombre: "Cancelado", value: 4 },
                { nombre: "Impreso", value: 5 },
                { nombre: "Cerrado", value: 6 },
                { nombre: "Todos", value: 7 }
            ],
            status: '',
            request: '',
            payDate: '',
            benefy: ''
        }
    },
    computed: {
        okBtn(){
            let tmp = true;
            if(this.filter == ''){
                tmp = false;
            }
            if(this.filter == 1 && (this.initDate == '' || this.closeDate == '')){
                tmp = false;
            }
            if(this.filter == 2 && this.department == ''){
                tmp = false;
            }
            if(this.filter == 3 && this.subdepartment == ''){
                tmp = false;
            }
            if(this.filter == 4 && this.conditionsPay == ''){
                tmp = false;
            }
            if(this.filter == 5 && this.payMethod == ''){
                tmp = false;
            }
            if(this.filter == 6 && this.status == ''){
                tmp = false;
            }
            if(this.filter == 7 && this.request == ''){
                tmp = false;
            }
            if(this.filter == 8 && this.payDate == ''){
                tmp = false;
            }
            if(this.filter == 9 && this.benefy == ''){
                tmp = false;
            }
            return tmp;
        }
    }
}
</script>