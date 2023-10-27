<template>
  <div class="min-h-screen">
    <component :is="dynamicComponent" />
  </div>
</template>

<script setup lang="ts">
import { shallowRef, Ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id: Ref<string> = shallowRef(route.query.date as string);
const dynamicComponent: Ref<HTMLElement | undefined> = shallowRef();

onBeforeMount(() => {
  // Modify the id value to include a hyphen
  id.value = id.value.slice(0, 8) + '-' + id.value.slice(8);

  // Dynamically import the component based on the modified id
  import(`./informations/${id.value}/${id.value}.vue`).then((component) => {
    dynamicComponent.value = component.default;
  });
});
</script>

<style></style>
