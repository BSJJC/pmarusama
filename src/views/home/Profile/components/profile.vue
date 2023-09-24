<template>
    <div ref="outterContainer"
        id="p-profile__main"
        class="w-[95%] pl-[11%] pb-[70px] pr-4 pt-4 translate-y-[-7%] ml-auto md:translate-y-[-8%] md:pt-10 md:pb-[120px] lg:w-[80vw] lg:pt-[5vw] lg:pr-0 lg:pb-[10vw] lg:pl-[18vw]">
        <div ref="innerContainer"
            id="p-profile__inner"
            class="bg-[#ffda55] relative mt-4 ml-2 rounded-lg md:flex md:justify-center md:items-center lg:max-w-[640px] lg:pl-[2vw]">
            <!-- profile intro -->
            <div ref="intro"
                class="m-plus-rounded-1c pb-3 text-[#787878] pt-6 px-4 leading-3 md:w-1/2 md:px-10 lg:p-0">
                <h3 class="text-3xl font-bold">P丸様。</h3>
                <span class="block text-sm font-bold md:text-lg">YouTubeやTikTok等の動画投稿サイトで活動中のマルチエンターテイナー！</span>
                <span
                    class="block text-sm font-bold md:text-lg">癖になる短編アニメ動画が大人気で、現在YouTubeチャンネルの登録者数は255万人、動画総再生数は20億回を突破。</span>
            </div>

            <!-- profile image -->
            <div ref="img"
                class="flex justify-end items-center md:w-1/2">
                <img src="@/assets/imgs/profile-img.png"
                    alt="profile image"
                    class="w-[60%] md:w-full">
            </div>
        </div>
    </div>
</template>
  
<script setup lang='ts'>
import { ref, Ref, onMounted } from "vue"
import anime from "animejs";
import enterAnimation from "@/utils/enterAnimation";

const outterContainer: Ref<HTMLElement | undefined> = ref()
const innerContainer: Ref<HTMLElement | undefined> = ref()
const intro: Ref<HTMLElement | undefined> = ref()
const img: Ref<HTMLElement | undefined> = ref()

const outterContainerAnimationConfig: anime.AnimeParams = {
    delay: 200,
    duration: 1000,
    translateX: [500, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo'
}

const innerContainerAnimationConfig: anime.AnimeParams = {
    delay: 600,
    marginTop: [100, 16],
    opacity: [0, 1],
    easing: 'easeOutExpo'
}

const imgAnimationConfig: anime.AnimeParams = {
    delay: 1000,
    opacity: [0, 1],
    translateY: [50, 0]
}

onMounted(() => {
    enterAnimation(outterContainer.value!, outterContainerAnimationConfig);
    enterAnimation(innerContainer.value!, innerContainerAnimationConfig)
    enterAnimation(img.value!, imgAnimationConfig)

    for (let i = 0; i < intro.value!.childNodes.length; i++) {
        const el = intro.value!.childNodes[i]
        if (!el.textContent) continue;

        const elAnimationConfig: anime.AnimeParams = {
            delay: 700 + 100 * i,
            opacity: [0, 1],
            translateY: [-30, 0]
        }

        enterAnimation(el as HTMLElement, elAnimationConfig)
    }
})
</script>
  
<style scoped>
#p-profile__main {
    background: url(@/assets/imgs/profile-bg-sp.png) left center/100% 100% no-repeat;
}

@media (min-width: 768px) {
    #p-profile__main {
        background: url(@/assets/imgs/profile-bg.png) left center/auto 105% no-repeat;
    }
}

@media (min-width: 1024px) {
    #p-profile__main {
        background: url(@/assets/imgs/profile-bg.png) left center / auto 100% no-repeat;
        ;
    }
}

@keyframes bg-fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

#p-profile__inner::before {
    position: absolute;
    animation: bg-fade-in 300ms ease-in-out forwards;
    animation-delay: 4s;
    opacity: 0;
    content: "";
    top: 5px;
    left: 5px;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(135deg, #ffd0de 25%, #fff 25%, #fff 50%, #ffd0de 50%, #ffd0de 75%, #fff 75%, #fff 100%);
    background-size: 24px 24px;
    border-radius: 8px;
}
</style>