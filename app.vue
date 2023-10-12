<template>
  <div class="flex flex-col h-full w-full gap-10">
    <div class="flex-1 flex flex-col justify-center">
      <MainSection />
    </div>
    <div class="md:flex md:flex-row gap-10">
      <div class="flex-1 pb-10">
        <Card :cardDetails="aboutUsCard" />
      </div>
      <div class="flex-1 pb-10">
        <Card :cardDetails="ourOfferCard" />
      </div>
    </div>
    <div class="flex-1">
      <SecondSection />
    </div>
    <div class="md:flex md:flex-row gap-10">
      <div class="flex-1 pb-10">
        <ThirdSection />
      </div>
      <div class="flex-1 pb-10">
        <Card :cardDetails="joinOurTeamCard" class="pt-28 px-10" />
      </div>
    </div>
    <div class="md:flex md:justify-center pb-10">
      <CustomForm />
    </div>
    <CustomFooter />
  </div>
</template>

<script>
import { ref } from "vue";
import MainSection from "~/components/sections/MainSection.vue";
import SecondSection from "~/components/sections/SecondSection.vue";
import ThirdSection from "~/components/sections/ThirdSection.vue";
import Card from "~/components/Card.vue";

export default {
  components: {
    MainSection,
    SecondSection,
    ThirdSection,
    Card,
  },
  setup() {
    const aboutUsCard = ref({
      title: "About us",
      subtitle: "Pharetra massa massa ultri.",
      labels: [
        "Ornare quam viverra orci sagittis eu volutpat odio facilisis. Purus non enim praesent elementum facilisis leo vel fringilla est. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue.",
      ],
      arrowText: "Read our story",
      arrowPosition: "right",
      textColor: "text-menuText",
      bgColor: "bg-firstCard",
    });

    const ourOfferCard = ref({
      title: "Our offer",
      subtitle: "Convallis a cras semper au.",
      labels: [
        "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Purus non enim praesent elementum facilisis leo vel fringilla est. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis.",
      ],
      arrowText: "What we offer",
      arrowPosition: "right",
      textColor: "text-menuText",
      bgColor: "bg-secondCard",
    });

    const joinOurTeamCard = ref({
      title: "Join our team",
      subtitle: "Tincidunt tortor aliquam.",
      labels: [
        "Quam nulla porttior massa id neque aliquam. Quam elementum pulvinar etiam non quam l acus suspendisse faucibus interdum. Nunc lobortis mattis aliquam faucibus purus in. Facilisis volutpat est velit egestas dui id. Mollis aliquam ut porttior leo a diam solicitudin tempor",
        "Netus et malesuda fames ac. Metus vulputate eu scelerisque felis imperdiet prion fermentum leo vel. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Dictum sit amet justo donec enim diam vulputate. Condimentum id venenatis a condimentum vitae",
        "Urna neque viverra justo nec ultrices dui sapien. Faucibus nisi tincidunt eget nullam. Maecenas ultricies mi eget mauris pharetra.",
      ],
      arrowText: "We’re hiring",
      arrowPosition: "right",
      textColor: "text-menuText",
      bgColor: "bg-fieldColor",
    });

    return {
      aboutUsCard,
      ourOfferCard,
      joinOurTeamCard,
    };
  },
};
</script>
