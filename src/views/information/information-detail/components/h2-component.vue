<template>
  <div>
    <h2 class="h2-title">{{ props.data?.text }}</h2>
  </div>
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
