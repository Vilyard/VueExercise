<template>
  <div class="p-4 w-full">
    <input
      class="bg-fieldColor w-full h-full p-4 font-bold placeholder-menuText"
      :type="inputType"
      :name="inputName"
      :placeholder="label"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    inputType: String,
    inputName: String,
    value: String,
  },
};
</script>
