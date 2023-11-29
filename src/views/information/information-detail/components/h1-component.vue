<template>
  <h1 class="h1-title">{{ props.data?.text }}</h1>
</template>

<script setup lang="ts">
type TData = {
  text: string;
};

const props = defineProps({
  data: Object as () => TData,
});
</script>

<style scoped>
@import url('@/css/information.css');
</style>
