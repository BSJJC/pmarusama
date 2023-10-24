<template>
  <el-scrollbar height="100vh" @scroll="toggleToTopVisible">
    <div id="body">
      <router-view></router-view>
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
</style>
