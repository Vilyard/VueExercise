<template>
  <div class="p-4 w-full">
    <textarea
      class="bg-fieldColor w-full h-36 p-4 font-bold placeholder-menuText"
      :name="inputName"
      :placeholder="label"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    inputName: String,
    value: String,
  },
};
</script>
