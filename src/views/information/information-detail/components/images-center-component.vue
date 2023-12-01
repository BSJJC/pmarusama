<template>
  <div class="flex flex-col justify-center items-center my-4 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
    <img v-for="(i, index) in props.data?.images" :key="index" :src="i.url" :alt="i.alt" class="max-w-[300px]" />
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
img {
  border-radius: 8px;
  user-select: none;
  -webkit-user-drag: none;
}
</style>
