<template>
  <div>
    <div class="p-4">
      <input
        class="bg-fieldColor w-full h-14 p-4 font-bold placeholder-menuText"
        :type="inputType"
        :name="inputName"
        :placeholder="label"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    inputType: String,
    inputName: String,
  },
};
</script>
