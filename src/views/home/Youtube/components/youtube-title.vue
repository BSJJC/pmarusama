<template>
  <h2
    ref="h2Ref"
    id="p-youtube__title"
    class="absolute right-0 z-[2] w-[85vw] flex justify-start items-center py-[10px] pr-0 pl-[4vw] md:w-[45vw] lg:w-[35vw] lg:h-[8vw] lg:pl-[2vw] lg:translate-y-[8vw]"
  >
    <img
      ref="imgRef"
      src="@/assets/imgs/title-youtube.png"
      alt="title youtube"
      class="w-[80%] max-w-[280px] lg:w-[70%]"
    />
  </h2>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';
import anime from 'animejs';
import enterAnimation from '@/utils/enterAnimation';

const h2Ref: Ref<HTMLElement | undefined> = ref();
const imgRef: Ref<HTMLImageElement | undefined> = ref();

const h2RefAnimationConfig: anime.AnimeParams = {
  dealy: 200,
  translateX: ['100%', 0],
  duration: 1000,
  easing: 'easeOutExpo',
};

const imgRefAnimationConfig: anime.AnimeParams = {
  delay: 400,
  opacity: [0, 1],
  translateY: [20, 0],
};

onMounted(() => {
  enterAnimation(h2Ref.value!, h2RefAnimationConfig);
  enterAnimation(imgRef.value!, imgRefAnimationConfig);
});
</script>

<style scoped>
#p-youtube__title {
  background: url('@/assets/imgs/youtube-bg2.png') left center/100% 100% no-repeat;
}
</style>
