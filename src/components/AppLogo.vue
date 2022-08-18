<template>
  <div class="w-40 mb-4 relative">
    <div ref="pinia" id="#pinia" class="pineapple z-10">&nbsp;🍍</div>
    <IconVueLogo />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import IconVueLogo from "./icons/IconVueLogo.vue";

export default {
  name: "pinia",
  setup() {
    const pinia = ref();
    const animation = gsap.timeline({ delay: 3 });
    const piniaDance = () => {
      animation.to(pinia.value, { opacity: 1, scale: 0.5, rotation: "+=360" });
      animation.to(pinia.value, { scale: 2, rotation: "+=720" });
      animation.to(pinia.value, { opacity: 1, scale: 1, rotation: "+=720" });
      animation.to(pinia.value, { y: -5, scale: 1.1 });
      animation.to(pinia.value, { y: 3, scale: 0.9 });
      animation.to(pinia.value, { y: -5, scale: 1.1 });
      animation.to(pinia.value, { y: 3, scale: 0.9 });
      animation.to(pinia.value, { y: -5, scale: 1.1 });
      animation.to(pinia.value, { y: 3, scale: 0.9 });
      animation.to(pinia.value, { y: -5, scale: 1.1 });
      animation.to(pinia.value, { y: 0, scale: 1.2 });
    };
    onMounted(() => {
      piniaDance();
    });
    return {
      pinia,
      piniaDance,
    };
  },
  components: { IconVueLogo },
};
</script>
