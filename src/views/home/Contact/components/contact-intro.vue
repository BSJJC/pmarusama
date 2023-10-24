<template>
  <span ref="introRef" class="m-plus-rounded-1c text-center text-[#787878] font-bold md:text-[1.15rem]">
    内容によっては、ご連絡にお時間がかかる場合や、お答えできない場合がございます。
    <br />
    あらかじめご了承ください。
  </span>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';
import anime from 'animejs';
import enterAnimation from '@/utils/enterAnimation';

const introRef: Ref<HTMLElement | undefined> = ref();

const introRefAnimationConfig: anime.AnimeParams = {
  delay: 300,
  opacity: [0, 1],
  translateY: [50, 0],
};

onMounted(() => {
  enterAnimation(introRef.value!, introRefAnimationConfig);
});
</script>

<style></style>
