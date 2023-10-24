<template>
  <div>
    <!-- Use this div as the anchor to return to the top -->
    <div id="/"></div>

    <Header></Header>

    <router-view v-slot="{ Component }">
      <transition name="app-vue" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Header = defineAsyncComponent(() => import('./components/CommonHeader.vue'));
const Footer = defineAsyncComponent(() => import('./components/CommonFooter.vue'));
</script>

<style scoped>
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
