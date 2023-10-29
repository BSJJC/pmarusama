<template>
  <div>
    <Logo></Logo>

    <div class="relative bg-[#ffffffb3] py-10 min-h-screen lace-top lace-bottom">
      <Title></Title>

      <RouterView v-slot="{ Component }">
        <Transition name="information" mode="out-in">
          <component :is="Component"></component>
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Logo = defineAsyncComponent(() => import('./components/information-logo.vue'));
const Title = defineAsyncComponent(() => import('./components/information-title.vue'));
</script>

<style scoped>
.information-enter-active,
.information-leave-active {
  transition: all 0.3s ease-in-out;
}

.information-enter-from,
.information-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
