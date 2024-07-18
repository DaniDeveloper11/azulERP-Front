<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h1 class="text-2xl font-bold mb-4">Bienvenido</h1>
    <div class="mb-6">
      <h3 class="text-lg font-semibold">Firma Actual:</h3>
      <div v-if="signature" v-html="signature" class="signature-display border border-gray-300 p-4 bg-gray-100 rounded-md"></div>
      <p v-else class="text-gray-500">No hay firma registrada.</p>
    </div>
    <button @click="navigateToSignature" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Añadir Nueva Firma</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const signature = ref('');

const navigateToSignature = () => {
  router.push('/signatureForm');
};

onMounted(() => {
  signature.value = localStorage.getItem('userSignature') || '';
});
</script>

<style scoped>
.signature-display {
  min-height: 100px;
}
</style>
