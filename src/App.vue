<template>
  <el-scrollbar height="100vh">
    <div id="body">
      <Home></Home>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import Home from "./views/home/index.vue";
</script>

<style>
#body {
  background: #fff8a9 url(./assets/imgs/body-bg.png) center top/100% auto;
}

.el-scrollbar__wrap {
  scroll-behavior: smooth;
}
</style>
