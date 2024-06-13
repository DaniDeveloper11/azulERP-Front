<template>
    <div class="min-h-screen bg-gray-100 relative items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
        <h2 class="mb-6 text-center text-3xl font-extrabold text-gray-900">Crear Socio de Negocios</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="partner_cardname" class="block text-sm font-medium text-gray-700">Nombre</label>
            <input v-model="partner_cardname" id="partner_cardname" name="partner_cardname" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_address" class="block text-sm font-medium text-gray-700">Dirección</label>
            <input v-model="partner_address" id="partner_address" name="partner_address" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_city" class="block text-sm font-medium text-gray-700">Ciudad</label>
            <input v-model="partner_city" id="partner_city" name="partner_city" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_block" class="block text-sm font-medium text-gray-700">Colonia</label>
            <input v-model="partner_block" id="partner_block" name="partner_block" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_zipcode" class="block text-sm font-medium text-gray-700">Código Postal</label>
            <input v-model="partner_zipcode" id="partner_zipcode" name="partner_zipcode" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_state" class="block text-sm font-medium text-gray-700">Estado</label>
            <input v-model="partner_state" id="partner_state" name="partner_state" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_email" class="block text-sm font-medium text-gray-700">Email</label>
            <input v-model="partner_email" id="partner_email" name="partner_email" type="email" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_phone" class="block text-sm font-medium text-gray-700">Teléfono</label>
            <input v-model="partner_phone" id="partner_phone" name="partner_phone" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_fax" class="block text-sm font-medium text-gray-700">Fax</label>
            <input v-model="partner_fax" id="partner_fax" name="partner_fax" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_contactPerson" class="block text-sm font-medium text-gray-700">Persona de Contacto</label>
            <input v-model="partner_contactPerson" id="partner_contactPerson" name="partner_contactPerson" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_balance" class="block text-sm font-medium text-gray-700">Saldo en Cuenta</label>
            <input v-model="partner_balance" id="partner_balance" name="partner_balance" type="number" step="0.01" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_creditLine" class="block text-sm font-medium text-gray-700">Línea de Crédito</label>
            <input v-model="partner_creditLine" id="partner_creditLine" name="partner_creditLine" type="number" step="0.01" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>

          <div class="mb-4">
            <label for="partner_licTradNum" class="block text-sm font-medium text-gray-700">RFC o CURP</label>
            <input v-model="partner_licTradNum" id="partner_licTradNum" name="partner_licTradNum" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_listNum" class="block text-sm font-medium text-gray-700">Lista de Precios</label>
            <input v-model="partner_listNum" id="partner_listNum" name="partner_listNum" type="number" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_slpcode" class="block text-sm font-medium text-gray-700">Código de Vendedor</label>
            <input v-model="partner_slpcode" id="partner_slpcode" name="partner_slpcode" type="number" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_validFor" class="block text-sm font-medium text-gray-700">Activo o Inactivo</label>
            <input v-model="partner_validFor" id="partner_validFor" name="partner_validFor" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_type" class="block text-sm font-medium text-gray-700">Tipo</label>
            <input v-model="partner_type" id="partner_type" name="partner_type" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_bank" class="block text-sm font-medium text-gray-700">Banco</label>
            <input v-model="partner_bank" id="partner_bank" name="partner_bank" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_bankAccount" class="block text-sm font-medium text-gray-700">Número de Cuenta </label>
            <input v-model="partner_bankAccount" id="partner_bankAccount" name="partner_bankAccount" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_conditionPay" class="block text-sm font-medium text-gray-700">Condiciones de Pago </label>
            <input v-model="partner_conditionPay" id="partner_conditionPay" name="partner_conditionPay" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="partner_methodPay" class="block text-sm font-medium text-gray-700">Forma de Pago </label>
            <input v-model="partner_methodPay" id="partner_methodPay" name="partner_methodPay" type="text" class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
          </div>
  
          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        partner_cardcode: '',
        partner_cardname: '',
        partner_address: '',
        partner_city: '',
        partner_block: '',
        partner_zipcode: '',
        partner_state: '',
        partner_email: '',
        partner_phone: '',
        partner_fax: '',
        partner_contactPerson: '',
        partner_balance: '',
        partner_creditLine: '',
        partner_licTradNum: '',
        partner_listNum: '',
        partner_slpcode: '',
        partner_createDate: '',
        partner_validFor: '',
        partner_type: '',
        partner_bank: '',
        partner_bankAccount: '',
        partner_conditionPay: '',
        partner_methodPay: '',
      };
    },
    methods: {
        //enviar form
      async submitForm() {
        const partner = {
          partner_cardcode: this.partner_cardcode,
          partner_cardname: this.partner_cardname,
          partner_address: this.partner_address,
          partner_city: this.partner_city,
          partner_block: this.partner_block,
          partner_zipcode: this.partner_zipcode,
          partner_state: this.partner_state,
          partner_email: this.partner_email,
          partner_phone: this.partner_phone,
          partner_fax: this.partner_fax,
          partner_contactPerson: this.partner_contactPerson,
          partner_balance: this.partner_balance,
          partner_creditLine: this.partner_creditLine,
          partner_licTradNum: this.partner_licTradNum,
          partner_listNum: this.partner_listNum,
          partner_slpcode: this.partner_slpcode,
          partner_createDate: this.partner_createDate,
          partner_validFor: this.partner_validFor,
          partner_type: this.partner_type,
          partner_bank: this.partner_bank,
          partner_bankAccount: this.partner_bankAccount,
          partner_conditionPay: this.partner_conditionPay,
          partner_methodPay: this.partner_methodPay,
        };
  
        try {
          const response = await fetch('http://localhost:3000/partners', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(partner),
          });
  
          if (response.ok) {
            Swal.fire({
              title: 'Correcto',
              text: 'Socio de Negocios creado correctamente',
              icon: 'success',
            });
            this.resetForm();
          } else {
            throw new Error('Error al crear el Socio de Negocios');
          }
        } catch (error) {
          Swal.fire({
            title: 'Error',
            text: error.message,
            icon: 'error',
          });
        }
      },
      resetForm() {
        this.partner_id = '';
        this.partner_cardcode = '';
        this.partner_cardname = '';
        this.partner_address = '';
        this.partner_city = '';
        this.partner_block = '';
        this.partner_zipcode = '';
        this.partner_state = '';
        this.partner_email = '';
        this.partner_phone = '';
        this.partner_fax = '';
        this.partner_contactPerson = '';
        this.partner_balance = '';
        this.partner_creditLine = '';
        this.partner_licTradNum = '';
        this.partner_listNum = '';
        this.partner_slpcode = '';
        this.partner_createDate = '';
        this.partner_validFor = '';
        this.partner_type = '';
        this.partner_bank = '';
        this.partner_bankAccount = '';
        this.partner_conditionPay = '';
        this.partner_methodPay = '';
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  