<template>
  <footer class="bg-menuText p-6 md:p-14 w-full text-footerText">
    <div
      class="flex flex-col md:flex-row md:justify-between md:items-center gap-10"
    >
      <div
        class="flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div>
          <NavbarLogo />
        </div>
        <p class="text-sm w-2/3">
          Creative Labs, a web agency based in Sweden, is expanding its reach
          and opening a new office in Macedonia. The agency is well-known for
          providing cutting-edge solutions to businesses across a wide range of
          industries, and their expansion to Macedonia is a testament to their
          commitment to delivering exceptional results for their clients on a
          global scale.
        </p>
      </div>

      <div class="text-center md:text-left md:w-1/2">
        <h4 class="text-mainText font-semibold">Creative Labs</h4>
        <ul>
          <li v-for="button in creativeLabsButtons" :key="button">
            <a :href="buttonLink(button)">{{ button }}</a>
          </li>
        </ul>
      </div>

      <div class="text-center md:text-left md:pb-4 md:w-1/2">
        <h4 class="text-mainText font-semibold">Contact us</h4>
        <address>
          <p class="pt-2">Pelagonka 2</p>
          <p>Bitola, Macedonia</p>
          <a href="mailto:hi@creativelabs.se">hi@creativelabs.se</a>
          <p class="pt-6">
            <a href="https://www.linkedin.com/company/creativelabs-se/"
              >LinkedIn</a
            >
          </p>
        </address>
      </div>
    </div>
    <div class="pt-6 md:pt-10 text-center md:text-left">
      <p class="text-sm">
        &copy; COPYRIGHT 2023 Creative Labs. All rights reserved.
      </p>
      <div class="flex items-center justify-center md:justify-start pt-4">
        <p class="text-sm md:text-base">Privacy policy</p>
        <span class="px-2">|</span>
        <p class="text-sm md:text-base">Cookie policy</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";
import NavbarLogo from "../assets/icons/NavbarLogo.vue";

export default {
  name: "CustomFooter",
  components: {
    NavbarLogo,
  },
  setup() {
    const creativeLabsButtons = ref([
      "Work",
      "What we do",
      "Stories",
      "Contact us",
      "Careers",
      "About us",
    ]);

    const buttonLink = (button) => {
      const links = {
        Work: "#work-link",
        "What we do": "#what-we-do-link",
        Stories: "#stories-link",
        "Contact us": "#contact-us-link",
        Careers: "#careers-link",
        "About us": "#about-us-link",
      };
      return links[button] || "#";
    };

    return {
      creativeLabsButtons,
      buttonLink,
    };
  },
};
</script>

<style scoped></style>
