<template>
  <header class="flex justify-between items-start">
    <!-- Logo -->
    <div class="inline-flex">
      <NavbarLogo />
    </div>

    <!-- Buttons for medium and larger screens -->
    <div class="hidden lg:flex p-1 gap-1.5">
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
          class="absolute left-0 p-10 text-menuText bg-mainText opacity-80 shadow-lg rounded-lg transform translate-y-6 w-popupMenuWidth h-popupMenuHeight"
        >
          <div class="grid grid-cols-2 gap-6">
            <div v-for="i in 4" :key="i" class="grid grid-cols-2 gap-1">
              <div class="col-span-2 flex justify-between items-center">
                <p class="text-base font-bold">Integer quis auctor elit</p>
                <CustomBlackArrow />
              </div>
              <p class="text-base col-span-2">Arcu bibendum at varius vel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hamburger menu for small screens -->
    <button @click="toggleMobileMenu" class="block lg:hidden p-2">
      <!-- Toggle between hamburger and close (X) icons -->
      <component
        :is="isMobileMenuOpen ? 'CloseIcon' : 'HamburgerIcon'"
        :color="isMobileMenuOpen ? 'white' : 'white'"
      />
    </button>

    <!-- Mobile Menu for small screens -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden flex fixed inset-0 p-4 bg-menuText"
    >
      <!-- Logo in the mobile menu -->
      <div
        class="bg-logo-image bg-relative bg-no-repeat w-10 align-left h-10"
      ></div>
      <!-- Close (X) button -->
      <button @click="toggleMobileMenu" class="absolute top-4 right-5 p-2">
        <component :is="'CloseIcon'" :color="'white'" />
      </button>

      <!-- Menu items -->
      <ul class="flex flex-col gap-2 justify-center align-left">
        <li v-for="(button, index) in buttons" :key="index">
          <button
            @click="toggleButton(button)"
            :class="{ btn: !button.isClicked, 'btn-clicked': button.isClicked }"
          >
            {{ button.label }}
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
import HamburgerIcon from "../assets/icons/HamburgerIcon.vue";
import CloseIcon from "../assets/icons/CloseIcon.vue";
import NavbarLogo from "../assets/icons/NavbarLogo.vue";
import CustomBlackArrow from "../assets/icons/CustomBlackArrow.vue";

export default {
  components: {
    HamburgerIcon,
    CloseIcon,
    NavbarLogo,
    CustomBlackArrow,
  },
  props: {
    buttons: Array,
    activeButton: Object,
    toggleButton: Function,
  },
  setup() {
    const isMobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    return {
      isMobileMenuOpen,
      toggleMobileMenu,
    };
  },
};
</script>

<style scoped>
.btn-clicked {
  @apply bg-button text-mainText w-32 h-11 rounded-full;
}
.btn {
  @apply bg-none w-32 h-11 text-mainText;
}
</style>
