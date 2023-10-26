<template>
  <div class="min-h-screen">
    <Title></Title>

    <Informations></Informations>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Title = defineAsyncComponent(() => import('./Title/title-index.vue'));
const Informations = defineAsyncComponent(() => import('./Informations/informations-index.vue'));
</script>

<style></style>
