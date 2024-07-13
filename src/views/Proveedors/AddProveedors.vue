<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Alta de proveedor</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Todos los campos del formulario son obligatorios.</p>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div class="sm:col-span-3">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
            <div class="mt-2">
              <input v-model="name" id="name" name="name" type="text" autocomplete="name" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
            <p v-if="!nameValid" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">El campo
                nombre es </span>requerido</p>
          </div>

          <div class="sm:col-span-3">
            <label for="rfc" class="block text-sm font-medium leading-6 text-gray-900">RFC</label>
            <div class="mt-2">
              <input v-model="rfc" id="rfc" name="rfc" type="text" autocomplete="rfc" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <p v-if="!rfcValid" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">El
                  campo rfc es </span>requerido</p>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="curp" class="block text-sm font-medium leading-6 text-gray-900">CURP</label>
            <div class="mt-2">
              <input v-model="curp" id="curp" name="curp" type="text" autocomplete="curp" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <p v-if="!curpValid" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">El
                  campo CURP es </span>requerido</p>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Calle</label>
            <div class="mt-2">
              <input v-model="address" id="address" name="address" type="text" autocomplete="address" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <p v-if="!addressValid" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">El
                  campo
                  direccion es </span>requerido</p>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Ciudad</label>
            <div class="mt-2">
              <input v-model="city" id="city" name="city" type="text" autocomplete="city" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <p v-if="!cityValid" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">El
                  campo
                  ciudad es </span>requerido</p>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Telefono</label>
            <div class="mt-2">
              <input v-model="phone" id="phone" name="phone" type="number" autocomplete="phone" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <p v-if="!phoneValid" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">El
                  campo
                  de numero de telefono es </span>requerido</p>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Estado</label>
            <div class="mt-2">
              <select v-model="state" required
                class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <option value="" disabled selected>Seleccione un estado</option>
                <option v-for="estado in estados" :key="estado.abreviatura" :value="estado.abreviatura">
                  {{ estado.nombre }}
                </option>
              </select>
              <p v-if="!stateValid" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">El
                  campo
                  estado es </span>requerido</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button @click="reset" type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancelar</button>
      <button @click="submitForm" type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthStore from '../../store/auth';
import Swal from 'sweetalert2';
import axios from '../../utils/axios';

const name = ref('');
const rfc = ref('');
const curp = ref('');
const phone = ref('');
const address = ref('');
const city = ref('');
const state = ref('');
const nameValid = ref(true);
const rfcValid = ref(true);
const curpValid = ref(true);
const addressValid = ref(true);
const cityValid = ref(true);
const stateValid = ref(true);
const phoneValid = ref(true);

const estados = ref([
  { nombre: "Aguascalientes", abreviatura: "AGS" },
  { nombre: "Baja California", abreviatura: "BC" },
  { nombre: "Baja California Sur", abreviatura: "BCS" },
  { nombre: "Campeche", abreviatura: "CAMP" },
  { nombre: "Chiapas", abreviatura: "CHIS" },
  { nombre: "Chihuahua", abreviatura: "CHIH" },
  { nombre: "Ciudad de México", abreviatura: "CDMX" },
  { nombre: "Coahuila", abreviatura: "COAH" },
  { nombre: "Colima", abreviatura: "COL" },
  { nombre: "Durango", abreviatura: "DGO" },
  { nombre: "Estado de México", abreviatura: "MEX" },
  { nombre: "Guanajuato", abreviatura: "GTO" },
  { nombre: "Guerrero", abreviatura: "GRO" },
  { nombre: "Hidalgo", abreviatura: "HGO" },
  { nombre: "Jalisco", abreviatura: "JAL" },
  { nombre: "Michoacán", abreviatura: "MICH" },
  { nombre: "Morelos", abreviatura: "MOR" },
  { nombre: "Nayarit", abreviatura: "NAY" },
  { nombre: "Nuevo León", abreviatura: "NL" },
  { nombre: "Oaxaca", abreviatura: "OAX" },
  { nombre: "Puebla", abreviatura: "PUE" },
  { nombre: "Querétaro", abreviatura: "QRO" },
  { nombre: "Quintana Roo", abreviatura: "QROO" },
  { nombre: "San Luis Potosí", abreviatura: "SLP" },
  { nombre: "Sinaloa", abreviatura: "SIN" },
  { nombre: "Sonora", abreviatura: "SON" },
  { nombre: "Tabasco", abreviatura: "TAB" },
  { nombre: "Tamaulipas", abreviatura: "TAMPS" },
  { nombre: "Tlaxcala", abreviatura: "TLAX" },
  { nombre: "Veracruz", abreviatura: "VER" },
  { nombre: "Yucatán", abreviatura: "YUC" },
  { nombre: "Zacatecas", abreviatura: "ZAC" }
]);

const validateField = (field, fieldValid) => {
  if (field.value === '') {
    fieldValid.value = false;
    return false;
  }
  fieldValid.value = true;
  return true;
};

const submitForm = async () => {
  
  const fields = [
    { field: name, fieldValid: nameValid },
    { field: rfc, fieldValid: rfcValid },
    { field: curp, fieldValid: curpValid },
    { field: address, fieldValid: addressValid },
    { field: city, fieldValid: cityValid },
    { field: state, fieldValid: stateValid },
    { field: phone, fieldValid: phoneValid }
  ];

  const allValid = fields.every(({ field, fieldValid }) => validateField(field, fieldValid));

  if (!allValid) return;

  const token = localStorage.getItem('token');

  const formData = {
    name: name.value,
    rfc: rfc.value,
    curp: curp.value,
    phone: phone.value,
    address: address.value,
    city: city.value,
    state: state.value,
    active: 1,
  };

  try {
    const response = await axios.post('/proveedors', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });
    console.log(response);
    if (response) {
      Swal.fire({
        title: 'Correcto',
        text: 'Proveedor creado correctamente',
        icon: 'success',
      });
    } else {
      throw new Error('No se pudo crear Proveedor');
    }
  } catch (error) {
    console.error('Error:', error);
    Swal.fire({
      title: 'Error',
      text: 'No se pudo crear Proveedor',
      icon: 'error',
    });
  }
};

const reset = () => {
  name.value = '';
  rfc.value = '';
  curp.value = '';
  phone.value = '';
  address.value = '';
  city.value = '';
  state.value = '';
}

</script>

/**
* ? Esta permitido precionar el boton de guardar con el form vacio?
* ! Permite subir el formulario en blanco
* ! No existen validaciones de los campos del formulario
**/