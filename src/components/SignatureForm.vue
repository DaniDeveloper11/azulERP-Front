<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Firma Digital</h2>
    <VueSignaturePad ref="signaturePad" class="w-full h-64 border border-gray-300 rounded-md" />
    <div class="mt-6 flex justify-between">
      <button @click="save" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Guardar</button>
      <button @click="clear" class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Limpiar</button>
      <button @click="cancel" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Cancelar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from '../utils/axios';

const router = useRouter();
const signaturePad = ref(null);

let userId = null;
try {
  const user = JSON.parse(localStorage.getItem('user'));
  userId = user ? user.user_id : null;
} catch (error) {
  console.error('Error al obtener el usuario desde el localStorage:', error);
}

if (!userId) {
  alert('No se pudo obtener el ID del usuario. Por favor, inicie sesión nuevamente.');
  router.push('/');
}

const save = async () => {
  if (signaturePad.value) {
    const { isEmpty, data } = signaturePad.value.saveSignature();
    if (!isEmpty) {
      try {
        const blob = await (await fetch(data)).blob();
        const formData = new FormData();
        formData.append('signature', blob, 'signature.png');

        await axios.post(`/users/signature/${userId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        router.push('/');
      } catch (error) {
        console.error('Error al guardar la firma:', error);
        alert('Hubo un error al guardar la firma.');
      }
    } else {
      alert('Por favor, firme antes de guardar.');
    }
  }
};

const clear = () => {
  signaturePad.value.clearSignature();
};

const cancel = () => {
  router.push('/');
};
</script>

<style scoped>
.signature-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.buttons {
  display: flex;
  justify-content: space-between;
}
</style>
