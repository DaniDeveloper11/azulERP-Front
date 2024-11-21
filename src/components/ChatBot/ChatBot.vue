<template>
  <div>
    <!-- Botón flotante -->
    <button
      class="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110 hover:bg-blue-700 hover:shadow-2xl animate-bounce-slow"
      @click="toggleChatbot"
    >
      💬
    </button>

    <!-- Chatbot embebido -->
    <div v-if="showChat" class="fixed bottom-14 right-4 w-80 h-96 bg-white rounded-lg shadow-lg">
      <div class="flex justify-between items-center bg-blue-500 text-white p-2 rounded-t-lg px-4">
        <span>Chatbot</span>
        <button @click="toggleChatbot" class="text-white hover:text-white">X</button>
      </div>
      <iframe
        class="w-full h-full rounded-b-lg"
        allow="microphone;"
        :src="chatbotUrl"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// variables
const showChat = ref(false);
const chatbotUrl = "https://console.dialogflow.com/api-client/demo/embedded/7dca0405-1c6e-4e40-a5fa-68f8334eda4f"

const toggleChatbot = () => {
  showChat.value = !showChat.value;
}
</script>

<style>
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15%);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}
</style>
