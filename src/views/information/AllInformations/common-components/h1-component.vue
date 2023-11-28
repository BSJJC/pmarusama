<template>
  <h1 :class="props.data?.className">{{ props.data?.text }}</h1>
</template>

<script setup lang="ts">
type TData = {
  className: string;
  text: string;
};

const props = defineProps({
  data: Object as () => TData,
});
</script>

<style></style>
