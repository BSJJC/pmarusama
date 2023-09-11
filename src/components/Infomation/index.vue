<template>
  <div id="p-information-container" class="w-full  py-8 mb-5 flex justify-center items-center relative">
    <div class="w-full py-[20px] flex justify-center items-center flex-col">
      <!-- information title -->
      <img src="../../assets/imgs/title-info.png" alt="title information" class="w-[95%] mb-4">

      <!-- published news -->
      <li v-for="(i, index) in data" :key="index"
        class="flex justify-center items-center mx-3 mb-4 border-l-[1px] border-[#f60]">

        <!-- news publish date -->
        <div class="flex justify-center items-center w-[30%] text-[#f60] font-bold">
          <div class="flex justify-center items-center flex-col text-[0.5rem] pr-2">
            <span class="w-full text-right leading-3">
              <!-- year -->
              {{ i.data.split("/")[0] }}
              <br />
              <!-- month -->
              {{ i.data.split("/")[1] }}
            </span>
          </div>

          <div>
            <span class="text-[2rem]">
              <!-- day -->
              {{ i.data.split("/")[2] }}
            </span>
          </div>
        </div>

        <!-- news title -->
        <div class="w-[70%]  border-l-[1px] border-r-[1px] border-[#f60] px-3">
          <a href="" class="text-[#3865e0] font-bold">{{ i.title }}</a>
        </div>
      </li>

      <!-- more info -->
      <a href="" class="bg-[#ff5872] rounded-full py-2 px-8">
        <button class="font-bold text-white text-[1.3rem]">もっと見る</button>
      </a>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
const data = [
  {
    data: "2022/12/16",
    title: "TVアニメ「お兄ちゃんはおしまい！」OPテーマにえなこ feat.P丸様。として参加決定！"
  },
  {
    data: "2022/11/01",
    title: "[セガプライズ]11月発売「P丸様。 寝そべり モアプラスぬいぐるみ“P丸様。＆うさぎさん＆くまくん“」"
  },
  {
    data: "2022/10/08",
    title: "2ndフルアルバム『ラブホリック』より新曲「恋愛偏差値上昇中！」MV公開!"
  },
]
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