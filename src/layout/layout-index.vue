<template>
  <div>
    <Header></Header>

    <router-view v-slot="{ Component }">
      <transition name="layout" mode="out-in">
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
.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s ease-in-out;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
