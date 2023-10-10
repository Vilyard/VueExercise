<template>
  <div :class="cardClasses">
    <div class="grid grid-cols-1 gap-2 p-4">
      <h4 class="font-bold text-sm">{{ title }}</h4>
      <h2 class="text-4xl font-bold">{{ subtitle }}</h2>
      <div>
        <p
          class="pt-4"
          v-for="(labelText, index) in labels"
          :key="index"
          :class="textColor"
        >
          {{ labelText }}
        </p>
      </div>
    </div>
    <br />
    <div :class="arrowContainerClasses">
      <p :class="textColorClass" class="p-1 font-bold">{{ arrowText }}</p>
      <CustomArrow />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    labels: Array,
    arrowText: String,
    bgColor: String,
    arrowPosition: String,
    textColor: String,
  },
  computed: {
    cardClasses() {
      return ["text-left", "p-4", "shadow-lg", this.bgColor];
    },
    arrowContainerClasses() {
      return [
        "grid grid-rows-2",
        this.arrowPosition === "left" ? "justify-start" : "justify-end",
      ];
    },
    textColorClass() {
      return this.textColor || "text-mainText";
    },
  },
};
</script>
