<template>
  <footer ref="footer" id="p-footer-container"
    class="relative bg-[#fff157] h-[140px] flex justify-center items-center z-[9999]">
    <!-- to page top button -->
    <Transition>
      <div v-show="y > 200" id="p-pagetop" class="absolute w-full">
        <a href="#top">
          <img src="../../assets/imgs/pagetop.png" alt="" :class="footerVisible ? absoluteMode : fixedMode"
            class="w-[50px] hover:cursor-pointer md:w-[100px]">
        </a>
      </div>
    </Transition>

    <!-- copy right lable -->
    <p class="m-plus-rounded-1c text-[#787878] font-bold text-xs md:text-base">©︎ P丸様。</p>
  </footer>
</template>
  
<script setup lang='ts'>
import { ref, Ref } from "vue"
import { useWindowScroll, useElementVisibility } from '@vueuse/core'

const footer: Ref<HTMLElement | undefined> = ref()

const { y } = useWindowScroll();

const absoluteMode = "absolute right-[10px] bottom-[47px]"
const fixedMode = "fixed right-[10px] bottom-[10px]"
const footerVisible = useElementVisibility(footer)
</script>
  
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

a:hover img {
  animation: pagetop-aniamtion 1.5s ease-out infinite;
}

@keyframes pagetop-aniamtion {

  0%,
  100% {
    transform: translateY(0px);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateY(-15px);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>