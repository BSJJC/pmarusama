<template>
  <div id="p-profile__main"
    class="w-[95%] ml-[5%] pl-[11%] pb-[70px] pr-4 pt-4 translate-y-[-7%] md:translate-y-[-8%] md:pt-10 md:pb-[90px]">
    <div id="p-profile__inner" class="bg-[#ffda55] relative mt-4 ml-2 md:flex md:justify-center md:items-center">
      <!-- profile intro -->
      <div class="m-plus-rounded-1c pb-3 text-[#787878] pt-6 px-4 leading-3 md:w-1/2 md:px-10">
        <h3 class="text-2xl font-bold">P丸様。</h3>
        <span class=" text-sm font-bold md:text-lg">YouTubeやTikTok等の動画投稿サイトで活動中のマルチエンターテイナー！</span>
        <br />
        <span class=" text-sm font-bold md:text-lg">癖になる短編アニメ動画が大人気で、現在YouTubeチャンネルの登録者数は255万人、動画総再生数は20億回を突破。</span>
      </div>

      <!-- profile image -->
      <div class="flex justify-end items-center md:w-1/2">
        <img src="../../../assets/imgs/profile-img.png" alt="profile image" class="w-[60%] md:w-full">
      </div>
    </div>
  </div>
</template>
  
<script setup lang='ts'>

</script>
  
<style scoped>
#p-profile__main {
  background: url(../../../assets/imgs/profile-bg-sp.png) left center/100% 100% no-repeat;
}

@media (min-width: 768px) {
  #p-profile__main {
    background: url(../../../assets/imgs/profile-bg.png) left center/auto 105% no-repeat;
  }
}

#p-profile__inner::before {
  position: absolute;
  content: "";
  top: 5px;
  left: 5px;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: linear-gradient(135deg, #ffd0de 25%, #fff 25%, #fff 50%, #ffd0de 50%, #ffd0de 75%, #fff 75%, #fff 100%);
  background-size: 24px 24px;
  background-attachment: fixed;
}
</style>