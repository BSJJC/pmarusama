<template>
  <div id="p-profile-container" class="relative my-14">

    <!--profile title -->
    <h2 class="w-[75vw] mb-10 flex justify-end items-center absolute -top-[5%]">
      <img src="../../assets/imgs/title-profile.png" alt="profile title" class="w-[250px] px-4 py-3">
    </h2>

    <div id="p-profile-main" class="w-[95%] h-full ml-[5%] pb-16 pl-10 pr-4 pt-12">
      <div id="p-profile-inner" class=" relative z-[2]">
        <!-- profile intro -->
        <div class="pb-3 text-[#787878] pt-6 px-3 leading-3 bg-[#ffda55]">
          <h3 class="text-[1.5rem] font-bold">P丸様。</h3>
          <br />
          <span class="text-sm">YouTubeやTikTok等の動画投稿サイトで活動中のマルチエンターテイナー！</span>
          <br />
          <span class="text-sm">癖になる短編アニメ動画が大人気で、現在YouTubeチャンネルの登録者数は255万人、動画総再生数は20億回を突破。</span>
        </div>

        <!-- profile image -->
        <div class="flex justify-end items-center bg-[#ffda55]">
          <img src="../../assets/imgs/profile-img.png" alt="profile image" class="w-[80%]">
        </div>
      </div>
    </div>

  </div>
</template>
  
<script setup lang='ts'>
</script>
  
<style scoped>
#p-profile-container {
  background-image: url(../../assets/imgs/parts2.png);
  background-repeat: no-repeat;
  background-size: 150px;
}

h2 {
  background-image: url(../../assets/imgs/profile-bg2.png);
  background-size: 100% 100%;
}

h3 {
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

#p-profile-main {
  background-image: url(../../assets/imgs/profile-bg-sp.png);
  background-size: 100% 100%;
}

#p-profile-inner:after {
  position: absolute;
  content: "";
  right: -5px;
  bottom: -5px;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: linear-gradient(135deg, #ffd0de 25%, #fff 25%, #fff 50%, #ffd0de 50%, #ffd0de 75%, #fff 75%, #fff 100%);
  background-size: 24px 24px;
  background-attachment: fixed;
}
</style>