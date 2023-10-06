<template>
  <div id="p-information-container" class="w-full py-8 mb-5 flex justify-center items-center relative">
    <div class="lace-top lace-bottom w-full py-[20px] flex justify-center items-center flex-col max-w-[800px]">
      <Title></Title>

      <News></News>

      <More></More>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Title = defineAsyncComponent(() => import('./components/infomation-title.vue'));
const News = defineAsyncComponent(() => import('./components/infomation-news.vue'));
const More = defineAsyncComponent(() => import('./components/infomation-more.vue'));
</script>

<style scoped>
#p-information-container {
  background: #ffffffb3 url('@/assets//imgs/parts1.png') bottom 6vw right 4vw/24vw auto no-repeat;
}
</style>
