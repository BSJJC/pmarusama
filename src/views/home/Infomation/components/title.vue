<template>
  <img ref="title" src="@/assets/imgs/title-info.png" alt="title information" class="w-[95%] mb-4 max-w-[550px]">
</template>
  
<script setup lang='ts'>
import { ref, Ref } from "vue"
import { useElementVisibility, watchOnce } from "@vueuse/core"
import anime from 'animejs';

const title: Ref<HTMLElement | undefined> = ref()
const titleVisible: Ref<boolean> = useElementVisibility(title);

watchOnce(
  () => titleVisible.value,
  () => {
    if (titleVisible) {
      anime({
        targets: title.value,
        delay: 100,
        opacity: [0, 1],
        translateY: [50, 0],
      })
    }
  }
)
</script>
  
<style></style>