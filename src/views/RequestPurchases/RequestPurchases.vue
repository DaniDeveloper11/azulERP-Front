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
        <label for="department" class="block text-gray-700 mb-1">
          <i class="fas fa-building text-blue-500 mr-2"></i>Departamento
        </label>
        <select v-model="department" @change="fetchSubdepartmentsAndUsers" id="department" class="mt-1 p-2 w-full border rounded-md">
          <option v-for="dept in departments" :key="dept.id" :value="dept.id">{{ dept.name }}</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="subdepartment" class="block text-gray-700 mb-1">
          <i class="fas fa-building text-blue-500 mr-2"></i>Subdepartamento
        </label>
        <select v-model="subdepartment" id="subdepartment" class="mt-1 p-2 w-full border rounded-md">
          <option v-for="subdept in subdepartments" :key="subdept.id" :value="subdept.id">{{ subdept.name }}</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="userRequest" class="block text-gray-700 mb-1"><i class="fas fa-user-edit text-blue-500 mr-2"></i>Solicitante</label>
        <div class="flex items-center">
          <select v-model="userRequest" id="userRequest" class="mt-1 p-2 w-full border rounded-md">
            <option v-for="user in users" :key="user.user_id" :value="user.user_id">{{ user.user_name }} {{user.user_lastname}}</option>
          </select>
        </div>
      </div>
            <div class="mb-4">
        <label for="beneficiary" class="block text-gray-700 mb-1"><i class="fas fa-user text-blue-500 mr-2"></i>Beneficiario</label>
          <div class="flex items-center">
          <select v-model="beneficiary" id="beneficiary" class="mt-1 p-2 w-full border rounded-md">
            <option v-for="user in usersG" :key="user.user_id" :value="user.user_id">{{ user.user_name }} {{user.user_lastname}}</option>
          </select>
        </div>
      </div>
      <div class="mb-4">
        <label for="type" class="block text-gray-700 mb-1">
          <i class="fas fa-tag text-blue-500 mr-2"></i>Tipo de caja
        </label>
        <select v-model="type" id="type" class="mt-1 p-2 w-full border rounded-md">
          <option v-for="typ in typocaja" :key="typ.id" :value="typ.id">{{ typ.value }}</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="subType" class="block text-gray-700 mb-1">
          <i class="fas fa-tag text-blue-500 mr-2"></i>Tipo de gasto
        </label>
        <select v-model="subType" id="subType" class="mt-1 p-2 w-full border rounded-md">
          <option v-for="typ in typogastos" :key="typ.id" :value="typ.id">{{ typ.value }}</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="concept" class="block text-gray-700 mb-1"><i class="fas fa-pencil-alt text-blue-500 mr-2"></i>Concepto</label>
        <div class="flex items-center">
          <input v-model="concept" id="concept" type="text" class="mt-1 p-2 w-full border rounded-md" />
        </div>
      </div>
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

<script>
import useAuthStore from '../../store/auth.js';
import axios from '../../utils/axios.js';
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.css';

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