<template>
  <div class="relative bg-[#ffffffb3] py-10 lace-top lace-bottom">
    <Title></Title>

    <Informations></Informations>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Title = defineAsyncComponent(() => import('./components/informations-title.vue'));
const Informations = defineAsyncComponent(() => import('./components/informations-informations.vue'));
</script>

<style></style>
