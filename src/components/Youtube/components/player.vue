<template>
  <div id="p-youtube__main" class="relative mr-[5%] mt-6 p-[20px] pt-[40px] pr-[30px]">
    <div id="p-youtube__main-inner" class="relative box-border bg-[#c0ecee] p-[5px]">
      <YoutubePlayer url="3V9952osjnc" class="w-full h-full "></YoutubePlayer>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import YoutubePlayer from "../../Common/YoutubePlayer.vue"
</script>
  
<style scoped>
#p-youtube__main {
  background: url(../../../assets/imgs/youtube-bg-sp.png) right center/100% 100% no-repeat;
}

#p-youtube__main-inner::before {
  position: absolute;
  content: "";
  top: 5px;
  left: 5px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, #a7ef91 25%, #fff 25%, #fff 50%, #a7ef91 50%, #a7ef91 75%, #fff 75%, #fff 100%);
  background-size: 24px 24px;
  background-attachment: fixed;
  z-index: -1;
}
</style>