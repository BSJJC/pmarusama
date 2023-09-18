<template>
  <div id="p-discography-container" class="relative py-14 lace-top lace-bottom">
    <Title></Title>

    <Discographies></Discographies>
    <div>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { ref, Ref, onBeforeMount, defineAsyncComponent } from "vue"
import axios from "axios"
import type { DiscographyType } from "../../../types/discographyTypes"

interface IDiscographyStruct {
  title: string,
  coverID: string
}

const Title = defineAsyncComponent(() => import("./components/title.vue"))
const Discographies = defineAsyncComponent(() => import("./components/discographies.vue"))

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

<style scoped>
#p-discography-container {
  background: rgba(255, 255, 255, .7);
}
</style>./types/discographyTypes