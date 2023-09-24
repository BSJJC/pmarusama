<template>
    <div ref="discography"
        class="grid grid-cols-2 w-full mt-4 md:grid-cols-3 lg:max-w-[1060px] lg:mx-auto">
        <div v-for="(i, index) in discographyData"
            :key="index"
            class="w-full h-full p-2">
            <a href="#"
                class="m-plus-rounded-1c block text-center  text-[0.8rem] font-bold text-[#6e5be4] md:text-[1rem]">

                <div class="w-full overflow-hidden mb-2 rounded-lg">
                    <img :src="`http://localhost:5000/api/discographyCover/${discographyData[index].coverID}`"
                        alt="pmarusama discography cover"
                        class="w-full transition-all duration-300 hover:scale-110">
                </div>

                {{ i.title }}
            </a>
        </div>
    </div>
</template>
  
<script setup lang='ts'>
import { ref, Ref, onMounted } from "vue"
import { useElementVisibility, watchOnce } from "@vueuse/core"
import anime from "animejs";
import { getDiscograhyData } from "@/api/discography/index.ts"

const discography: Ref<HTMLElement | undefined> = ref()
const discographyVisible: Ref<boolean> = useElementVisibility(discography)

const discographyData: Ref<{
    title: string,
    coverID: string
}[]> = ref([])

onMounted(async () => {
    await getDiscograhyData()
        .then(res => {
            discographyData.value = res
        })

    watchOnce(
        () => discographyVisible.value,
        () => {
            for (let i = 0; i < discography.value!.childNodes.length; i++) {
                const el = discography.value!.childNodes[i];

                if (el.nodeName === "DIV") {
                    const elAnimationConfig: anime.AnimeParams = {
                        delay: 300 + 100 * i,
                        opacity: [0, 1],
                        translateY: [50, 0]
                    }

                    anime({
                        targets: el,
                        ...elAnimationConfig
                    })
                }
            }
        }
    )
})
</script>
  
<style></style>