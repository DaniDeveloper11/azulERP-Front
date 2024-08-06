<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:top-10">
              <div>
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>

                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Editar Proveedor</DialogTitle>
                  <div class="mt-2">
                    <form @submit.prevent="updateProveedor">
                      <div class="mb-4">
                        <label for="name" class="block text-gray-700">Nombre</label>
                        <input v-model="form.name" type="text" id="name" class="w-full mt-2 p-2 border rounded" />
                      </div>
                      <div class="mb-4">
                        <label for="rfc" class="block text-gray-700">RFC</label>
                        <input v-model="form.rfc" type="text" id="rfc" class="w-full mt-2 p-2 border rounded" />
                      </div>
                      <div class="mb-4">
                        <label for="curp" class="block text-gray-700">CURP</label>
                        <input v-model="form.curp" type="text" id="curp" class="w-full mt-2 p-2 border rounded" />
                      </div>
                      <div class="mb-4">
                        <label for="phone" class="block text-gray-700">Teléfono</label>
                        <input v-model="form.phone" type="text" id="phone" class="w-full mt-2 p-2 border rounded" />
                      </div>
                      <div class="mb-4">
                        <label for="address" class="block text-gray-700">Dirección</label>
                        <input v-model="form.address" type="text" id="address" class="w-full mt-2 p-2 border rounded" />
                      </div>
                      <div class="mb-4">
                        <label for="city" class="block text-gray-700">Ciudad</label>
                        <input v-model="form.city" type="text" id="city" class="w-full mt-2 p-2 border rounded" />
                      </div>
                      <div class="mb-4">
                        <label for="state" class="block text-gray-700">Estado</label>
                        <input v-model="form.state" type="text" id="state" class="w-full mt-2 p-2 border rounded" />
                      </div>
                      <div class="flex justify-end">
                        <button type="button" @click="$emit('close')" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
                        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Actualizar</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, watch, inject } from 'vue';
import axios from '@/utils/axios';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { CheckIcon } from '@heroicons/vue/24/outline';
import Swal from 'sweetalert2';

const fetchProveedors = inject('fetchProveedors')

const props = defineProps({
  open: Boolean,
  proveedor: Object
});

const emit = defineEmits(['close']);
const form = ref({ ...props.proveedor });

watch(() => props.proveedor, (newProveedor) => {
  form.value = { ...newProveedor };
});

const updateProveedor = async () => {
  try {
    await axios.put(`/proveedors/${form.value.id}`, form.value);
    Swal.fire(
      'Actualizado!',
      'El proveedor ha sido actualizado.',
      'success'
    );
    fetchProveedors();
    emit('close');
  } catch (error) {
    console.error('Error updating proveedor:', error);
    Swal.fire(
      'Error!',
      'Hubo un problema actualizando el proveedor.',
      'error'
    );
  }
};
</script>
