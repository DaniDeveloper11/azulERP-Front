<template>
  <div>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Orden de compra</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Formulario para ordenes de compra de insumos o mercancía.</p>

        <hr class="bg-indigo-600" style="height:3px; margin: .7rem">

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-2 sm:col-start-1">
            <label for="department" class="block text-sm font-medium leading-6 text-gray-900">Departamento</label>
            <div class="mt-2 sm:max-w-md">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select v-model="department" @change="fetchSubdepartmentsAndUsers" id="department" required
                  class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option v-for="dept in departments" :key="dept.id" :value="dept.id">{{ dept.name }}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="subdepartment" class="block text-sm font-medium leading-6 text-gray-900">Auxiliar</label>
            <div class="mt-2 sm:max-w-md">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select v-model="subdepartment" id="subdepartment" required
                  class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option v-for="subdept in subdepartments" :key="subdept.id" :value="subdept.id">{{ subdept.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="userRequest" class="block text-sm font-medium leading-6 text-gray-900">Solicitante</label>
            <div class="mt-2 sm:max-w-md">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select v-model="userRequest" id="userRequest" required
                  class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option v-for="user in users" :key="user.user_id" :value="user.user_id">{{ user.user_name }}
                    {{ user.user_lastname }}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="beneficiary" class="block text-sm font-medium leading-6 text-gray-900">Beneficiario</label>
            <div class="mt-2 sm:max-w-md">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select v-model="beneficiary" id="beneficiary" required
                  class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option v-for="typ in provedors" :key="typ.id" :value="typ.id">{{ typ.name }}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="type" class="block text-sm font-medium leading-6 text-gray-900">Tipo de caja</label>
            <div class="mt-2 sm:max-w-md">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select v-model="type" id="type" required
                  class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option v-for="typ in typocaja" :key="typ.id" :value="typ.id">{{ typ.value }}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="subType" class="block text-sm font-medium leading-6 text-gray-900">Tipo de gasto</label>
            <div class="mt-2 sm:max-w-md">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select v-model="subType" id="subType" required
                  class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option v-for="typ in typogastos" :key="typ.id" :value="typ.id">{{ typ.value }}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="concept" class="block text-sm font-medium leading-6 text-gray-900">Concepto</label>
            <div class="mt-2 sm:max-w-md">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input type="text" name="concept" id="concept" v-model="concept" required
                  class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Descripción de la compra" />
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="payConditions" class="block text-sm font-medium leading-6 text-gray-900">Condiciones de
              pago</label>
            <div class="mt-2 sm:max-w-md">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select v-model="payConditions" id="payConditions" required
                  class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option v-for="pay in conditionsPay" :key="pay.id" :value="pay.id">{{ pay.value }}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="payMethod" class="block text-sm font-medium leading-6 text-gray-900">Método de pago</label>
            <div class="mt-2 sm:max-w-md">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select v-model="payMethod" id="payMethod" required
                  class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option v-for="pay in paymethods" :key="pay.id" :value="pay.id">{{ pay.value }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Descripción de artículos</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Agregue todos los artículos requeridos en la solicitud.</p>
        <br>
        <div>
          <table class="w-full min-w-full bg-white border">
            <thead>
              <tr>
                <th class="p-4 border">Artículo</th>
                <th class="p-4 border">Descripción</th>
                <th class="p-4 border">Cantidad</th>
                <th class="p-4 border">Precio</th>
                <th class="p-4 border"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="index">
                <td class="py-2 px-4 border">
                  <input v-model="item.article" type="text"
                    class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
                </td>
                <td class="py-2 px-4 border">
                  <input v-model="item.description" type="text"
                    class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
                </td>
                <td class="py-2 px-4 border">
                  <input v-model="item.quantity" type="number"
                    class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
                </td>
                <td class="py-2 px-4 border">
                  <input v-model="item.price" type="number"
                    class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
                </td>
                <td class="py-2 px-4 border">
                  <button @click="removeItem(index)"
                    class="bg-red-500 text-white px-2 py-1 rounded-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19 7l-1 14H6L5 7m6-2h2a2 2 0 012 2v1H7V7a2 2 0 012-2h2zm-1-4h2m2 4v1M7 7V5m5-4h2m-2 4v1M5 7v1m14 0V7m-4-1h2m-2 1H9m4-1h2m-6 0h2m4-1V3" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4">
          <button @click="addItem" class="bg-blue-500 text-white px-4 py-2 rounded-md">Añadir artículo</button>
        </div>
      </div>
    </div>

    <!-- botones para directivos -->
    <div class="mt-6 flex items-center justify-end gap-x-6" v-if="authStore.user.user_level == 2">
      <button type="button" @click="reset" class="text-sm font-semibold leading-6 text-gray-900">Cancelar</button>
      <button type="submit" @click="EnviarForm"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Crear</button>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6" v-if="authStore.user.user_level == 1">
      <button type="button" @click="reset" class="text-sm font-semibold leading-6 text-gray-900">Cancelar</button>
      <button type="submit" @click="requestApprove" v-if="payMethod == 2 || payMethod == 3"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Solicitar aprobacion
      </button>
      <button type="submit" @click="EnviarForm" v-if="payMethod == 1"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Crear
      </button>
    </div>
  </div>
</template>

<script>
import useAuthStore from '../../store/auth.js';
import axios from '../../utils/axios.js';
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  data() {
    const authStore = useAuthStore();
    return {
      authStore,
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
      docTotal: 0,
      items: [],
      departments: [],
      subdepartments: [],
      users: [],
      usersG: [],
      provedors: [],
      typogastos: [
        { id: 1, value: 'Fiscal' },
        { id: 2, value: 'No Fiscal' }
      ],
      typocaja: [
        { id: 1, value: 'Normal' },
        { id: 2, value: 'Caja Chica' },
        { id: 3, value: 'Caja Chica Guadalajara' }
      ],
      paymethods: [
        { id: 1, value: 'Efectivo' },
        { id: 2, value: 'Tarjeta de Credito' },
        { id: 3, value: 'Transferencia' }
      ],
      conditionsPay: [
        { id: 1, value: 'Contado' },
        { id: 2, value: 'Credito' }
      ]
    };
  },
  created() {
    this.addItem();
    this.getProvedors();
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
        userRequest: this.userRequest,
        createBy: user_id,
        docTotal: this.docTotal,
      };

      try {
        const response = await axios.post('/orderPurchases', requestPurchase, {
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
            text: 'Orden creada correctamente',
            icon: 'success',
          }).then(() => {        
            window.location.href = '/listOrders';
          }); 
        } else {
          throw new Error('Error al crear la solicitud');
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo crear la orden de compra',
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

      try {
        const response = await axios.post(`/orderPurchases/${docEntry}/items`, items, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.data) {
          throw new Error('Error al enviar los artículos');
        } else {
          Swal.fire({
            title: 'Correcto',
            text: 'Artículos enviados correctamente',
            icon: 'success',
          });
          this.reset();
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
    async getProvedors() {
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
        const response = await axios.get(`/proveedors/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response && response.status === 200) {
          this.provedors = response.data;
        } else {
          throw new Error('Error en back');
        }
      } catch (error) {
        console.error('Error al obtener los proveedores:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo obtener la lista de proveedores',
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
    },
    reset() {
      this.department = '';
      this.subdepartment = '';
      this.type = '';
      this.subType = '';
      this.concept = '';
      this.beneficiary = '';
      this.payConditions = '';
      this.payMethod = '';
      this.userRequest = '';
      this.docTotal = 0;
      this.items = [];
    }
  },
  mounted() {
    this.getDepartments();
    this.getUsers();
    this.docTotal = this.calculateTotal;
  },
};
</script>

<style scoped></style>