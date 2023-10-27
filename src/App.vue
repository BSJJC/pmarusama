<template>
  <el-scrollbar ref="scrollbarRef" height="100vh" @scroll="toggleToTopVisible">
    <div id="body">
      <router-view v-slot="{ Component }">
        <transition mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useFooter } from '@/stores/footerStore';
import toggleToTopVisible from '@/utils/toggleToTopVisible';

const scrollbarRef = ref();
const footerStore = useFooter();
const { toTop } = storeToRefs(footerStore);

watch(
  () => toTop.value,
  () => {
    if (!toTop.value) scrollbarRef.value?.setScrollTop(0);
  },
);
</script>

<style>
#body {
  background: #fff8a9 url('./assets/imgs/body-bg.png') center top/100% auto;
}

.el-scrollbar__wrap {
  scroll-behavior: smooth;
}
</style>
