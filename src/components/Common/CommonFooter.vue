<template>
  <footer id="p-footer">
    <!-- to page top button -->
    <Transition>
      <div v-show="toTopVisible" class="relative top-[30%] w-full z-[9999]">
        <a href="#/">
          <img
            src="@/assets/imgs/pagetop.png"
            alt=""
            :class="footerRefVisible ? fixedAtBottom : notFixedAtBottom"
            class="w-[40px] hover:cursor-pointer md:w-[60px]"
          />
        </a>
      </div>
    </Transition>

    <div
      ref="footerRef"
      class="relative lace-bottom after:top-[-140px] bg-[#fff157] h-[140px] flex justify-center items-center"
    >
      <!-- copy right lable -->
      <p class="m-plus-rounded-1c text-[#787878] font-bold text-xs md:text-base">©︎ P丸様。</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useElementVisibility } from '@vueuse/core';
import { useFooter } from '@/stores/footerStore';

const footerRef: Ref<HTMLElement | undefined> = ref();

const footerStore = useFooter();
const { toTopVisible } = storeToRefs(footerStore);
let footerRefVisible: Ref<boolean>;

const fixedAtBottom = 'absolute right-[10px] bottom-[calc(-100%+10px)]';
const notFixedAtBottom = 'fixed right-[10px] bottom-[10px]';

onMounted(() => {
  footerRefVisible = useElementVisibility(footerRef);
});
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
  animation: pagetop-aniamtion 1s ease-out infinite;
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
