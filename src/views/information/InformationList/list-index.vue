<template>
  <informationList></informationList>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const informationList = defineAsyncComponent(() => import('./components/information-list.vue'));
</script>

<style></style>
