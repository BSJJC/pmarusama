<template>
  <div class="min-h-screen">
    <component :is="dynamicInformationComponent" />
  </div>
</template>

<script setup lang="ts">
import { shallowRef, Ref, onBeforeMount, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useFooter } from '@/stores/footerStore';

const route = useRoute();
const date: Ref<string> = shallowRef(route.query.date as string);
const dynamicInformationComponent: Ref<HTMLElement | undefined> = shallowRef();
const footerStore = useFooter();

onBeforeMount(() => {
  //   date : 20231027001 -> date : 20231027-001
  date.value = date.value.slice(0, 8) + '-' + date.value.slice(8);

  import(`./informations/${date.value}/${date.value}.vue`)
    .then((component) => {
      dynamicInformationComponent.value = component.default;
    })
    .catch(() => {
      import(`../../404-notfound.vue`).then((component) => {
        dynamicInformationComponent.value = component.default as unknown as HTMLElement;
      });
    });
});

onMounted(() => {
  footerStore.backToTop();
});
</script>

<style></style>
