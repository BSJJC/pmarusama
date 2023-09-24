<template>
    <div id="p-sns-container"
        class="w-full grid grid-cols-2 px-3 py-8 md:grid-cols-3 md:py-16 lg:max-w-[1060px] lg:m-auto">
        <div v-for="(i, index) in socialMedias"
            :key="index"
            class="flex justify-center items-center">
            <a :href="i.url"
                class="w-full mt-[12px] mx-[6px] overflow-hidden rounded-lg md:mt-[20px] md:mx-[10px]"
                target="_blank">
                <img v-if="socialMedias.length === socialMediaImgs.length"
                    :src="socialMediaImgs[index]"
                    alt="social medias"
                    class="scale-105 transition-all duration-300 hover:scale-[115%]">
            </a>
        </div>
    </div>
</template>
  
<script setup lang='ts'>
import { ref, Ref, onBeforeMount } from "vue"
import axios from 'axios';
import type { SocialMediaType } from "./types/socialMediaTypes"

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
</script>./types/socialMediaTypes