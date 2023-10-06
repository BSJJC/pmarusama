<template>
  <h2 ref="h2" id="p-discogtaphy-title" class="w-full flex justify-center items-center">
    <img src="@/assets/imgs/title-discography.png" alt="discography title" class="w-[90vw] md:max-w-[500px]" />
  </h2>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';
import anime from 'animejs';
import enterAnimation from '@/utils/enterAnimation';

const h2: Ref<HTMLElement | undefined> = ref();

const h2AnimationConfig: anime.AnimeParams = {
  delay: 100,
  opacity: [0, 1],
  translateY: [50, 0],
};

onMounted(() => {
  enterAnimation(h2.value!, h2AnimationConfig);
});
</script>

<style></style>
