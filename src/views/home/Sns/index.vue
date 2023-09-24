<template>
    <div ref="a"
        id="p-sns-container"
        class="w-full grid grid-cols-2 px-3 py-8 md:grid-cols-3 md:py-16 lg:max-w-[1060px] lg:m-auto">
        <div v-for="(i, index) in socialMedias"
            :key="index"
            class="flex justify-center items-center">
            <a :href="i.url"
                class="w-full mt-[12px] mx-[6px] overflow-hidden rounded-lg md:mt-[20px] md:mx-[10px]"
                target="_blank">
                <img :src="`http://localhost:5000/api/socialMediaImg/${socialMedias[index].imgID}`"
                    alt="social medias"
                    class="scale-105 transition-all duration-300 hover:scale-[115%]">
            </a>
        </div>
    </div>
</template>
  
<script setup lang='ts'>
import { ref, Ref, onMounted } from "vue"
import type { SocialMediaType } from "./types/socialMediaTypes"
import { getSocialMediaData } from "@/api/sns/index.ts"

const a: Ref<HTMLElement | undefined> = ref()
const socialMedias: Ref<SocialMediaType[]> = ref([])

onMounted(async () => {
    await getSocialMediaData()
        .then(res => {
            socialMedias.value = res
        })

    console.log(a.value!.childNodes);
})
</script>