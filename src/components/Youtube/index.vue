<template>
  <div id="p-youtube-container">
    <!-- youtube title -->
    <div id="p-youtube__title" class="absolute z-[2] -top-[13%] ml-[16%] pl-[4vw] py-[10px] pb-[10px]">
      <img src="../../assets/imgs/title-youtube.png" alt="title youtube" class="w-[70%]">
    </div>

    <!-- youtube player -->
    <div id="p-youtube__main" class="relative mr-[5%] z-[+1]">
      <div id="p-youtube__main-inner" class="relative box-border bg-[#c0ecee] p-[5px]">
        <YoutubePlayer url="3V9952osjnc" class="w-full h-full "></YoutubePlayer>
      </div>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import YoutubePlayer from "../Common/YoutubePlayer.vue"
</script>
  
<style scoped>
#p-youtube-container {
  position: relative;
  background: url(../../assets/imgs/parts3.png) center right -5vw/20vw auto no-repeat;
}

#p-youtube__title {
  background-image: url(../../assets/imgs/youtube-bg2.png);
  background-size: 100% 100%;
}

#p-youtube__main {
  background: url(../../assets/imgs/youtube-bg-sp.png) right center/100% 100% no-repeat;
  padding: 6vh 11vw 5vh 6vw;
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