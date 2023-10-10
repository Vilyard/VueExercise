<template>
  <form class="grid grid-cols-2 grid-rows-4 gap-4">
    <div class="col-span-2">
      <h2 class="text-4xl font-bold">Contact Us</h2>
      <p class="pt-5 pb-5">
        Do you want to be a part of this network and amazing journey? Contact
        us, and we will get back to you.
      </p>
    </div>
    <div class="flex col-span-2 w-full">
      <CustomInputFields
        label="Name"
        inputType="text"
        inputName="Name"
        class="flex-1"
      />
      <CustomInputFields
        label="Company"
        inputType="text"
        inputName="Company"
        class="flex-1"
      />
    </div>
    <CustomInputFields
      label="E-mail"
      inputType="email"
      inputName="email"
      class="col-span-2"
    />
    <CustomInputFields
      label="Message"
      inputType="text"
      inputName="message"
      class="col-span-2"
    />
    <div class="col-start-2 row-start-5 pr-4 justify-self-end">
      <button class="w-40 h-14 bg-submitBtn text-mainText">Send</button>
    </div>
  </form>
</template>

<script scoped></script>
