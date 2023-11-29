<template>
  <div class="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
    <img v-for="(i, index) in props.data?.images" :key="index" :src="i.url" :alt="i.alt" class="sm:max-w-[300px]" />
  </div>
</template>

<script setup lang="ts">
type TData = {
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
