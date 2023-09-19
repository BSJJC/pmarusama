<template>
  <div id="p-top-container" class="flex justify-center items-center relative bg-fixed py-4 px-2">
    <div class="my-3 relative">
      <img ref="logo" src="@/assets/imgs/logo.png" alt="pmarusama logo"
        class=" absolute z-[+1] top-[10%] left-[7%] w-[48%] md:top-[30%] md:w-[35%]">

      <img ref="banner" src="@/assets/imgs/index-visual.png" alt="index visual image" class="lg:w-[82vw]">
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { ref, Ref, onMounted } from "vue"
import anime from 'animejs';
import enterAnimation from "@/utils/enterAnimation";

const logo: Ref<HTMLElement | undefined> = ref()
const banner: Ref<HTMLElement | undefined> = ref()

const logoAnimationConfig: anime.AnimeParams = {
  delay: 300,
  translateY: [200, 0],
  opacity: [0, 1],
  scale: [0.7, 1]
}

const bannerAnimationConfig: anime.AnimeParams = {
  duration: 1000,
  opacity: [0, 1],
  translateY: [100, 0]
}

onMounted(() => {
  enterAnimation(logo.value!, logoAnimationConfig)
  enterAnimation(banner.value!, bannerAnimationConfig)
})
</script>
  
<style>
#p-top-container {
  width: 100vw;
  background-size: 50px 50px;
  background-image: linear-gradient(135deg, #bdffe9 25%, #f1ffe8 25%, #f1ffe8 50%, #bdffe9 50%, #bdffe9 75%, #f1ffe8 75%, #f1ffe8 100%);
}
</style>