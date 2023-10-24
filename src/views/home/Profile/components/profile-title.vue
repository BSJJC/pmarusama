<template>
  <h2
    ref="h2Ref"
    class="w-[75vw] flex justify-end items-center relative z-[+1] md:w-[45%] lg:w-[35%] lg:translate-y-[8vw]"
  >
    <img
      ref="imgRef"
      src="@/assets/imgs/title-profile.png"
      alt="profile title"
      class="w-[250px] pr-8 py-3 pl-8 lg:w-[400px] lg:py-6 lg:pl-20"
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
  translateX: ['-100%', 0],
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
h2 {
  background-image: url('@/assets/imgs/profile-bg2.png');
  background-size: 100% 100%;
}
</style>
