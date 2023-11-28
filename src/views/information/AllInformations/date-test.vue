<template>
  <div>
    <span class="info-date">{{ props.dateText }}</span>
  </div>
</template>

<script setup lang="ts">
type TDate = {
  dateText: string;
};

const props = defineProps<TDate>();
</script>

<style scoped>
@import url('@/css/information.css');
</style>
