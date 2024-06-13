<template>
  <form>
    <div class="space-y-12 sm:space-y-16">
      <div>

        <div class="mx-auto flex place-content-between lg:place-conten-baseline">

          <img class="h-14 lg:h-24 w-auto" src="../../assets/logo.png" alt="Agave Azul" />
          <div class="lg:mr-5">
            <h1 class="text-xl lg:text-2xl font-mono leading-7 text-indigo-600">Requisicion</h1>
            <div class="border border-2 border-red-600 rounded-lg py-1 px-4 mx-auto">
              <div class="text-center text-red-600 font-sans mt-1 max-w-2xl text-md leading-6 text-gray-600">
                <span class="font-bold text-md">Nº</span> 0123
              </div>
            </div>

          </div>

        </div>

        <div
          class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Nombre del
              Solicitante</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <!-- <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> -->
                <input type="text" name="username" id="username" autocomplete="username"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Pedro Montes " />
              </div>
            </div>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="country"
              class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Departamento</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <select v-model="selectedDepartment" id="departamente" name="departamento"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option v-for="depa in departments" :key="depa.name" :value='depa.attributes'> {{ depa.name }}</option>
              </select>
            </div>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Codigo del
              Solicitante</label>
            <div
              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input type="number" name="codigo" id="codigo" autocomplete="codigo"
                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="0045 " />

            </div>
          </div>

        </div>
      </div>

      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">Decripcion Articulo</h2>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">Especifica el articulo de la requisicion .</p>

        <div
          class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Material o
              Servicio requerido</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <label for="attribute" class="block text-sm font-medium text-gray-700">Material/Servicio requerido</label>
              <select id="attribute" name="attribute"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option v-for="attribute in selectedDepartment" :key="attribute">{{ attribute }}</option>
              </select>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="cantidad" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Cantidad
              Requerida</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input type="number" name="cantidad" id="cantidad"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="decription"
              class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Descripcion</label>
            <div class="mt-2">
              <textarea rows="4" name="description" id="description"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>




        </div>
      </div>

      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">Justificacion</h2>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">Ingresa una breve justificacion acerca del material
          requerido.</p>

        <div
          class="mt-10 space-y-10 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="decription"
              class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Justificacion</label>
            <div class="mt-2">
              <textarea rows="4" name="justificacion" id="justificacion"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">Autorizacion</h2>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">La presente requisicion es autorizada por 'User_name
          from store/auth'.</p>


      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit"
        class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
  </form>
</template>

<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';


const selectedDepartment = ref('');
const departments = [
  {
    name: 'PRODUCCION',
    attributes: ['AGAVE', 'COMBUSTOLEO', 'ENERGIA ELECTRICA', 'CUOTA FIJA/LITROS PRODUCIDOS CRT']
  },
  {
    name: 'GRANELES',
    attributes: ['ANALISIS', 'CARTUCHO DE CARBON ACTIVADO', 'CARTUCHO DE POLIPROPILENO', 'PLACAS DE CARBON']
  },
  {
    name: 'MADURACION',
    attributes: ['QUEMA DE BARRICAS', 'ANALISIS TEQUILA PARA MADURACION', 'OTROS', 'BARRICAS']
  },
  {
    name: 'COMPRA_INSUMOS_CHULAVISTA',
    attributes: ['CELOCIL', 'ETIQUETAS', 'STIKER']
  },
  {
    name: 'COMERCIO EXTERIOR',
    attributes: ['DESPACHO ADUANAL MARCAS PROPIAS', 'FLETE Y MANIOBRAS MARCAS PROPIAS', 'SEGURO MARCAS PROPIAS', 'IMPUESTOS ADUANALES MARCAS PRIVADAS']
  },
  {
    name: 'ADMINISTRACION',
    attributes: ['ENERGIA ELECTRICA', 'LIMPIEZA PLANTA', 'LIMPIEZA GDL', 'GARRAFONES DE AGUA PLANTA']
  },
  {
    name: 'RECURSOS HUMANOS',
    attributes: ['NOMINA', 'NOMINA EFECTIVO', 'NOMINA EFECTIVO GDL', 'SEGURIDAD SOCIAL']
  },
  {
    name: 'SISTEMAS',
    attributes: ['INTERNET COEFICIENTE', 'INTERNET SATELITAL', 'INTERNET GDL', 'LICENCIAS OFFICE 365']
  }
];






</script>



<style scoped>
/* Para navegadores basados en WebKit (Chrome, Safari, Edge) */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>