<template>
  <h1 :class="props.className">{{ props.text }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  className: String,
  text: String,
});
</script>

<style></style>
