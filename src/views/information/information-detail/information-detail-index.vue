<template>
  <div class="info-container">
    <span>{{ date }}</span>

    <dynamicComponent
      v-for="(i, index) in components"
      :key="index"
      :component-name="i.componentName"
      :data="i.data"
    ></dynamicComponent>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import getInformationDetail from '@/api/information/getInformationDetail';
import dynamicComponent from './dynamic-component.vue';

const route = useRoute();

const date: Ref<string> = ref(route.query.date as string);
const components: Ref<
  Array<{
    componentName: string;
    data: object;
  }>
> = ref([]);

onBeforeMount(() => {
  getInformationDetail(date.value).then((res) => {
    components.value = res.components;
  });
});
</script>

<style scoped>
@import url('@/css/information.css');
</style>
