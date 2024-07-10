<template>
    <main class="bg-sky-300 lg:pl-72">
      <div class="xl:pr-96">
        <div class=" px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
          <!-- Main area -->
          <h2>Area Grande</h2>
        </div>
      </div>
    </main>
  
    <aside class="fixed inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block bg-red-500">
      <!-- Secondary column (hidden on smaller screens) -->

      <div class="py-20">
        <h3>Secondary Area</h3>
      <p>This is some content inside the aside section. You can add more elements here.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <img src="https://via.placeholder.com/150" alt="Placeholder Image">
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <button type="submit">Submit</button>
      </form>
      </div>
      
    </aside>
  </template>