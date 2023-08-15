<template>
  <div class="w-full flex flex-wrap px-3">
    <div v-for="(i, index) in socialMedias" :key="index" class="w-1/2">
      <a :href="i.url" class=" block mt-3 mr-3 overflow-hidden" target="_blank">
        <img v-if="socialMedias.length === socialMediaImgs.length" :src="socialMediaImgs[index]" alt="social medias"
          class="scale-105 transition-all duration-300 hover:scale-[115%]">
      </a>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { ref, Ref, onBeforeMount } from "vue"
import axios from 'axios';
import type { SocialMediaType } from "../../types/socialMediaTypes"

const socialMedias: Ref<SocialMediaType[]> = ref([])
const socialMediaImgs: Ref<string[]> = ref([])

/**
 * get social media data
 * @param callback the function that fetches the cover
 */
function fetchDate(callback: Function): void {
  axios.get(
    "http://localhost:5000/api/socialMedia/get"
  )
    .then(res => {
      socialMedias.value = res.data.socialMedias
    })
    .then(() => {
      callback()
    })
}

/**
 * get social media covers
 */
function fetchCover(): void {
  socialMedias.value.forEach(media => {
    axios.get
      (`http://localhost:5000/api/socialMediaImg/${media.imgID}`)
      .then(res => {
        socialMediaImgs.value.push(`data:image/jpeg;base64,${res.data}`)
      })
  });
}

async function init() {
  fetchDate(fetchCover)
}

onBeforeMount(() => {
  init()
})
</script>