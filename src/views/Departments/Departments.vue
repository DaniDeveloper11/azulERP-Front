<template>
  <div v-if="showloader" class="flex justify-center w-full">
    <div class="grid h-full">
      <loader class="fixed top-1/2"></loader>
    </div>
  </div>

  <div v-else>
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Departamentos</h1>
        <p class="mt-2 text-sm text-gray-700">Consulta el listado de departamentos previamente creados, además de la posibilidad de crear un nuevo departamento</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button @click="openModal" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Crear Departamento
        </button>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-900 bg-opacity-70"></div>

      <div class="relative bg-white rounded-lg p-8 max-w-md mx-auto">
        <h2 class="text-xl font-bold mb-6 text-center">Crear Departamento</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-6">
            <label for="department_name" class="block text-sm font-medium text-gray-700">Nombre del Departamento</label>
            <input v-model="department_name" id="department_name" name="department_name" type="text" required class="mt-2 px-8 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Insertar
            </button>
          </div>
        </form>
        <button @click="closeModal" class="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-900">&times;</button>
      </div>
    </div>

    <div class="mt-14">
      <div class="overflow-x-auto">
        <table class="border-collapse border border-green-800">
          <thead class="border-b border-neutral-200 bg-[#332D2D] font-medium text-white dark:border-white/10">
            <tr>
              <th class="border px-4 py-2">ID</th>
              <th class="border px-4 py-2">Nombre del Departamento</th>
              <th class="border px-4 py-2">SubDepartamentos</th>
              <th class="border px-4 py-2">Lista</th>
            </tr>
          </thead>
<tbody>
  <tr v-for="(department, index) in departments" :key="index" @click="toggleSubDepartment(index, department.id)" :class="{ 'bg-gray-200': expandedRow === index }">
    <td class="border px-4 py-2 text-center">{{ department.id }}</td>
    <td class="border px-4 py-2 text-center">{{ department.name }}</td>
    <td class="border px-4 py-2 text-center"><button @click="openSubDepartmentModal(department.id)" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
     Añadir
    </button></td>
    <td class="border px-4 py-2">
      <div v-if="expandedRow === index">
        <ul>
          <li v-for="subdepartment in department.subdepartments" :key="subdepartment.id">{{ subdepartment.name }}</li>
        </ul>
      </div>
    </td>
  </tr>
</tbody>
        </table>
      </div>
      
    </div>
  </div>
  <div v-if="showSubDepartmentModal" class="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
    <div class="fixed inset-0 bg-gray-900 bg-opacity-70"></div>

    <div class="relative bg-white rounded-lg p-8 max-w-md mx-auto">
      <h2 class="text-xl font-bold mb-6 text-center">Crear Sub-Departamento</h2>
      <form @submit.prevent="submitSubDepartmentForm">
        <div class="mb-6">
          <label for="subdepartment_name" class="block text-sm font-medium text-gray-700">Nombre del Sub-Departamento</label>
          <input v-model="subdepartment_name" id="subdepartment_name" name="subdepartment_name" type="text" required class="mt-2 px-8 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
        </div>
        <div>
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Insertar
          </button>
        </div>
      </form>
      <button @click="closeSubDepartmentModal" class="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-900">&times;</button>
    </div>
  </div>
</template>
<script>
import useAuthStore from '../../store/auth.js';
import axios from 'axios';
import Swal from 'sweetalert2';
import loader from '../../components/LoaderCss.vue';
import { Collapse, Ripple, initTWE } from "tw-elements";

export default {
  components: {
    loader,
  },
  data() {
    return {
      department_name: '',
      showSubDepartmentModal: false,
      subdepartment_name: '',
      department_create: '',
      showModal: false,
      departments: [],
      users: [],
      showloader: false,
      expandedRows: [],
      expandedRow: null,
      subdepartments: [],
      selectedDepartmentId: null,
    };
  },
  created() {
    this.department_create = new Date().toISOString().split('T')[0];
    initTWE({ Collapse, Ripple });
  },
  methods: {
    async submitForm() {
      const token = localStorage.getItem('token');
      const authStore = useAuthStore();
      const user_id = authStore.user ? authStore.user.user_id : null;

      const departments = {
        name: this.department_name,
        date_create: this.department_create,
        user_create: user_id,
      };
      this.showloader = true;
      try {
        const response = await fetch('http://localhost:3000/departments', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',

          },
          body: JSON.stringify(departments),
        });
        console.log(response);
        if (response.ok) {
          Swal.fire({
            title: 'Correcto',
            text: 'Departamento creado correctamente',
            icon: 'success',
          });
          this.getDepartments();
          this.department_name = '';
          this.department_create = new Date().toISOString().split('T')[0];
          this.showModal = false;
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo crear departamento',
          icon: 'error',
        });
      } finally {
        this.showloader = false;
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
        const response = await axios.get('http://localhost:3000/departments', {
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

    async getUsers() {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:3000/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data) {
          this.users = response.data;
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

    getUserName(userId) {
      const user = this.users.find(user => user.user_id === userId);
      return user ? user.user_name : 'Usuario desconocido';
    },

    openModal() {
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },
    openSubDepartmentModal(departmentId) {
  this.selectedDepartmentId = departmentId;
  this.showSubDepartmentModal = true;
  console.log(departmentId);
},

    closeSubDepartmentModal() {
      this.showSubDepartmentModal = false;
    },
    async submitSubDepartmentForm() {
      console.log(this.selectedDepartmentId);
  const token = localStorage.getItem('token');
  const authStore = useAuthStore();
  const user_id = authStore.user ? authStore.user.user_id : null;

  const subdepartments = {
    name: this.subdepartment_name,
    date_create: this.department_create,
    user_create: user_id,
    id_department: this.selectedDepartmentId,
  };
  this.showloader = true;
  try {
    const response = await fetch('http://localhost:3000/subdepartments', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(subdepartments),
    });
    console.log(response);
    if (response.ok) {
      Swal.fire({
        title: 'Correcto',
        text: 'Sub-Departamento creado correctamente',
        icon: 'success',
      });
      this.getDepartments();
      this.subdepartment_name = '';
      this.department_create = new Date().toISOString().split('T')[0];
      this.showSubDepartmentModal = false; // Cerrar el modal después de la creación
    }
  } catch (error) {
    console.error('Error:', error);
    Swal.fire({
      title: 'Error',
      text: 'No se pudo crear sub-departamento',
      icon: 'error',
    });
  } finally {
    this.showloader = false;
  }
},
 

    async toggleSubDepartment(index, departmentId) {
      const token = localStorage.getItem('token');
      
      this.expandedRow = this.expandedRow === index ? null : index;
      if (this.expandedRow !== null) {
        try {
          const response = await axios.get(`http://localhost:3000/departments/${departmentId}/subdepartments`,{
            headers: {
            Authorization: `Bearer ${token}`,
          },
          });
          if (response.data) {
            this.subdepartments = response.data;
          }
        } catch (error) {
          console.error('Error al obtener los subdepartamentos:', error);
          Swal.fire({
            title: 'Error',
            text: 'No se pudo obtener la lista de subdepartamentos',
            icon: 'error',
          });
        }
      }
    },
  },

  mounted() {
    this.getDepartments();
    this.getUsers();
  },
};
</script>

<style scoped>
</style>