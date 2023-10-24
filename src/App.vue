<template>
  <el-scrollbar height="100vh" @scroll="toggleToTopVisible">
    <div id="body">
      <router-view v-slot="{ Component }">
        <transition name="app-vue" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import toggleToTopVisible from '@/utils/toggleToTopVisible';
</script>

<style>
#body {
  background: #fff8a9 url('./assets/imgs/body-bg.png') center top/100% auto;
}

.el-scrollbar__wrap {
  scroll-behavior: smooth;
}

.app-vue-enter-active,
.app-vue-leave-active {
  transition: all 0.3s ease-in-out;
}

.app-vue-enter-from,
.app-vue-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
