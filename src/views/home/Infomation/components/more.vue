<template>
  <a ref="more" href="" class="bg-[#ff5872] rounded-full py-2 px-8">
    <button class="m-plus-rounded-1c font-bold text-white text-[1.3rem]">もっと見る</button>
  </a>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue'
import anime from 'animejs'
import enterAnimation from '@/utils/enterAnimation'

const more: Ref<HTMLElement | undefined> = ref()
const moreAnimationConfig: anime.AnimeParams = {
  delay: 600,
  opacity: [0, 1],
}

onMounted(() => {
  enterAnimation(more.value!, moreAnimationConfig)
})
</script>

<style></style>
