<template>
  <div :class="props.data?.className">
    <img v-for="(i, index) in props.data?.images" :key="index" :src="i.url" :alt="i.alt" />
  </div>
</template>

<script setup lang="ts">
type TData = {
  className: string;
  images: Array<{
    url: string;
    alt: string;
  }>;
};

const props = defineProps({
  data: Object as () => TData,
});
</script>

<style scoped>
@import url('@/css/information.css');
</style>
