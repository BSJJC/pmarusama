<template>
  <div id="p-profile-container" class="relative my-8">
    <!-- title -->
    <Title></Title>

    <!-- profile -->
    <Profile></Profile>
  </div>
</template>
  
<script setup lang='ts'>
import { defineAsyncComponent } from 'vue';

const Title = defineAsyncComponent(() => import("./components/title.vue"))
const Profile = defineAsyncComponent(() => import("./components/profile.vue"))
</script>
  
<style scoped>
#p-profile-container {
  background-image: url(../../assets/imgs/parts2.png);
  background-repeat: no-repeat;
  background-position: 1% 15%;
  background-size: 100px;
}
</style>