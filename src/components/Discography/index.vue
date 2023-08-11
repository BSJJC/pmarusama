<template>
  <div id="p-discography-container">
    
    <!-- discography title -->
    <h2 id="p-discogtaphy-title" class="w-full flex justify-center items-center">
      <img src="../../assets/imgs/title-discography.png" alt="discography title" class="w-[95%]">
    </h2>

    <!-- discographies -->
    <div class="w-full flex items-baseline flex-row flex-wrap mt-4">
      <div v-for="(i, index) in discographyData" :key="index" class="w-1/2 p-2 flex flex-col-reverse">
        <a href="#" class="text-center text-[0.8rem] font-bold p-2 text-[#6e5be4]">{{ i.title }}</a>

        <img v-if="discographyCoverUrls.length === discographyData.length" :src="discographyCoverUrls[index]"
          alt="pmarusama discography cover">
      </div>
    </div>
    <div>

    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { ref, Ref, onBeforeMount } from "vue"
import axios from "axios"
import type { DiscographyType } from "../../types/discographyTypes"

interface IDiscographyStruct {
  title: string,
  coverID: string
}

const discographyData: Ref<IDiscographyStruct[]> = ref([])
const discographyCoverUrls: Ref<string[]> = ref([])

async function fetchData(callback: Function): Promise<void> {
  await axios.get
    ("http://localhost:5000/api/discography/get")
    .then(res => {
      const data = res.data.discographies

      data.forEach((item: DiscographyType, index: number) => {
        discographyData.value[index] = (
          {
            title: item.name,
            coverID: item.coverObjectIDs[0]
          }
        )
      });
    })
    .then(() => {
      callback()
    })
}

function fetchCover(): void {
  discographyData.value.forEach(item => {
    axios.get(
      `http://localhost:5000/api/discographyCover/${item.coverID}`
    )
      .then(res => {
        discographyCoverUrls.value.push(`data:image/jpeg;base64,${res.data}`)
      })
  });
}

async function init(): Promise<void> {
  fetchData(fetchCover)
}

onBeforeMount(() => {
  init()
})
</script>