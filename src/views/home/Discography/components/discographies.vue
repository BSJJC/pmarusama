<template>
  <div class="grid grid-cols-2 w-full mt-4 md:grid-cols-3 lg:max-w-[1060px] lg:mx-auto">
    <div v-for="(i, index) in discographyData" :key="index" class="w-full h-full p-2">
      <a href="#" class="m-plus-rounded-1c block text-center  text-[0.8rem] font-bold text-[#6e5be4] md:text-[1rem]">

        <div v-if="discographyCoverUrls.length === discographyData.length" class="w-full overflow-hidden mb-2 rounded-lg">
          <img :src="discographyCoverUrls[index]" alt="pmarusama discography cover"
            class="w-full transition-all duration-300 hover:scale-110">
        </div>

        {{ i.title }}
      </a>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { ref, Ref, onBeforeMount } from "vue"
import axios from "axios"
import type { DiscographyType } from "../types/discographyTypes"

interface IDiscographyStruct {
  title: string,
  coverID: string
}

const discographyData: Ref<IDiscographyStruct[]> = ref([])
const discographyCoverUrls: Ref<string[]> = ref([])

/**
 * get discographies data
 * @param callback the function that fetches the cover of discography
 */
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

/**
 * get discography cover url by the coverID
 */
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
  
<style></style>../types/discographyTypes