<template>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Tutoriales</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Biblioteca de videos tutoriales referentes al funcionamiento de la aplicación web Azul ERP.
        </p>
        <hr class="bg-indigo-600" style="height:3px; margin: .7rem" />
  
        <div class="2xl:flex gap-4 justify-center">
          <div class="flex-col 2xl:w-3/4">
            <div class="h-72 lg:h-[600px] bg-gray-200">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Yyv4xcXj4W0?si=6nd1FAuuITyFHuUZ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <h3 class="text-lg font-semibold mt-4">Nombre del tutorial</h3>
            <div class="flex items-center mt-2">
              <div class="w-16 h-16 rounded-full overflow-hidden">
                <img src="@/assets/agave.png" alt="Actuar Logo" />
              </div>
              <div class="ml-4">
                <h5 class="text-md font-medium">Destiladora Agave Azul</h5>
                <p class="text-sm text-gray-500">http://Tequilera Agave Azul</p>
              </div>
            </div>
          </div>
          <div class="2xl:w-1/4">
            <div class="xl:max-h-screen xl:overflow-y-auto">
              <div
                v-for="(imagen, index) in images"
                :key="index"
                class="p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition"
              >
                <div class="flex items-center">
                  <div class="sm:w-1/3 2xl:w-4/6 bg-gray-300 overflow-hidden rounded-lg">
                    <img :src="imagen" class="w-full" />
                  </div>
                  <div class="sm:w-2/3 2xl:w-3/5 ml-4">
                    <p class="text-md font-semibold"> Tutorial {{ index + 1 }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import images from './utils/imageLoader.js'
  </script>
  
  <style></style>
  