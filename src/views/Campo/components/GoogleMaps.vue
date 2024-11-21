<script setup>
  // import { position } from 'html2canvas/dist/types/css/property-descriptors/position';
import { ref } from 'vue'

  defineProps({
    userPosition:Object
  });
  defineEmits(['updatePosition']);


  const center = ref({ lat: 0, lng: 0 })
  const markers = ref([{ position: { lat: 51.093048, lng: 6.84212 } }])
</script>


<template>
    <GMapMap :center="userPosition" :zoom="12" style="width: 350px; height: 300px">
      <GMapCluster :maxZoom="12">
        <GMapMarker
          :position="userPosition"
          :clickable="true"
          :draggable="true"
          @dragend="(e) => $emit('updatePosition', e.latLng.toJSON())"
        />
      </GMapCluster>
    </GMapMap>
  </template>