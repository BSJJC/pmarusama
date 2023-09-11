<template>
  <div id="p-youtube-container" class="my-5">
    <!-- youtube title -->
    <Title></Title>

    <!-- youtube player -->
    <Youtube></Youtube>
  </div>
</template>
  
<script setup lang='ts'>
import { defineAsyncComponent } from "vue";

const Title = defineAsyncComponent(() => import("./components/title.vue"))
const Youtube = defineAsyncComponent(() => import("./components/player.vue"))
</script>
  
<style scoped>
#p-youtube-container {
  position: relative;
  background: url(../../assets/imgs/parts3.png) center right -5vw/20vw auto no-repeat;
}
</style>