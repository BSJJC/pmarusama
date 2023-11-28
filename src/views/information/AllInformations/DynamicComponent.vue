<template>
  <component :is="dynamicInformationComponent" :className="props.data.className" :text="props.data.text" />
</template>

<script setup lang="ts">
import { Ref, shallowRef } from 'vue';

type TTest = {
  tagName: string;
  data: unknown;
};

const props = defineProps<TTest>();

const dynamicInformationComponent: Ref<HTMLElement | undefined> = shallowRef();

import(`./common-components/${props.tagName}-component.vue`).then((component) => {
  dynamicInformationComponent.value = component.default;

  console.log(component.default);
});
</script>

<style></style>
