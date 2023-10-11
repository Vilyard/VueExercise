<template>
  <footer class="bg-menuText h-full p-14 w-full">
    <div class="grid md:grid-cols-3 gap-8">
      <div>
        <div class="inline-flex">
          <div class="bg-logo-image bg-relative bg-no-repeat w-10 h-10"></div>
          <div class="bg-logo-label bg-relative bg-no-repeat w-40 h-32"></div>
        </div>
        <p class="text-sm text-footerText">
          Creative Labs, a web agency based in Sweden, is expanding its reach
          and opening a new office in Macedonia. The agency is well-known for
          providing cutting-edge solutions to businesses across a wide range of
          industries, and their expansion to Macedonia is a testament to their
          commitment to delivering exceptional results for their clients on a
          global scale.
        </p>
      </div>

      <div class="flex flex-col items-center justify-center">
        <h4 class="text-mainText pl-2 py-2 font-semibold">Creative Labs</h4>
        <ul class="text-footerText">
          <li v-for="button in creativeLabsButtons" :key="button">
            <a :href="buttonLink(button)">{{ button }}</a>
          </li>
        </ul>
      </div>
      <div class="text-footerText flex flex-col items-center justify-center">
        <h4 class="text-mainText pr-12 font-semibold">Contact us</h4>
        <address>
          <p class="pt-2">Pelagonka 2</p>
          <p>Bitola, Macedonia</p>
          <a href="mailto:hi@creativelabs.se">hi@creativelabs.se</a>
          <p class="pt-8">
            <a href="https://www.linkedin.com/company/creativelabs-se/"
              >LinkedIn</a
            >
          </p>
        </address>
      </div>
    </div>
    <div class="pt-6 flex gap-2 text-footerText">
      <p>&copy; COPYRIGHT 2023 Creative Labs. All rights reserved.</p>
      <div class="pl-10 flex gap-4">
        <p class="text-footerText">Privacy policy</p>
        <span>|</span>
        <p class="text-footerText">Cookie policy</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CustomFooter",
  data() {
    return {
      creativeLabsButtons: [
        "Work",
        "What we do",
        "Stories",
        "Contact us",
        "Careers",
        "About us",
      ],
    };
  },
  methods: {
    buttonLink(button) {
      const links = {
        Work: "#work-link",
        "What we do": "#what-we-do-link",
        Stories: "#stories-link",
        "Contact us": "#contact-us-link",
        Careers: "#careers-link",
        "About us": "#about-us-link",
      };
      return links[button] || "#";
    },
  },
};
</script>

<style scoped></style>
