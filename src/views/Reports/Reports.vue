
<template>
    <div class="bg-white  sm:py-12">
        <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-base/7 font-semibold text-indigo-900">Reportes</h2>
            <p class="mt-2 max-w-lg text-pretty text-4xl font-medium tracking-tight text-gray-700 sm:text-5xl">Analisis de Datos
            </p>
            <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                <div class="flex p-px lg:col-span-4">
                    <div
                        class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                        <Chart class="h-80 object-cover object-left" />
                        <div class="p-10">
                            <h3 class="text-sm/4 font-semibold text-gray-400">Grafica</h3>
                            <p class="mt-2 text-lg/7 font-medium tracking-tight text-white">Barras</p>
                            <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex p-px lg:col-span-2">
                    <div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
                        <aside class="  overflow-y-auto  px-4 py-6 sm:px-6 lg:px-8 xl:block">

                            <div class="mt-10 grid gap-4 w-full ">
                                <div>
                                    <div class="sm:col-span-3">
                                        <label for="region"
                                            class="block text-sm font-medium leading-6 text-gray-100">Documento</label>
                                        <div class="mt-2">
                                            <select v-model="type"
                                                class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                <option value="" disabled selected>Seleccione un tipo de documento
                                                </option>
                                                <option v-for="option in types" :key="option.value"
                                                    :value="option.value">
                                                    {{ option.nombre }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3" v-if="type != ''">
                                        <label for="region"
                                            class="block text-sm font-medium leading-6 text-gray-900">Filtro</label>
                                        <div class="mt-2">
                                            <select v-model="filter"
                                                class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                <option value="" disabled selected>Seleccione un filtro</option>
                                                <option v-for="option in filters" :key="option.value"
                                                    :value="option.value">
                                                    {{ option.nombre }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3" v-if="filter == 1">
                                        <label for="initDate">Fecha de inicio</label>
                                        <div class="mt-2">
                                            <input v-model="initDate" id="initDate" name="initDate" type="date"
                                                autocomplete="initDate"
                                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3" v-if="filter == 1">
                                        <label for="closeDate">Fecha de cierre</label>
                                        <div class="mt-2">
                                            <input v-model="closeDate" id="closeDate" name="closeDate" type="date"
                                                autocomplete="closeDate"
                                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3" v-if="filter == 2">
                                        <label for="department">Departamento</label>
                                        <div class="mt-2">
                                            <select v-model="department" @change="fetchSubdepartmentsAndUsers"
                                                id="department"
                                                class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ring-gray-300">
                                                <option v-for="dept in departments" :key="dept.id" :value="dept.id">{{
                                                    dept.name }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3" v-if="filter == 3">
                                        <label for="subdepartment">Subdepartamento</label>
                                        <div class="mt-2">
                                            <select v-model="subdepartment" id="subdepartment"
                                                class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                <option v-for="subdept in subdepartments" :key="subdept.id"
                                                    :value="subdept.id">{{
                                                        subdept.name }}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3" v-if="filter == 4">
                                        <label for="conditionsPay">Condiciones de pago</label>
                                        <div class="mt-2">
                                            <select v-model="conditionsPay"
                                                class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                <option value="" disabled selected>Seleccione un tipo de pago</option>
                                                <option v-for="option in conditionsPays" :key="option.value"
                                                    :value="option.value">
                                                    {{ option.nombre }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3" v-if="filter == 5">
                                        <label for="payMethod">Metodos de pago</label>
                                        <div class="mt-2">
                                            <select v-model="payMethod"
                                                class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                <option value="" disabled selected>Seleccione un tipo de pago</option>
                                                <option v-for="option in paymethods" :key="option.value"
                                                    :value="option.value">
                                                    {{ option.nombre }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3" v-if="filter == 6">
                                        <label for="status">Estatus</label>
                                        <div class="mt-2">
                                            <select v-model="status"
                                                class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                <option value="" disabled selected>Seleccione un estatus</option>
                                                <option v-for="option in estatusArray" :key="option.value"
                                                    :value="option.value">
                                                    {{ option.nombre }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3" v-if="filter == 7">
                                        <label for="request">Solicitante</label>
                                        <div class="mt-2">
                                            <select v-model="request" id="userRequest"
                                                class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                <option v-for="user in users" :key="user.user_id" :value="user.user_id">
                                                    {{
                                                        user.user_name }}
                                                    {{ user.user_lastname }}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3" v-if="filter == 8">
                                        <label for="payDate">Fecha de pago</label>
                                        <div class="mt-2">
                                            <input v-model="payDate" id="payDate" name="payDate" type="date"
                                                autocomplete="payDate"
                                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3" v-if="filter == 9">
                                        <label for="benefy">Beneficiario</label>
                                        <div class="mt-2">
                                            <input v-model="benefy" id="benefy" name="benefy" type="text"
                                                autocomplete="benefy"
                                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        </div>
                                    </div>
                                </div>

                                <div class="flex justify-end gap-6">
                                    <div class="sm:col-span-1">
                                        <button @click="getData" type="button"
                                            :class="[okBtn ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'bg-gray-300 text-black cursor-not-allowed']"
                                            class="rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm">Buscar</button>
                                    </div>
                                    <div class="sm:col-span-1">
                                        <button @click="exportToExcel" type="button"
                                            :class="[data.length > 0 ? 'bg-lime-600 text-white hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600' : 'bg-gray-300 text-black cursor-not-allowed']"
                                            class="rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm">Descargar</button>
                                    </div>
                                </div>

                            </div>
                        </aside>
                        <div class="p-10">
                            <h3 class="text-sm/4 font-semibold text-gray-400">Filtro</h3>
                            <p class="mt-2 text-lg/7 font-medium tracking-tight text-white">Encuentra datos Facilmente
                            </p>
                            <p class="mt-2 max-w-lg text-sm/6 text-gray-400">filtra y genera una tabla con los datos de los egresos para despues exportar XLSX.</p>
                        </div>
                    </div>
                </div>
                <div class="flex p-px lg:col-span-2">
                    <div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
                        <PolarArea class="h-80 object-cover object-center" />
                        <div class="p-10">
                            <h3 class="text-sm/4 font-semibold text-gray-400">Gradica</h3>
                            <p class="mt-2 text-lg/7 font-medium tracking-tight text-white">Area Polar</p>
                            <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Vestibulum ante ipsum primis in faucibus
                                orci luctus et ultrices posuere cubilia.</p>
                        </div>
                    </div>
                </div>
                <div class="flex p-px lg:col-span-4">
                    <div
                        class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                        <Scatter class="max-h-80 object-cover object-left" />
                        <div class="p-10">
                            <h3 class="text-sm/4 font-semibold text-gray-400">Grafica</h3>
                            <p class="mt-2 text-lg/7 font-medium tracking-tight text-white">Scatter</p>
                            <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Sed congue eros non finibus molestie.
                                Vestibulum euismod augue vel commodo vulputate. Maecenas at augue sed elit dictum
                                vulputate.</p>
                        </div>
                    </div>
                </div>
                <div class="flex p-px lg:col-span-6">
                    <div
                        class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                        <div class="border-b border-gray-900/10 pb-12 overflow-x-auto" v-if="data.length > 0">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Folio</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Fecha</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Departamento</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Auxiliar</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Subauxiliar</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Concepto</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Total</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Beneficiario</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Condiciones de pago</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Forma de pago</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Estatus</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Solicitante</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Fecha de pago</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Factura</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tipo</th>
                                        <th
                                            class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Banco</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="row, index in data" :key="index">
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            {{ row.id }}</td>
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            {{
                                                formateDate(row.date) }}</td>
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            {{
                                                row.department.name }}</td>

                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            {{ row.type == 1
                                                ? 'Normal' : row.type == 2 ? 'Caja chica' : 'Caja chica Guadalajara' }}</td>
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            {{ row.concept }}
                                        </td>
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">$
                                            {{ row.docTotal
                                            }}</td>
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            {{
                                                row.beneficiary.name }}</td>
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            {{
                                                row.payConditions == 1 ? 'Contado' : 'Crédito' }}</td>
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            {{ row.payMethod
                                                == 1 ? 'Efectivo' : row.payMethod == 2 ? 'Tarjeta de crédito' :
                                            'Transferencia' }}</td>
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            {{
                                                estatusArray[row.docStatus - 1].nombre }}</td>
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            {{ row.userRequest.name +
                                                " " + row.userRequest.lastname }}</td>
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider"
                                            v-if="row.payDate != null">{{ formateDate(row.payDate) }}</td>
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider"
                                            v-if="row.payDate == null"></td>
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            {{ row.invoice }}
                                        </td>
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            {{ row.typeFiscal
                                            }}</td>
                                        <td class="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">
                                            {{ row.bank }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="p-10">
                            <h3 class="text-sm/4 font-semibold text-gray-400">Tabla de Datos</h3>
                            <p class="mt-2 text-lg/7 font-medium tracking-tight text-white">Datos</p>
                            <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Sed congue eros non finibus molestie.
                                Vestibulum euismod augue vel commodo vulputate. Maecenas at augue sed elit dictum
                                vulputate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { columns } from 'fontawesome';
import useAuthStore from '../../store/auth.js';
import axios from '../../utils/axios.js';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import Chart from '../../components/ChartJs/Chart.vue';
import Pie from '../../components/ChartJs/Pie.vue';
import PolarArea from '../../components/ChartJs/PolarArea.vue';
import Scatter from '@/components/ChartJs/Scatter.vue';


export default {
    data() {
        return {
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
            departments: [],
            department: '',
            subdepartments: [],
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
            users: [],
            request: '',
            payDate: '',
            benefy: '',
            data: [],
            columns: [
                { label: "Folio", field: "id" },
                { label: "Fecha", field: "date" },
                { label: "Departamento", field: "departmentName" },
                { label: "Auxiliar", field: "subdepartmentName" },
                { label: "Subauxiliar", field: "type" },
                { label: "Concepto", field: "concept" },
                { label: "Total", field: "docTotal" },
                { label: "Beneficiario", field: "beneficiary" },
                { label: "Condiciones de pago", field: "payConditions" },
                { label: "Forma de pago", field: "payMethod" },
                { label: "Estatus", field: "docStatus" },
                { label: "Solicitante", field: "userName" },
                { label: "Fecha de pago", field: "payDate" },
                { label: "Factura", field: "invoice" },
                { label: "Tipo", field: "typeFiscal" },
                { label: "Banco", field: "bank" }
            ],
            data2: [],
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Gráfica de gastos por departamento del año en curso'
                    }
                }
            }
        }
    },
    components: {
        Chart, Pie, PolarArea, Scatter
    },
    created() {
        this.getDepartments();
        this.getSubdepartments();
        this.getUsers();
    },
    computed: {
        okBtn() {
            let tmp = true;
            if (this.filter == '') {
                tmp = false;
            }
            if (this.filter == 1 && (this.initDate == '' || this.closeDate == '')) {
                tmp = false;
            }
            if (this.filter == 2 && this.department == '') {
                tmp = false;
            }
            if (this.filter == 3 && this.subdepartment == '') {
                tmp = false;
            }
            if (this.filter == 4 && this.conditionsPay == '') {
                tmp = false;
            }
            if (this.filter == 5 && this.payMethod == '') {
                tmp = false;
            }
            if (this.filter == 6 && this.status == '') {
                tmp = false;
            }
            if (this.filter == 7 && this.request == '') {
                tmp = false;
            }
            if (this.filter == 8 && this.payDate == '') {
                tmp = false;
            }
            if (this.filter == 9 && this.benefy == '') {
                tmp = false;
            }
            return tmp;
        }
    },
    methods: {
        async getDepartments() {
            const token = localStorage.getItem('token');
            if (!token) {
                Swal.fire({
                    title: 'Error',
                    text: 'Token no encontrado',
                    icon: 'error'
                });
                return;
            }
            try {
                const response = await axios.get('/departments', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response && response.status === 200) {
                    this.departments = response.data;
                }
                else {
                    throw new Error('Respuesta inesperada del servidor');
                }
            }
            catch (error) {
                console.error('Error al obtener los departamentos:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'No se pudo obtener la lista de departamentos',
                    icon: 'error'
                });
            }
        },
        async getSubdepartments() {
            const token = localStorage.getItem('token');
            if (!token) {
                Swal.fire({
                    title: 'Error',
                    text: 'Token no encontrado',
                    icon: 'error'
                });
                return;
            }
            try {
                const response = await axios.get('/subdepartments', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response && response.status === 200) {
                    this.subdepartments = response.data;
                }
                else {
                    throw new Error('Respuesta inesperada del servidor');
                }
            }
            catch (error) {
                console.error('Error al obtener los subdepartamentos:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'No se pudo obtener la lista de subdepartamentos',
                    icon: 'error'
                });
            }
        },
        async getUsers() {
            const token = localStorage.getItem('token');
            if (!token) {
                Swal.fire({
                    title: 'Error',
                    text: 'Token no encontrado',
                    icon: 'error'
                });
                return;
            }
            try {
                const response = await axios.get('/users', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response && response.status === 200) {
                    this.users = response.data;
                }
                else {
                    throw new Error('Respuesta inesperada del servidor');
                }
            }
            catch (error) {
                console.error('Error al obtener los usuarios:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'No se pudo obtener la lista de usuarios',
                    icon: 'error'
                });
            }
        },
        async getData() {
            if (this.okBtn) {
                let tmp;
                if (this.type == 1) {
                    tmp = "requestPurchases";
                }
                else {
                    tmp = "orderPurchases";
                }
                let tmp2;
                if (this.filter == 1) {
                    tmp2 = "betweenDates";
                }
                else if (this.filter == 2) {
                    tmp2 = `/forDepartment/${this.department}`;
                }
                else if (this.filter == 3) {
                    tmp2 = `/forSubdepartment/${this.subdepartment}`;
                }
                else if (this.filter == 4) {
                    tmp2 = `/forPayConditions/${this.conditionsPay}`;
                }
                else if (this.filter == 5) {
                    tmp2 = `/forPayMethods/${this.payMethod}`;
                }
                else if (this.filter == 6) {
                    tmp2 = `/forStatus/${this.status}`;
                }
                else if (this.filter == 7) {
                    tmp2 = `/forUserRequest/${this.request}`;
                }
                else if (this.filter == 8) {
                    tmp2 = `/forPayDate/${this.payDate}`;
                }
                else if (this.filter == 9) {
                    tmp2 = `/forPayBeneficiary/${this.benefy}`;
                }
                else if (this.filter == 10) {
                    tmp2 = ""
                }
                const token = localStorage.getItem('token');
                if (!token) {
                    Swal.fire({
                        title: 'Error',
                        text: 'Token no encontrado',
                        icon: 'error'
                    });
                    return;
                }
                try {
                    let response;
                    if (this.filter == 1) {
                        response = await axios.get(`/${tmp}/forDates/${tmp2}`, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                            params: {
                                initDate: this.initDate,
                                closeDate: this.closeDate
                            }
                        });
                    }
                    else {
                        response = await axios.get(`/${tmp}${tmp2}`, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            }
                        });
                    }
                    if (response && response.status === 200) {
                        this.data = response.data;
                        if (this.data.length == 0) {
                            Swal.fire({
                                title: 'Error',
                                text: 'No se encontraron registros',
                                icon: 'error'
                            });
                            this.reset();
                        }
                        else {
                            this.data2 = this.obtenerDatosGrafica(this.data)
                            this.reset();
                        }
                    }
                    else {
                        throw new Error('Respuesta inesperada del servidor');
                    }
                }
                catch (error) {
                    console.error('Error al obtener las requisiciones:', error);
                    Swal.fire({
                        title: 'Error',
                        text: 'No se pudo obtener la lista de requisiciones',
                        icon: 'error'
                    });
                }
            }
            else {
                Swal.fire({
                    title: 'Error',
                    text: 'No se puede realizar la busqueda sin filtros',
                    icon: 'error'
                });
            }
        },
        formateDate(dateString) {
            const date = new Date(dateString);

            const day = date.getUTCDate().toString().padStart(2, '0');
            const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
            const year = date.getUTCFullYear();

            const formattedDate = `${day}/${month}/${year}`;
            return formattedDate
        },
        exportToExcel() {
            if (this.data.length > 0) {
                console.log(this.data);
                const datosExcel = this.data.map(row => ({
                    Folio: row.id,
                    Fecha: this.formateDate(row.date),
                    Departamento: row.department.name,
                    //  'Sub-Departamento': row.department.subdepartment.id,
                    'Tipo de caja': row.type == 1 ? 'Normal' : row.type == 2 ? 'Caja chica' : 'Caja chica Guadalajara',
                    Concepto: row.concept,
                    Total: row.docTotal,
                    Proveedor: row.beneficiary.name,
                    'Condiciones de pago': row.payConditions == 1 ? 'Contado' : 'Crédito',
                    'Forma de pago': row.payMethod == 1 ? 'Efectivo' : row.payMethod == 2 ? 'Tarjeta de crédito' : 'Transferencia',
                    Estatus: this.estatusArray[row.docStatus - 1].nombre,
                    Solicitante: row.userRequest.name + " " + row.userRequest.lastname,
                    'Fecha de pago': row.payDate ? this.formateDate(row.payDate) : '',
                    Factura: row.invoice,
                    Tipo: row.typeFiscal,
                    Banco: row.bank
                }));

                const worksheet = XLSX.utils.json_to_sheet(datosExcel);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
                XLSX.writeFile(workbook, 'Reporte de egresos.xlsx');
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'No se puede descargar el archivo de excel sin registros',
                    icon: 'error'
                });
            }
        },

        reset() {
            this.type = '',
                this.filter = '',
                this.initDate = '',
                this.closeDate = '',
                this.department = '',
                this.subdepartment = '',
                this.conditionsPay = '',
                this.payMethod = ''
            this.status = '',
                this.request = '',
                this.payDate = '',
                this.benefy = ''
        },
        obtenerDatosGrafica(data) {
            let data2 = {
                labels: [],
                datasets: [{
                    label: '$ pesos mexicanos',
                    data: [],
                    backgroundColor: [
                        'rgb(165 180 252)'
                    ],
                    borderColor: [
                        'rgb(49 46 129)'
                    ],
                    borderWidth: 1
                }]
            };

            let sumatorias = {};

            data.forEach(item => {
                if (!sumatorias[item.department]) {
                    sumatorias[item.department] = {
                        label: item.departmentName,
                        sum: 0
                    };
                }
                sumatorias[item.department].sum += item.docTotal;
            });

            for (let key in sumatorias) {
                data2.labels.push(sumatorias[key].label);
                data2.datasets[0].data.push(sumatorias[key].sum);
            }

            return data2;
        }
    }
}
</script>