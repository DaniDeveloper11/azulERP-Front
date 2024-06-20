<template>
  <div v-if="showLoader" class="flex justify-center w-full">
    <div class="grid h-full">
      <loader class="fixed top-1/2"></loader>
    </div>
  </div>

  <form v-else @submit.prevent="register">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Perfil</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Esta información será vista por Directivos y Administrativos.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Nombre de Usuario</label>
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">AzulERP.com/</span>
                <input v-model="user_nickname" type="text" name="username" id="username" autocomplete="username"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                  placeholder="janesmith" required />
              </div>
            </div>
          </div>
          <!-- Password -->
          <div class="sm:col-span-4 max-w-md">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
            <input v-model="user_password" type="password" id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="•••••••••" required />
          </div>
          <div class="sm:col-span-4 max-w-md">
            <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900">Confirma Contraseña</label>
            <input v-model="confirm_password" type="password" id="confirm_password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="•••••••••" required />
            <p v-if="user_password && confirm_password && user_password !== confirm_password" class="mt-2 text-sm text-red-600">
              <span class="font-medium">La Contraseña no es correcta</span>, debe coincidir con la anterior.
            </p>
            <p v-if="user_password && confirm_password && user_password === confirm_password" class="mt-2 text-sm text-green-600">
              <span class="font-medium">Contraseña correcta</span>.
            </p>
          </div>
          <!-- Subir Imagen -->
          <div class="col-span-full">
            <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Foto</label>
            <div class="mt-2 sm:flex items-center gap-x-3">
              <div class="mb-2 mt-5 relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex justify-center">
                <svg v-if="!fileUrl" class="w-full text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
                <img v-if="fileUrl" :src="fileUrl" alt="Image preview" class="absolute inset-0 w-full object-cover" />
              </div>
              <div class="hidden sm:flex items-center justify-center sm:w-96">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    <p v-if="fileName" class="mt-2 text-sm text-gray-500">{{ fileName }}</p>
                  </div>
                  <input @change="inputImage" id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
              <div class="sm:hidden">
                <label for="file_input" class="block mb-2 text-sm font-medium text-gray-900">Subir archivo</label>
                <input @change="inputImage" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                  id="file_input" type="file">
                <p class="mt-1 text-sm text-gray-500">SVG, PNG, JPG o GIF (MAX. 800x400px).</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Información Personal</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Use una dirección de correo donde pueda recibir y enviar correos electrónicos.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
            <div class="mt-2">
              <input v-model="user_name" type="text" name="first-name" id="first-name" autocomplete="given-name" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Apellido</label>
            <div class="mt-2">
              <input v-model="user_lastname" type="text" name="last-name" id="last-name" autocomplete="family-name" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Número de Teléfono</label>
            <input v-model="user_phone" type="tel" id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="4491234567" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Correo Electrónico</label>
            <div class="mt-2">
              <input v-model="user_email" id="email" name="email" type="email" autocomplete="email" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">País</label>
            <div class="mt-2">
              <input v-model="user_country" type="text" name="country" id="country" autocomplete="country" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="state" class="block text-sm font-medium leading-6 text-gray-900">Estado</label>
            <div class="mt-2">
              <input v-model="user_state" type="text" name="state" id="state" autocomplete="address-level1" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Dirección</label>
            <div class="mt-2">
              <input v-model="user_address" type="text" name="street-address" id="street-address" autocomplete="street-address" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Domicilio Fiscal</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Use una dirección fiscal válida.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="tax-country" class="block text-sm font-medium leading-6 text-gray-900">País</label>
            <div class="mt-2">
              <input v-model="user_fiscal_country" type="text" name="tax-country" id="tax-country" autocomplete="tax-country" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="tax-state" class="block text-sm font-medium leading-6 text-gray-900">Estado</label>
            <div class="mt-2">
              <input v-model="user_fiscal_state" type="text" name="tax-state" id="tax-state" autocomplete="tax-state" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="tax-street-address" class="block text-sm font-medium leading-6 text-gray-900">Dirección</label>
            <div class="mt-2">
              <input v-model="user_fiscal_address" type="text" name="tax-street-address" id="tax-street-address" autocomplete="tax-street-address" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancelar</button>
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import loader from '@/components/LoaderCss.vue';

export default {
  components: {
    loader,
  },
  data() {
    return {
      user_nickname: '',
      user_password: '',
      confirm_password: '',
      user_name: '',
      user_lastname: '',
      user_email: '',
      user_phone: '',
      user_country: '',
      user_state: '',
      user_address: '',
      user_fiscal_country: '',
      user_fiscal_state: '',
      user_fiscal_address: '',
      showLoader: false,
      fileName: '',
      fileUrl: null,
    };
  },
  methods: {
    inputImage(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.fileUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    async register() {
      if (this.user_password !== this.confirm_password) {
        alert('Las contraseñas no coinciden.');
        return;
      }

      const payload = {
        user_nickname: this.user_nickname,
        user_password: this.user_password,
        user_name: this.user_name,
        user_lastname: this.user_lastname,
        user_email: this.user_email,
        user_phone: this.user_phone,
        user_country: this.user_country,
        user_state: this.user_state,
        user_address: this.user_address,
        user_fiscal_country: this.user_fiscal_country,
        user_fiscal_state: this.user_fiscal_state,
        user_fiscal_address: this.user_fiscal_address,
      };

      try {
        this.showLoader = true;
        const response = await axios.post('/register', payload);
        console.log('Registration successful', response.data);
        // Handle successful registration
      } catch (error) {
        console.error('Registration error', error);
        // Handle registration error
      } finally {
        this.showLoader = false;
      }
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
