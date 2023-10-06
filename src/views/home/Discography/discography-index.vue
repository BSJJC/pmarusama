<template>
  <div id="p-discography-container" class="relative py-14 lace-top lace-bottom bg-[#ffffffb3]">
    <Title></Title>

    <Discographies></Discographies>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Title = defineAsyncComponent(() => import('./components/discography-title.vue'));
const Discographies = defineAsyncComponent(() => import('./components/discography-discographies.vue'));
</script>

<style></style>
