<template>
  <img ref="title" src="@/assets/imgs/title-info.png" alt="title information" class="w-[95%] mb-4 max-w-[550px]">
</template>
  
<script setup lang='ts'>
import { ref, Ref, watch } from "vue"
import { useElementVisibility } from "@vueuse/core"
import anime from 'animejs/lib/anime.es.js';

const title: Ref<HTMLElement | undefined> = ref()
const titleVisible = useElementVisibility(title);

watch(
  () => titleVisible.value,
  () => {
    console.log(titleVisible.value);
    if (titleVisible) {
      anime({
        targets: title.value,
        delay: 300,
        opacity: [0, 1],
        translateY: [50, 0]
      })
    }
  },
  {
    immediate: true
  }
)
</script>
  
<style></style>