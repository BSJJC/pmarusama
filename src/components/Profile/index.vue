<template>
  <div id="p-profile-container" class="relative my-5">

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
  
<style scoped></style>