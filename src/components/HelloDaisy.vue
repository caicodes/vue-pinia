<template>
    <div ref="hello" class="text-4xl font-extrabold text-primary-content bg-primary px-8 py-4 rounded-full shadow-2xl">
        Hello 🌼 Daisy
        and
        GSAP 🎉</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

export default {
    name: "hello",
    setup() {
        const hello = ref();
        const animation = gsap.timeline({});
        const sayHello = () => {
            animation.to(hello.value, { rotation: "+=360" });
            animation.to(hello.value, { rotation: "+=360" });
            animation.to(hello.value, { rotation: "+=720" });
        }

        onMounted(() => {
            sayHello()
        });

        return {
            hello, sayHello
        };
    },
};
</script>


<!-- 
var tl = gsap.timeline({repeat: 2, repeatDelay: 1});
tl.to("#id", {x: 100, duration: 1});
tl.to("#id", {y: 50, duration: 1});
tl.to("#id", {opacity: 0, duration: 1});
 -->

 <!-- 
  
<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

export default {
  name: "Home",
  setup() {
    const box = ref();
    onMounted(() => {
      gsap.to(box.value, { rotation: "+=360" });
    });

    return {
      box,
    };
  },
};
</script>


  -->

  <!-- 

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

export default {
  name: "Home",
  setup() {
    const box = ref();
    const animation = gsap.timeline({paused: true});

    onMounted(() => {

    animation      
      .from(box.value, { y: -200, duration: 1 })
      .to(box.value, { rotation: "+=360", duration: 1 });
    });

    const play = () => animation.play();
    const pause = () => animation.pause();
    const restart = () => animation.restart();
    const reverse = () => animation.reverse();

    return {
      box,
      play,
      pause,
      restart,
      reverse,
    };
  },
};
</script>

   -->