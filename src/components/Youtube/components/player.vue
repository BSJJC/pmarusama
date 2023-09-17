<template>
  <div id="p-youtube__main"
    class="flex justify-center items-center relative z-[+1] mt-8 w-[96vw] py-[12vw] pr-[13vw] pl-[4vw] md:pt-[16vw] md:pr-[14vw] md:pb-[18vw] md:pl-[4vw] md:mt-0 lg:w-[80vw] lg:mr-auto lg:pt-[10vw] lg:pr-[18vw] lg:pb-[10vw] lg:pl-0 lg:justify-end">
    <div id="p-youtube__main-inner" class="relative w-full bg-[#c0ecee] lg:max-w-[640px]">
      <div class=" max-w-none pt-[56.25%]">
        <YoutubePlayer url="3V9952osjnc" class="absolute top-0 left-0 w-full h-full p-[5px] lg:p-[10px]">
        </YoutubePlayer>
      </div>
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

@media (min-width: 768px) {
  #p-youtube__main {
    background: url(../../../assets/imgs/youtube-bg.png) right center/auto 105% no-repeat;
  }
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