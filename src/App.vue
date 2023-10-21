<template>
  <el-scrollbar height="100vh">
    <div id="body">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts"></script>

<style>
#body {
  background: #fff8a9 url('./assets/imgs/body-bg.png') center top/100% auto;
}

.el-scrollbar__wrap {
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
