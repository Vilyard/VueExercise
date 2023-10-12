<template>
  <div class="md:col-span-2 row-span-2">
    <h2 class="text-4xl font-bold p-5">Contact Us</h2>
    <p class="p-5">
      Do you want to be a part of this network and amazing journey? Contact us,
      and we will get back to you.
    </p>
    <form class="grid md:grid-cols-2 grid-rows-4 gap-4" ref="form">
      <div class="flex col-span-2 w-full">
        <CustomInputFields
          label="Name"
          inputType="text"
          inputName="Name"
          class="flex-1"
          v-model="name"
        />
        <CustomInputFields
          label="Company"
          inputType="text"
          inputName="Company"
          class="flex-1"
          v-model="company"
        />
      </div>
      <CustomInputFields
        label="E-mail"
        inputType="email"
        inputName="email"
        class="col-span-2"
        v-model="email"
      />
      <CustomTextAreaField
        label="Message"
        inputName="message"
        class="col-span-2 row-span-2"
        v-model="message"
      />
      <div class="col-span-2 pr-4 flex justify-end items-center">
        <button
          class="w-40 h-14 bg-submitBtn text-mainText"
          @click="submitForm"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const form = ref(null);
    const name = ref("");
    const company = ref("");
    const email = ref("");
    const message = ref("");

    const submitForm = () => {
      form.value.submit();
    };

    return {
      form,
      submitForm,
      name,
      company,
      email,
      message,
    };
  },
};
</script>
