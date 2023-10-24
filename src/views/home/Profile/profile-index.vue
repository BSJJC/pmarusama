<template>
  <div id="p-profile" class="relative my-8">
    <Title></Title>

    <Profile></Profile>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Title = defineAsyncComponent(() => import('./components/profile-title.vue'));
const Profile = defineAsyncComponent(() => import('./components/profile-profile.vue'));
</script>

<style scoped>
#p-profile-container {
  background: url('@/assets/imgs/parts2.png') top 20vw left -4vw/40vw auto no-repeat;
}

@media (width>= 768px) {
  #p-profile {
    background: url('@/assets/imgs/parts2.png') bottom 3vw left 4vw no-repeat;
  }
}
</style>
