<template>
  <li ref="news" v-for="(i, index) in data" :key="index"
    class="flex justify-center items-center w-[97%] mx-3 mb-4 border-l-[1px] border-[#f60] md:w-[90%]">

    <!-- news publish date -->
    <div class="fredoka-one flex justify-center items-center w-[30%] text-[#f60] font-bold md:w-[15%]">
      <div class="flex justify-center items-center flex-col text-[0.5rem] pr-2 md:text-[0.8rem]">
        <span class="w-full text-right leading-3">
          <!-- year -->
          {{ i.data.split("/")[0] }}
          <br />
          <!-- month -->
          {{ i.data.split("/")[1] }}
        </span>
      </div>

      <div>
        <span class="text-[2.5rem]">
          <!-- day -->
          {{ i.data.split("/")[2] }}
        </span>
      </div>
    </div>

    <!-- news title -->
    <div class="m-plus-rounded-1c w-[70%]  border-l-[1px] border-r-[1px] border-[#f60] px-3 md:w-[85%]">
      <a href="" class="text-[#3865e0] font-bold">{{ i.title }}</a>
    </div>
  </li>
</template>
  
<script setup lang='ts'>
import { ref, Ref, onMounted } from "vue"
import anime from "animejs";
import enterAnimation from "@/utils/enterAnimation";

const news: Ref<HTMLElement[] | undefined> = ref()

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

onMounted(() => {
  news.value!.forEach((li, index) => {
    const newsAnimationConfig: anime.AnimeParams = {
      delay: 100 * index + 200,
      opacity: [0, 1],
      translateY: [50, 0]
    }

    enterAnimation(li, newsAnimationConfig)
  });
})
</script>
  
<style></style>