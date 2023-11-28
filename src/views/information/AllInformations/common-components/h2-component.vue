<template>
  <h2 :class="props.data?.className">{{ props.data?.text }}</h2>
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
