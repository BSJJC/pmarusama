<template>
  <img ref="titleRef" src="@/assets/imgs/title-info.png" alt="title information" class="w-[95%] mb-4 max-w-[550px]" />
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';
import anime from 'animejs';
import enterAnimation from '@/utils/enterAnimation';

const titleRef: Ref<HTMLElement | undefined> = ref();

const titleRefAnimationConfig: anime.AnimeParams = {
  delay: 100,
  opacity: [0, 1],
  translateY: [50, 0],
};

onMounted(() => {
  enterAnimation(titleRef.value!, titleRefAnimationConfig);
});
</script>

<style></style>
