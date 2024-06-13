<template>
    <div>
        <button @click="openModal" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear Departamento
        </button>
    
        <div v-if="showModal" class="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
          <div class="fixed inset-0 bg-gray-900 bg-opacity-70"></div>
    
          <div class="relative bg-white rounded-lg p-8 max-w-md mx-auto">
            <h2 class="text-xl font-bold mb-6 text-center">Crear Departamento</h2>
            <form @submit.prevent="submitForm">
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
        </form>
            <button @click="closeModal" class="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-900">&times;</button>
          </div>
        </div>
       
<hr class="p-8"></hr>
        <div>
            <h2 class="text-xl font-bold mb-4 text-center">Catalogo De Departamentos</h2>
            <div class="overflow-x-auto">
              <table class="table-auto border-collapse w-full">
                <thead>
                  <tr>
                    <th class="border px-4 py-2">ID</th>
                    <th class="border px-4 py-2">Nombre del Departamento</th>
                    <th class="border px-4 py-2">Fecha de Creación</th>
                    <th class="border px-4 py-2">Usuario que Creó</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(department, index) in departments" :key="index">
                    <td class="border px-4 py-2">{{ department.department_id }}</td>
                    <td class="border px-4 py-2">{{ department.department_name }}</td>
                    <td class="border px-4 py-2">{{ department.department_create }}</td>
                    <td class="border px-4 py-2">{{ department.user_create }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
  </template>
  
  <script>
  
  import useAuthStore from '../../store/auth.js'; 
  import axios from 'axios';
  import Swal from 'sweetalert2';
  export default {
    data() {
      return {
        department_name: '',
        department_create: '', 
        showModal: false,
        departments: [],
      };
    },

    created() {
      this.department_create = new Date().toISOString().split('T')[0]; 
    },
    methods: {
      async submitForm() {
        const authStore = useAuthStore();
        const user_id = authStore.user ? authStore.user.user_id : null;
        console.log(user_id);
  
        
        const department = {
          department_name: this.department_name,
          department_create: this.department_create,
          user_create: user_id,
        };
  
        try {
          const response = await fetch('http://localhost:3000/departments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(department),
          });
  
          if (response.ok) {
            Swal.fire({
              title: 'Correcto',
              text: 'Departamento creado correctamente',
              icon: 'success'
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
              icon: 'error'
            });
        }
      },

      async getDepartments() {
  try {
    const response = await axios.get('http://localhost:3000/departments');
    console.log(response);
    if (response) {
      console.log(response);
      this.departments = response.data;
    } else {
      throw new Error('No se pudo obtener la lista de departamentos');
    }
  } catch (error) {
    console.error('Error:', error);
    Swal.fire({
      title: 'Error',
      text: 'No se pudo obtener la lista de departamentos',
      icon: 'error',
    });
  }
},


      openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
    },
    mounted(){
        this.getDepartments();
    },
  };
  </script>
  
  <style scoped>
  </style>
  