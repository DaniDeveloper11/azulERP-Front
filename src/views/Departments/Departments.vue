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
        <p class="mt-2 text-sm text-gray-700">Consulta el listado de departamentos previamente creados, además de la
          posibilidad de crear un nuevo departamento</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button @click="openModal"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Crear Departamento
        </button>
      </div>
    </div>

    <hr class="bg-indigo-600" style="height:3px; margin: .7rem">

    <div v-if="showModal" class="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-900 bg-opacity-70"></div>

      <div class="relative bg-white rounded-lg p-8 max-w-md mx-auto">
        <h2 class="text-xl font-bold mb-6 text-center">Crear Departamento</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-6">
            <label for="department_name" class="block text-sm font-medium text-gray-700">Nombre del Departamento</label>
            <input v-model="department_name" id="department_name" name="department_name" type="text" required
              class="mt-2 px-8 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" maxlength="50"/>
          </div>
          <div>
            <button type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Insertar
            </button>
          </div>
        </form>
        <button @click="closeModal"
          class="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-900">&times;</button>
      </div>
    </div>
    <div class="my-4" id="accordion-collapse" data-accordion="collapse">
      <div v-for="(department, index) in departments" :key="department">
        <h2 :id="'accordion-collapse-heading-' + index">
          <button type="button" @click="toggleAccordion(index)"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            :data-accordion-target="'#aaaccordion-collapse-body-' + index" aria-expanded="false"
            :aria-controls="'accordion-collapse-body-' + index">
            <span>{{ department.name }}</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div :id="'accordion-collapse-body-' + index" class="hidden"
          :aria-labelledby="'accordion-collapse-heading-' + index">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <div>
              <div v-for="subdepa in department.details" :key="subdepa.id"
                class="inline-block relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                <div class="flex">
                  <span>{{ subdepa.name }}</span>
                </div>

              </div>

            </div>
            <div class="flex place-content-end">
              <button @click="openSubDepartmentModal(department.id)"
                class="block mt-4 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Añadir
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div v-if="showSubDepartmentModal" class="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-900 bg-opacity-70"></div>

      <div class="relative bg-white rounded-lg p-8 max-w-md mx-auto">
        <h2 class="text-xl font-bold mb-6 text-center">Crear Auxiliar</h2>
        <form @submit.prevent="submitSubDepartmentForm">
          <div class="mb-6">
            <label for="subdepartment_name" class="block text-sm font-medium text-gray-700">Nombre del
              Auxiliar</label>
            <input v-model="subdepartment_name" id="subdepartment_name" name="subdepartment_name" type="text" required
              class="mt-2 px-8 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" maxlength="50"/>
          </div>
          <div>
            <button type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Insertar
            </button>
          </div>
        </form>
        <button @click="closeSubDepartmentModal"
          class="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-900">&times;</button>
      </div>
    </div>
  </div>
</template>

<script>
import useAuthStore from '../../store/auth.js';
import axios from '../../utils/axios.js';
import Swal from 'sweetalert2';
import loader from '../../components/LoaderCss.vue';
import { Collapse, Ripple, initTWE } from "tw-elements";
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

import { initCollapses, initAccordions, } from 'flowbite';

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
      expandedRow: null,
      subdepartments: [],
      selectedDepartmentId: null,
    };
  },
  created() {
    this.department_create = new Date().toISOString().split('T')[0];
    initTWE({ Collapse, Ripple });

    initAccordions();
    initCollapses();
  },
  methods: {
    async submitForm() {
      const token = localStorage.getItem('token');
      const authStore = useAuthStore();
      const user_id = authStore.user ? authStore.user.user_id : null;

      const sanitized = this.department_name.replace(/[^a-zA-Z0-9\s]/g, '');
      if (sanitized.length !== this.department_name.length) {
        Swal.fire({
          title: 'Error',
          text: 'No se permiten caracteres especiales',
          icon: 'error',
        });
      }
      this.department_name = sanitized.slice(0, 50);

      const departments = {
        name: this.department_name,
        date_create: this.department_create,
        user_create: user_id,
      };
      this.showloader = true;
      try {
        const response = await axios.post('/departments',departments, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        });
        if (response.data) {
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
        const response = await axios.get('/departments', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response && response.status === 200) {
          this.departments = response.data;
          for (let i in this.departments) {
            this.departments[i].details = [];
            for (let j in this.subdepartments) {
              if (this.subdepartments[j].id_department === this.departments[i].id) {
                this.departments[i].details.push(this.subdepartments[j]);
              }
            }
          }
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
    async getSubDepartments() {
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
        const response = await axios.get('/subdepartments', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response && response.status === 200) {
          this.subdepartments = response.data;
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
        const response = await axios.get('/users', {
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
    },
    closeSubDepartmentModal() {
      this.showSubDepartmentModal = false;
    },
    async submitSubDepartmentForm() {
      const token = localStorage.getItem('token');
      const authStore = useAuthStore();
      const user_id = authStore.user ? authStore.user.user_id : null;

      const sanitized = this.subdepartment_name.replace(/[^a-zA-Z0-9\s]/g, '');
      if (sanitized.length !== this.subdepartment_name.length) {
        Swal.fire({
          title: 'Error',
          text: 'No se permiten caracteres especiales',
          icon: 'error',
        });
      }
      this.subdepartment_name = sanitized.slice(0, 50);

      const subdepartments = {
        name: this.subdepartment_name,
        date_create: this.department_create,
        user_create: user_id,
        id_department: this.selectedDepartmentId,
      };
      this.showloader = true;
      try {
        const response = await axios.post('/subdepartments',subdepartments, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.data) {
          Swal.fire({
            title: 'Correcto',
            text: 'Auxiliar creado correctamente',
            icon: 'success',
          });
          this.subdepartment_name = '';
          this.department_create = new Date().toISOString().split('T')[0];
          this.showSubDepartmentModal = false;
          this.getDepartments();
          this.getSubDepartments();
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo crear Auxiliar',
          icon: 'error',
        });
      } finally {
        this.showloader = false;
      }
    },
    toggleAccordion(index) {
      this.selectedDepartmentId = this.departments[index].id
      const body = document.getElementById(`accordion-collapse-body-${index}`);
      const isHidden = body.classList.contains('hidden');
      body.classList.toggle('hidden', !isHidden);
      body.previousElementSibling.querySelector('button').setAttribute('aria-expanded', isHidden);
    }
  },
  mounted() {
    this.getSubDepartments();
    this.getUsers();
    this.getDepartments();
  }
};
</script>

<style scoped></style>