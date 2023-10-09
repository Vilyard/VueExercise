<template>
  <div class="bg-white shadow-lg rounded-lg p-4">
    <div class="text-center">
      <h4 class="text-gray-500">{{ subtitle }}</h4>
      <h2 class="text-2xl font-bold">{{ title }}</h2>
    </div>
    <div class="flex justify-between items-center mt-4">
      <p class="text-sm text-gray-500">{{ label }}</p>
      <div
        class="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M11.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 10H4a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    label: String,
  },
};
</script>
