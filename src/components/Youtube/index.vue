<template>
  <div id="p-youtube-container">

    <div id="p-youtube-title"></div>

    <div id="p-youtube__main">

      <div id="p-youtube__main-player" class="">

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
  background: url(../../assets/imgs/parts3.png) center right -5vw/20vw auto no-repeat;
}

#p-youtube__main {
  margin-right: 5%;
  background: url(../../assets/imgs/youtube-bg-sp.png) right center/100% 100% no-repeat;
}

#p-youtube__main-player {
  padding: 6vh 13vw 6vh 6vw;
}
</style>