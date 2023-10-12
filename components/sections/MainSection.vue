<template>
  <!-- grid/flex -->
  <div class="container-lg">
    <div
      class="container-wrap p-5 bg-first-image bg-relative bg-no-repeat bg-center bg-cover grid"
    >
      <Navbar
        :buttons="buttons"
        :activeButton="activeButton"
        :toggleButton="toggleButton"
      />
      <div
        class="text-mainText grid-item flex flex-col justify-end md:w-2/3 md:pb-12 pl-4"
      >
        <div class="font-bold md:text-5xl pb-4">
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor
            incididunt.
          </p>
        </div>
        <div class="md:text-base text-sm">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  setup() {
    const buttons = ref([
      { isClicked: false, label: "Work" },
      { isClicked: false, label: "What we do" },
      { isClicked: false, label: "Stories" },
      { isClicked: false, label: "Contact" },
      { isClicked: false, label: "Careers" },
      { isClicked: false, label: "About Us" },
    ]);

    const activeButton = ref(null);

    const toggleButton = (selectedButton) => {
      buttons.value.forEach((button) => {
        button.isClicked = button === selectedButton;
      });
      activeButton.value = selectedButton.isClicked ? selectedButton : null;
    };

    return {
      buttons,
      activeButton,
      toggleButton,
    };
  },
};
</script>

<style scoped>
.container-wrap {
  min-height: 920px;
  width: "100%";
}
.btn-clicked {
  @apply bg-button text-mainText w-32 h-11 rounded-full m-2;
}
.btn {
  @apply bg-none w-32 h-11 text-mainText m-2;
}
</style>
