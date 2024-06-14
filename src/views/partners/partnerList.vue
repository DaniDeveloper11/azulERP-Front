<template>
  <div>
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Socios de negocios</h1>
        <p class="mt-2 text-sm text-gray-700">Socios de negocios son todas aquellas entidades(Empresas o individuos),
          que estan asociados a la destiladora de alguna forma, ya sea como proveedor o como cliente</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <RouterLink to="/partners" type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Añadir Usuario</RouterLink>
      </div>
    </div>
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-4">
      <li v-for="person in people" :key="person.partner_id" :class="person.partner_type === 'C' ? 'border-sky-500' : person.partner_type === 'S' ? 'border-red-500':'bg-gray-500'"
        class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow border">
        <div class="flex w-full items-center justify-between space-x-6 p-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="truncate text-sm font-medium text-gray-900">{{ person.partner_cardname }}</h3>
              <span :class="person.partner_type === 'C' ? 'bg-sky-300 ring-sky-600' : person.partner_type === 'S' ? 'bg-red-300 ring-orange-600':'bg-gray-500'"
                class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ">
                {{ person.partner_type === 'C' ? 'Cliente' : person.partner_type === 'S' ? 'Proveedor' : 'Unknow' }}</span>
            </div>
            <p class="mt-1 truncate text-sm text-gray-500">{{ person.partner_contactPerson }}</p>
            <!-- <p class="mt-1 truncate text-sm text-gray-500">{{ person.partner_address}}","{{person.partner_city}}","{{person.partner_state}}</p> -->
            <p class="mt-1 truncate text-sm text-gray-500">RFC/Curp: {{ person.partner_licTradNum }}</p>
            <p class="mt-1 truncate text-sm text-gray-500">Banco: {{ person.partner_bank }}</p>
            <p class="mt-1 truncate text-sm text-gray-500">N° Cuenta: {{ person.partner_bankAccount }}</p>
            <p class="mt-1 truncate text-sm text-gray-500">Metodo Pago: {{ person.partner_methodPay }}</p>


          </div>
          <span :class="person.partner_type === 'C' ? 'bg-sky-500' : person.partner_type === 'S' ? 'bg-red-500':'bg-gray-500'" 
          class="inline-flex h-14 w-14 items-center justify-center rounded-full ">
            <span class="font-medium leading-none text-white">{{ abreviarNombre(person.partner_cardname) }}</span>
          </span>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <a :href="`mailto:${person.partner_email}`"
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                <EnvelopeIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                Correo
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a :href="`tel:${person.partner_phone}`"
                class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                <PhoneIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                Llamar
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'
import { ref, onBeforeMount, onMounted } from 'vue';
import axios from '../../utils/axios';

const people = ref([])

const getPartners = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get('http://localhost:3000/partners',{
      Authorization:`Bearer ${token}`
    });
    people.value = response.data;
    console.log(response.data) // Suponiendo que la API devuelve un array de socios
  } catch (error) {
    console.log('algo salio mal')
    // proxy.$swal.fire({
    //   title: 'Error',
    //   text: 'Nombre de usuario o contraseña incorrectos',
    //   icon: 'error'
    // });
  }
};

onBeforeMount(() => {


})

onMounted(() => {
  getPartners()
})

function abreviarNombre(nombreCompleto) {
  if (typeof nombreCompleto !== 'string') {
    return ''; // Devolver cadena vacía si no es una cadena válida
  }
  
  // Dividir el nombre completo en palabras
  const palabras = nombreCompleto.split(' ');

  // Obtener la primera letra de cada palabra
  const primerasLetras = palabras.map(palabra => palabra.charAt(0).toUpperCase());

  // Unir las primeras letras y devolver como abreviatura
  return primerasLetras.slice(0, 2).join('');
}


</script>