<template>
  <component :is="dynamicInformationComponent" :data="props.data" />
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import importDynamicComponentByComponentName from './import-dynamic-information-by-tag-name';

type TItem = {
  componentName: string;
  data: unknown;
};

const props = defineProps<TItem>();

const dynamicInformationComponent: Ref<HTMLElement | undefined> = importDynamicComponentByComponentName(
  props.componentName,
);
</script>

<style></style>
