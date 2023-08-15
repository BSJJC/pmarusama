<template>
  <div class="w-full flex flex-wrap pr-3">
    <img v-for="(i, index) in socialMediaImgs" :key="index" :src="i" alt="social medias" class="w-1/2 pt-3 pl-3">
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