<template>
  <div>
    <Header></Header>

    <router-view v-slot="{ Component }">
      <transition name="main-laytout" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Header = defineAsyncComponent(() => import('../components/common-header.vue'));
const Footer = defineAsyncComponent(() => import('../components/common-footer.vue'));
</script>

<style scoped>
.main-laytout-enter-active,
.main-laytout-leave-active {
  transition: all 0.3s ease-in-out;
}

.main-laytout-enter-from,
.main-laytout-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
