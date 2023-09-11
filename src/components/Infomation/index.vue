<template>
  <div id="p-information-container" class="w-full  py-8 mb-5 flex justify-center items-center relative">
    <div class="w-full py-[20px] flex justify-center items-center flex-col">
      <!-- information title -->
      <Title></Title>

      <!-- published news -->
      <News></News>

      <!-- more info -->
      <More></More>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { defineAsyncComponent } from 'vue';

const Title = defineAsyncComponent(() => import("./components/title.vue"))
const News = defineAsyncComponent(() => import("./components/news.vue"))
const More = defineAsyncComponent(() => import("./components/more.vue"))
</script>
  
<style scoped>
#p-information-container {
  background: rgba(255, 255, 255, .7) url(../../assets//imgs/parts1.png) bottom 6vw right 4vw/24vw auto no-repeat;
}

#p-information-container::before {
  position: absolute;
  content: "";
  margin: auto;
  box-sizing: border-box;
  vertical-align: middle;
  top: -6px;
  width: 100%;
  height: 6px;
  background: url(../../assets/imgs/section-bg-top.png) center bottom/auto 100%;
}

#p-information-container::after {
  position: absolute;
  content: "";
  margin: auto;
  box-sizing: border-box;
  vertical-align: middle;
  bottom: -6px;
  width: 100%;
  height: 6px;
  background: url(../../assets/imgs/section-bg-bottom.png) center bottom/auto 100%;
}
</style>