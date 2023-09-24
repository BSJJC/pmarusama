<template>
    <div ref="outterContainer"
        id="p-youtube__main"
        class="flex justify-center items-center relative z-[+1] mt-8 w-[96vw] py-[12vw] pr-[13vw] pl-[4vw] md:pt-[16vw] md:pr-[14vw] md:pb-[18vw] md:pl-[4vw] md:mt-0 lg:w-[80vw] lg:mr-auto lg:pt-[10vw] lg:pr-[18vw] lg:pb-[10vw] lg:pl-0 lg:justify-end">
        <div ref="innerContainer"
            id="p-youtube__main-inner"
            class="relative w-full bg-[#c0ecee] rounded-lg lg:max-w-[640px]">
            <div class=" max-w-none pt-[56.25%]">
                <YoutubePlayer url="3V9952osjnc"
                    class="absolute top-0 left-0 w-full h-full p-[5px] lg:p-[10px]">
                </YoutubePlayer>
            </div>
        </div>
    </div>
</template>
  
<script setup lang='ts'>
import { ref, Ref, onMounted } from "vue"
import { useElementVisibility, watchOnce } from "@vueuse/core"
import anime from "animejs";
import YoutubePlayer from "@/components/Common/YoutubePlayer.vue"
import enterAnimation from "@/utils/enterAnimation";

const outterContainer: Ref<HTMLElement | undefined> = ref()
const innerContainer: Ref<HTMLTimeElement | undefined> = ref()

const innerContainerVisible = useElementVisibility(innerContainer)

const outterContainerAnimationConfig: anime.AnimeParams = {
    delay: 200,
    duration: 1000,
    translateX: [-500, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo'
}

const innerContainerAnimationConfig: anime.AnimeParams = {
    delay: 600,
    marginTop: [100, 16],
    opacity: [0, 1],
    easing: 'easeOutExpo'
}

onMounted(() => {
    enterAnimation(outterContainer.value!, outterContainerAnimationConfig)
    enterAnimation(innerContainer.value!, innerContainerAnimationConfig)

    watchOnce(
        () => innerContainerVisible.value,
        () => {
            innerContainer.value!.classList.add("show-before")
        }
    )
})
</script>
  
<style scoped>
#p-youtube__main {
    background: url(@/assets/imgs/youtube-bg-sp.png) right center/100% 100% no-repeat;
}

@media (min-width: 768px) {
    #p-youtube__main {
        background: url(@/assets/imgs/youtube-bg.png) right center/auto 105% no-repeat;
    }
}

@keyframes show-before {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.show-before::before {
    position: absolute;
    animation: show-before .3s ease-in-out forwards;
    animation-delay: 1.5s;
    opacity: 0;
    content: "";
    top: 5px;
    left: 5px;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(135deg, #a7ef91 25%, #fff 25%, #fff 50%, #a7ef91 50%, #a7ef91 75%, #fff 75%, #fff 100%);
    background-size: 24px 24px;
    border-radius: 8px;
}
</style>