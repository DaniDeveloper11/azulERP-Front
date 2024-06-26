<!--
<template>
  <div class="flex flex-col items-center w-full">
    <h2 class="text-center text-3xl font-bold text-blue-800 mb-6 animate-pulse">
      <i class="fas fa-id-badge text-blue-500 mr-2"></i>Solicitud de Compra
    </h2>
    <div class="w-full">
      <hr style="height: 4px; background-color: #01539b;">
      <br>
    </div>
    <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <div class="mb-4">
        <label for="payConditions" class="block text-gray-700 mb-1"><i class="fas fa-file-invoice-dollar text-blue-500 mr-2"></i>Condiciones de Pago</label>
        <div class="flex items-center">
          <input v-model="payConditions" id="payConditions" type="number" class="mt-1 p-2 w-full border rounded-md" />
        </div>
      </div>
      <div class="mb-4">
        <label for="payMethod" class="block text-gray-700 mb-1">
          <i class="fas fa-credit-card text-blue-500 mr-2"></i>Método de Pago
        </label>
        <select v-model="payMethod" id="payMethod" class="mt-1 p-2 w-full border rounded-md">
          <option v-for="pay in paymethods" :key="pay.id" :value="pay.id">{{ pay.value }}</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="payDate" class="block text-gray-700 mb-1"><i class="fas fa-calendar-check text-blue-500 mr-2"></i>Fecha de Pago</label>
        <div class="flex items-center">
          <input v-model="payDate" id="payDate" type="datetime-local" class="mt-1 p-2 w-full border rounded-md" />
        </div>
      </div>
      <div class="mb-4">
        <label for="invoice" class="block text-gray-700 mb-1"><i class="fas fa-receipt text-blue-500 mr-2"></i>Factura</label>
        <div class="flex items-center">
          <input v-model="invoice" id="invoice" type="text" class="mt-1 p-2 w-full border rounded-md" />
        </div>
      </div>
      <div class="mb-4">
        <label for="docReference" class="block text-gray-700 mb-1"><i class="fas fa-file-invoice text-blue-500 mr-2"></i>Referencia del Documento</label>
        <div class="flex items-center">
          <input v-model="docReference" id="docReference" type="number" class="mt-1 p-2 w-full border rounded-md" />
        </div>
      </div>
      
    </form>
    <div class="mt-8 w-full">
      <hr style="height: 4px; background-color: #01539b;">
      <br>
      <h2 class="text-xl font-bold mb-4 text-center" >Artículos</h2>
      <table class="min-w-full bg-white border">
        <thead>
          <tr>
            <th class="py-2 px-4 border">Artículo</th>
            <th class="py-2 px-4 border">Cantidad</th>
            <th class="py-2 px-4 border">Descripción</th>
            <th class="py-2 px-4 border">Precio</th>
            <th class="py-2 px-4 border">Borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index,) in items" :key="index">
            <td class="py-2 px-4 border">
              <input v-model="item.article" type="text" class="w-full p-2 border rounded-md" />
            </td>
            <td class="py-2 px-4 border">
              <input v-model="item.quantity" type="number" class="w-full p-2 border rounded-md" />
            </td>
            <td class="py-2 px-4 border">
              <input v-model="item.description" type="text" class="w-full p-2 border rounded-md" />
            </td>
            <td class="py-2 px-4 border">
              <input v-model="item.price" type="number" class="w-full p-2 border rounded-md" />
            </td>
            <td class="py-2 px-4 border text-center">
              <button @click="removeItem(index)" class="bg-red-500 text-white px-2 py-1 rounded-md">-</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mt-4">
        <button @click="addItem" class="bg-blue-500 text-white px-4 py-2 rounded-md">+</button>
      </div>
      <br>
<div class="grid grid-cols-1 md:grid-cols-8 gap-4 w-full items-end">
  <div class="md:col-span-6"></div>
  <div class="md:col-span-2">
    <label for="docTotal" class="block text-gray-700 mb-1"><i class="fas fa-dollar-sign text-blue-500 mr-2"></i>Total</label>
    <div class="flex items-center">
      <input v-model="docTotal" id="docTotal" type="number" class="mt-1 p-2 w-full border rounded-md" readonly/>
    </div>
  </div>
</div>

      <br>
      <hr style="height: 4px; background-color: #01539b;">
    </div>

    <div class="mt-4 w-full text-center">
      <button @click="EnviarForm" class="bg-green-500 text-white px-6 py-2 rounded-md">Enviar Solicitud</button>
    </div>
  </div>
</template>
-->

<template>
  <form @submit.prevent="submitForm">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Solicitud de compra</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Formulario para solicitudes de compra de insumos o mercancia.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label for="department" class="block text-sm font-medium leading-6 text-gray-900">Departamento</label>
            <div class="mt-2 sm:max-w-md">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select v-model="department" @change="fetchSubdepartmentsAndUsers" id="department" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option v-for="dept in departments" :key="dept.id" :value="dept.id">{{ dept.name }}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="subdepartment" class="block text-sm font-medium leading-6 text-gray-900">Subdepartamento</label>
            <div class="mt-2 sm:max-w-md">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select v-model="subdepartment" id="subdepartment" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option v-for="subdept in subdepartments" :key="subdept.id" :value="subdept.id">{{ subdept.name }}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="userRequest" class="block text-sm font-medium leading-6 text-gray-900">Solicitante</label>
            <div class="mt-2 sm:max-w-md">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select v-model="userRequest" id="userRequest" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option v-for="user in users" :key="user.user_id" :value="user.user_id">{{ user.user_name }} {{user.user_lastname}}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="beneficiary" class="block text-sm font-medium leading-6 text-gray-900">Beneficiario</label>
            <div class="mt-2 sm:max-w-md">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input type="text" name="beneficiary" id="beneficiary" v-model="beneficiary" class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Nombre del beneficiario"/>
              </div>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="type" class="block text-sm font-medium leading-6 text-gray-900">Tipo de caja</label>
            <div class="mt-2 sm:max-w-md">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select v-model="type" id="type" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option v-for="typ in typocaja" :key="typ.id" :value="typ.id">{{ typ.value }}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="subType" class="block text-sm font-medium leading-6 text-gray-900">Tipo de gasto</label>
            <div class="mt-2 sm:max-w-md">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select v-model="subType" id="subType" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option v-for="typ in typogastos" :key="typ.id" :value="typ.id">{{ typ.value }}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="concept" class="block text-sm font-medium leading-6 text-gray-900">Concepto</label>
            <div class="mt-2 sm:max-w-md">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input type="text" name="concept" id="concept" v-model="concept" class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Descripción de la compra"/>
              </div>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="payConditions" class="block text-sm font-medium leading-6 text-gray-900">Condiciones de pago</label>
            <div class="mt-2 sm:max-w-md">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input type="text" name="payConditions" id="payConditions" v-model="payConditions" class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Condiciones de pago"/>
              </div>
            </div>
          </div>

          <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
            <div class="mt-2">
              <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
          </div>

          <div class="col-span-full">
            <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
            <div class="mt-2 flex items-center gap-x-3">
              <UserCircleIcon class="h-12 w-12 text-gray-300" aria-hidden="true" />
              <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
            </div>
          </div>

          <div class="col-span-full">
            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                  <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
            <div class="mt-2">
              <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div class="col-span-full">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
            <div class="mt-2">
              <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
            <div class="mt-2">
              <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
            <div class="mt-2">
              <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
            <div class="mt-2">
              <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

        <div class="mt-10 space-y-10">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
            <div class="mt-6 space-y-6">
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="comments" class="font-medium text-gray-900">Comments</label>
                  <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="candidates" class="font-medium text-gray-900">Candidates</label>
                  <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="offers" class="font-medium text-gray-900">Offers</label>
                  <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
            <p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
            <div class="mt-6 space-y-6">
              <div class="flex items-center gap-x-3">
                <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Everything</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
  </form>
</template>

<script>
import useAuthStore from '../../store/auth.js';
import axios from '../../utils/axios.js';
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.css';
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

export default {
  data() {
    return {
      department: '',
      subdepartment: '',
      type: '',
      subType: '',
      concept: '',
      beneficiary: '',
      payConditions: '',
      payMethod: '',
      docStatus: '1',
      userRequest: '',
      payDate: new Date().toISOString().slice(0, 16),
      invoice: '',
      docReference: '',
      docTotal: 0,
      items: [], 
      departments: [],
      subdepartments: [],
      users: [],
      usersG: [],
      typogastos: [
        { id: '1', value: 'Fiscal' },
        { id: '2', value: 'No Fiscal' }
      ],
      typocaja: [
        { id: '1', value: 'Caja Chica' },
        { id: '2', value: 'Caja Grande' },
        { id: '3', value: 'Caja Chica Guadalajara' }
      ],
      paymethods: [
        { id: '1', value: 'Efectivo' },
        { id: '2', value: 'Tarjeta de Credito' },
        { id: '3', value: 'Transferencia' }
      ]
    };
  },
  created() {
    this.addItem();
  },
  computed: {
    calculateTotal() {
      return this.items.reduce((total, item) => {
        return total + (item.quantity * item.price);
      }, 0);
    }
  },
  watch: {
    items: {
      handler() {
        this.docTotal = this.calculateTotal;
      },
      deep: true
    }
  },
  methods: {
    async EnviarForm() {
      const token = localStorage.getItem('token');
      const authStore = useAuthStore();
      const user_id = authStore.user ? authStore.user.user_id : null;

      const requestPurchase = {
        department: this.department,
        subdepartment: this.subdepartment,
        type: this.type,
        subType: this.subType,
        concept: this.concept,
        beneficiary: this.beneficiary,
        payConditions: this.payConditions,
        payMethod: this.payMethod,
        docStatus: this.docStatus,
        userRequest: user_id,
        payDate: this.payDate,
        invoice: this.invoice,
        docReference: 1,
        docTotal: this.docTotal,
      };
      
      try {
        const response = await axios.post('/requestPurchases', requestPurchase, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.data) {
          const result = response.data;
          const docEntry = result.id;
          await this.submitItems(docEntry);
          Swal.fire({
            title: 'Correcto',
            text: 'Solicitud Creada correctamente',
            icon: 'success',
          });
          this.getDepartments();
        } else {
          throw new Error('Error al crear la solicitud');
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo crear Solicitud de compra',
          icon: 'error',
        });
      }
    },
    async submitItems(docEntry) {
      const token = localStorage.getItem('token');
      const items = this.items.map(item => ({
        ...item,
        docEntry 
      }));
      console.log(items);
      try {
        const response = await  axios.post(`/requestPurchases/${docEntry}/items`, items, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.data) {
          throw new Error('Error al enviar los artículos');
        }
      } catch (error) {
        console.error('Error al enviar los artículos:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudieron enviar los artículos',
          icon: 'error',
        });
      }
    },
    async getDepartments() {
      const token = localStorage.getItem('token');
      if (!token) {
        Swal.fire({
          title: 'Error',
          text: 'Token no encontrado',
          icon: 'error',
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
        } else {
          throw new Error('Respuesta inesperada del servidor');
        }
      } catch (error) {
        console.error('Error al obtener los departamentos:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo obtener la lista de departamentos',
          icon: 'error',
        });
      }
    },
    async fetchSubdepartmentsAndUsers() {
      await this.fetchSubdepartments();
      await this.getUsersByDepartment(this.department);
    },
    async fetchSubdepartments() {
      const token = localStorage.getItem('token');
      if (!token) {
        Swal.fire({
          title: 'Error',
          text: 'Token no encontrado',
          icon: 'error',
        });
        return;
      }
      try {
        const response = await axios.get(`/subdepartments/group/${this.department}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response && response.status === 200) {
          this.subdepartments = response.data;
        } else {
          throw new Error('Error en back');
        }
      } catch (error) {
        console.error('Error al obtener los subdepartamentos:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo obtener la lista de subdepartamentos',
          icon: 'error',
        });
      }
    },
    async getUsers() {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data) {
          this.usersG = response.data;
        } else {
          throw new Error('No se pudo obtener la lista de usuarios');
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo obtener la lista de usuarios',
          icon: 'error',
        });
      }
    },

    async getUsersByDepartment(departmentId) {
      const token = localStorage.getItem('token');
      if (!token) {
        Swal.fire({
          title: 'Error',
          text: 'Token no encontrado',
          icon: 'error',
        });
        return;
      }
      try {
        const response = await axios.get(`/users/departments/${departmentId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response && response.status === 200) {
          this.users = response.data;
        } else {
          throw new Error('Error en back');
        }
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo obtener la lista de usuarios',
          icon: 'error',
        });
      }
    },
    addItem() {
      this.items.push({
        article: '',
        quantity: 0,
        description: '',
        price: 0
      });
      this.docTotal = this.calculateTotal;
    },
    removeItem(index) {
      this.items.splice(index, 1);
      this.docTotal = this.calculateTotal;
    }
  },
  mounted() {
    this.getDepartments();
    this.getUsers();
    this.docTotal = this.calculateTotal;
  },
};
</script>

<style scoped>
</style>