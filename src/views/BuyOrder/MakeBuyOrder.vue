<template>
  <form>
    <div class="space-y-12 sm:space-y-16">
      <div>

        <div class="mx-auto flex place-content-between lg:place-conten-baseline">

          <img class="h-14 lg:h-24 w-auto" src="../../assets/logo.png" alt="Agave Azul" />
          <div class="lg:mr-5">
            <h1 class="text-xl lg:text-2xl font-mono leading-7 text-indigo-600">Orden de Compra</h1>
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
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Provedor</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <select id="provedor" name="provedor"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option v-for="provedor in Provedores" :key="provedor.name"> {{ provedor.name }}</option>
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

        <div v-for="(article, index) in articles" :key="index"
          class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label :for="'product_' + index"
              class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Producto/Servicio</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input :id="'product_' + index" :name="'product_' + index" v-model="article.product" type="text"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="cantidad" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Cantidad</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input :id="'quantity_' + index" :name="'quantity_' + index" v-model="article.quantity" type="number"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="uniPrice" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Precio
              Unitario</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input :id="'unitPrice_' + index" :name="'unitPrice_' + index" v-model="article.unitPrice" type="number"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="totalProduct" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Total</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input :id="'total_' + index" :name="'total_' + index" v-model="article.total" type="number"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="mt-4">
            <button type="button" @click="removeArticle(index)"
              class="text-sm font-semibold leading-6 text-red-600">Quitar artículo</button>
          </div>

        </div>
        <div class="mt-4">
          <button type="button" @click="addArticle" class="text-sm font-semibold leading-6 text-gray-900">Agregar
            artículo</button>
        </div>

      </div>

      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">Justificacion</h2>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">Ingresa una breve justificacion acerca del material
          requerido.</p>

        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label for="subTotal" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Sub-Total</label>
          <div class="mt-2 sm:col-span-2 sm:mt-0">
            <input type="number" name="subTotal" id="subTotal"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label for="iva" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">IVA</label>
          <div class="mt-2 sm:col-span-2 sm:mt-0">
            <input type="number" name="iva" id="iva"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label for="total" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">TOTAL</label>
          <div class="mt-2 sm:col-span-2 sm:mt-0">
            <input type="number" name="total" id="total"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">Detalles</h2>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">La presente requisicion es autorizada por 'User_name
          from store/auth'.</p>

        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label for="nota" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Notas</label>
          <div class="mt-2">
            <textarea rows="4" name="nota" id="nota"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

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
const Provedores = [
  {
    name: 'HIGINIO ROBLES RUIZ',
    
  },
  {
    name: 'AGUSTIN ARCINIEGA BERNAL',
  },
  {
    name: 'COEFICIENTE COMUNICACIONES',
  },
  {
    name: 'JAIME ROMERO NAVARRO',
  },
  {
    name: 'LOURDES BERENICE MORENO GOMEZ',
  },
  {
    name: 'RADIOMOVIL DIPSA SA DE CV',
  },
  {
    name: 'SERVICIOS SAN JUANITO',
  },
  {
    name: 'CAMARA NACIONAL DE LA INDUSTRIA TEQUILERA',
  }
];

// Array para almacenar los datos de cada artículo
const articles = ref([{ product: '', quantity: 0, unitPrice: 0, total: 0 }]);

// Función para agregar un nuevo artículo al formulario
const addArticle = () => {
  articles.value.push({ product: '', quantity: 0, unitPrice: 0, total: 0 });
};

// Función para quitar un artículo del formulario
const removeArticle = (index) => {
  articles.value.splice(index, 1);
};


// Función para enviar el formulario
const submitForm = () => {
  // Aquí puedes procesar los datos del formulario, incluyendo los datos de los artículos
};




</script>



<style scoped>
/* Para navegadores basados en WebKit (Chrome, Safari, Edge) */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>