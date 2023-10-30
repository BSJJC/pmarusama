<template>
  <RouterLink
    ref="moreRef"
    to="information"
    @click="footerStore.backToTop"
    class="m-plus-rounded-1c bg-[#ff5872] rounded-full py-2 px-8 font-bold text-white text-[1.3rem]"
  >
    もっと見る
  </RouterLink>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';
import { useFooter } from '@/stores/footerStore';
import anime from 'animejs';
import enterAnimation from '@/utils/enterAnimation';

const moreRef: Ref<HTMLElement | undefined> = ref();
const moreRefAnimationConfig: anime.AnimeParams = {
  delay: 600,
  opacity: [0, 1],
};
const footerStore = useFooter();

onMounted(() => {
  enterAnimation(moreRef.value!, moreRefAnimationConfig);
});
</script>

<style></style>
