<template>
  <header class="flex items-center justify-between space-x-4">
    <div class="inline-flex items-center space-x-2">
      <div
        class="bg-logo-image bg-relative bg-no-repeat w-10 align-middle h-10"
      ></div>
      <div class="bg-logo-label bg-relative bg-no-repeat w-40 h-32"></div>
    </div>
    <div class="inline-flex items-center space-x-2">
      <div
        v-for="(button, index) in buttons"
        :key="index"
        class="relative inline-block"
      >
        <button
          @click="toggleButton(button)"
          :class="{ btn: !button.isClicked, 'btn-clicked': button.isClicked }"
        >
          {{ button.label }}
        </button>
        <div
          v-if="button.isClicked"
          class="absolute text-menuText left-0 mt-2 p-2 bg-maintext shadow-lg"
        >
          <p>This is the popup menu for {{ button.label }}</p>
        </div>
      </div>
      <div></div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    buttons: Array,
    activeButton: Object,
    toggleButton: Function,
  },
};
</script>

<style scoped>
.btn-clicked {
  @apply bg-button text-mainText w-32 h-11 rounded-full m-2;
}
.btn {
  @apply bg-none w-32 h-11 text-mainText m-2;
}
</style>
