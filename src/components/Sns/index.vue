<template>
  SNS
  <img v-for="(i, index) in socialMediaImgs" :key="index" :src="i" alt="">
</template>
  
<script setup lang='ts'>
import { ref, Ref } from "vue"
import axios from 'axios';
import type { SocialMediaType } from "../../types/socialMediaTypes"

const socialMedias: Ref<SocialMediaType[]> = ref([])
const socialMediaImgs: Ref<string[]> = ref([])


async function init() {
  await axios.get(
    "http://localhost:5000/api/socialMedia/get"
  )
    .then(res => {
      socialMedias.value = res.data.socialMedias
    })

  socialMedias.value.forEach(media => {
    axios.get
      (`http://localhost:5000/api/socialMediaImg/${media.imgID}`)
      .then(res => {
        socialMediaImgs.value.push(`data:image/jpeg;base64,${res.data}`)
      })
  });


}

init()

</script>