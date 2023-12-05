<template>
  <div class="w-[98%] m-auto rounded-lg bg-[#f60] grid grid-cols-2 p-2 md:grid-cols-3 lg:grid-cols-4">
    <div v-for="(i, index) in props.data?.images" :key="index" class="flex justify-center items-center p-1">
      <a :href="i.url" target="_blank">
        <img :src="i.src" :alt="i.alt" class="w-full transition-all duration-300 ease-in-out hover:scale-110" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
type TShopImage = {
  src: string;
  url: string;
  alt: string;
};

type TData = {
  images: Array<TShopImage>;
};

const props = defineProps({
  data: Object as () => TData,
});
</script>

<style scoped></style>
