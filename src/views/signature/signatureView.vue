<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h1 class="text-2xl font-bold mb-4">Bienvenido</h1>
    <div class="mb-6">
      <h3 class="text-lg font-semibold">Firma Actual:</h3>
      <div v-if="signatureUrl" class="signature-display border border-gray-300 p-4 bg-gray-100 rounded-md">
        <img :src="signatureUrl" alt="Firma del usuario" />
      </div>
      <p v-else class="text-gray-500">No hay firma registrada.</p>
    </div>
    <button @click="navigateToSignature" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Añadir
      Nueva Firma</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from '../../utils/axios';
import Swal from 'sweetalert2';

const router = useRouter();
const signatureUrl = ref('');
const user = ref({});

const navigateToSignature = () => {
  router.push('/signatureForm');
};

onMounted(() => {
  user.value = JSON.parse(localStorage.getItem('user'));
  getSignature();
});

const getSignature = async () => {
  try {
    const response = await axios.get(`/users/signature/${user.value.user_id}`, {
      responseType: 'blob',
    });
    const blob = response.data;
    const url = URL.createObjectURL(blob);
    signatureUrl.value = url;
  } catch (error) {
    console.error('Error al obtener la firma:', error);
    Swal.fire({
      title: 'Firma no encontrada',
      text: 'Aun no tienes firma, agregala',
      icon: 'warning',
    });
  }
};
</script>

<style scoped>
.signature-display {
  min-height: 100px;
}

.signature-display img {
  max-width: 100%;
  height: auto;
}
</style>
