<template>
  <div class="w-full  py-8 my-5 flex justify-center items-center bg-[#ffffffb3]">
    <div class="w-full py-[20px] flex justify-center items-center flex-col">
      <!-- information title -->
      <img src="../../assets/imgs/title-info.png" alt="title information" class="w-[95%] mb-4">

      <!-- published news -->
      <li v-for="(i, index) in data" :key="index"
        class="flex justify-center items-center mx-3 mb-4 border-l-[1px] border-[#f60]">

        <!-- news publish date -->
        <div class="flex justify-center items-center w-[30%] text-[#f60]">
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
          <a href="">{{ i.title }}</a>
        </div>
      </li>
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
span {
  font-family: Fredoka;
}

#p-info-container ::before {
  position: absolute;
  content: "";
  top: -12px;
  right: 0;
  left: 0;
  width: 200px;
  height: 200px;
  background-image: url(../../assets/imgs/section-bg-top.png);
}
</style>