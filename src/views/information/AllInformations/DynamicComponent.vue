<template>
  <component :is="dynamicInformationComponent" :data="props.data" />
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import importDynamicInformationByTagName from './import-dynamic-information-by-tag-name';

type TItem = {
  tagName: string;
  data: unknown;
};

const props = defineProps<TItem>();

const dynamicInformationComponent: Ref<HTMLElement | undefined> = importDynamicInformationByTagName(props.tagName);
</script>

<style></style>
