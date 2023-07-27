<template>
  <div id="p-profile-container" class="relative my-14">

    <!--profile title -->
    <h2 class="w-[75vw] mb-10 flex justify-end items-center absolute -top-[5%]">
      <img src="../../assets/imgs/title-profile.png" alt="profile title" class="w-[250px] px-4 py-3">
    </h2>

    <div id="profile-main" class="w-[95%] h-full ml-[5%] p-14 pr-6 pt-12">
      <div class="bg-[#ffda55]">

        <!-- profile intro -->
        <div class="mb-3 font-bold text-[#787878] p-4">
          <h3>P丸様。</h3>
          <span class="text-sm">YouTubeやTikTok等の動画投稿サイトで活動中のマルチエンターテイナー！</span>
          <br />
          <span class="text-sm">癖になる短編アニメ動画が大人気で、現在YouTubeチャンネルの登録者数は255万人、動画総再生数は20億回を突破。</span>
        </div>

        <!-- profile image -->
        <div class="flex justify-end items-center">
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


#profile-main {
  background-image: url(../../assets/imgs/profile-bg-sp.png);
  background-size: cover;
}
</style>