<template>
  <div>
    <!-- Renderiza la gráfica de barras -->
    <Bar :data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Asegúrate de definir `chartData` correctamente
const chartData = ref({
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
  datasets: [
    {
      label: 'Ventas',
      backgroundColor: '#42A5F5',
      data: [40, 60, 80, 70, 90],
    },
  ],
});

// Opciones de configuración para el gráfico
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Ventas mensuales',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
});
</script>
