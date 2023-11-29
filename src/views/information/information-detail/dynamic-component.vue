<template>
  <component :is="dynamicInformationComponent" :data="props.data" />
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import importDynamicComponentByComponentName from './dynamicInformationComponent.ts';

type TComponent = {
  componentName: string;
  data: object;
};

const props = defineProps<TComponent>();

const dynamicInformationComponent: Ref<HTMLElement | undefined> = importDynamicComponentByComponentName(
  props.componentName,
);
</script>

<style></style>
