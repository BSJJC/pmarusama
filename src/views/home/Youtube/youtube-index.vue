<template>
  <div id="p-youtube" class="my-8 relative">
    <Title></Title>

    <Youtube></Youtube>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Title = defineAsyncComponent(() => import('./components/youtube-title.vue'));
const Youtube = defineAsyncComponent(() => import('./components/youtube-player.vue'));
</script>

<style scoped>
#p-youtube {
  background: url('@/assets/imgs/parts3.png') center right -5vw/20vw auto no-repeat;
}

@media (width>= 1024px) {
  #p-youtube-container {
    background: url('@/assets/imgs/parts3.png') center right 4vw no-repeat;
  }
}
</style>
