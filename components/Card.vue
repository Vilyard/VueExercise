<template>
  <div :class="cardClasses">
    <div class="grid grid-cols-1 gap-4 p-4">
      <h4 :class="textColorClass + '  font-bold text-sm'">
        {{ cardDetails.title }}
      </h4>
      <h2 :class="textColorClass + ' text-4xl font-bold'">
        {{ cardDetails.subtitle }}
      </h2>
      <div>
        <p
          class="pt-5"
          v-for="(labelText, index) in cardDetails.labels"
          :key="index"
          :class="textColorClass"
        >
          {{ labelText }}
        </p>
      </div>
    </div>
    <div class="pt-5" :class="arrowContainerClasses">
      <p :class="textColorClass + ' p-1 font-bold'">
        {{ cardDetails.arrowText }}
      </p>
      <component :is="arrowComponent" :color="cardDetails.textColor" />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import CustomArrow from "../assets/icons/CustomArrow.vue";
import CustomYellowArrow from "../assets/icons/CustomYellowArrow.vue";

export default {
  components: {
    CustomArrow,
    CustomYellowArrow,
  },
  props: {
    cardDetails: {
      type: Object,
      default: () => ({
        title: "",
        subtitle: "",
        labels: [],
        arrowText: "",
        arrowPosition: "right",
        textColor: "",
        bgColor: "bg-button",
      }),
    },
    arrowComponent: {
      type: String,
      default: "CustomArrow",
    },
  },
  setup(props) {
    const state = reactive({
      cardClasses: [
        "text-left",
        "p-4",
        "shadow-lg",
        "h-full",

        props.cardDetails.bgColor,
      ].join(" "),
      arrowContainerClasses: [
        "grid grid-rows-2",
        props.cardDetails.arrowPosition === "left"
          ? "justify-start"
          : "justify-end",
      ],
      textColorClass: props.cardDetails.textColor || "text-mainText",
    });

    return state;
  },
};
</script>
