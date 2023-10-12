<template>
  <div class="container-lg">
    <div
      class="container-wrap p-5 bg-second-image bg-relative bg-no-repeat bg-center bg-cover grid"
    >
      <div class="flex p-2 justify-left items-end md:w-1/2">
        <Card
          :cardDetails="contactUsCard"
          class="pt-40"
          arrowComponent="CustomYellowArrow"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Card from "~/components/Card.vue";

export default {
  components: {
    Card,
  },
  setup() {
    const contactUsCard = ref({
      title: "Contact us",
      subtitle: "Euismod elementum nisi quis eleifend quam proin sagittis.",
      labels: [
        "Senectus et netus et malesuada fames. Sed augue lacus viverra vitae congue eu consequat. Cum sociis natoque penatibus et magnis dis parturient montes. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Enim eu turpis egestas pretium aenean pharetra.",
      ],
      arrowText: "Contact us",
      arrowPosition: "left",
      textColor: "text-mainText",
    });
    return {
      contactUsCard,
    };
  },
};
</script>

<style scoped>
.container-wrap {
  min-height: 635px;
  width: "100%";
}
</style>
