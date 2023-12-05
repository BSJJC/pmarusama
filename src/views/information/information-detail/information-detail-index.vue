<template>
  <div class="w-[94%] max-w-[1000px] m-auto">
    <span id="date">
      <!-- year -->
      {{ date.substring(0, 4) }}.
      <!-- month -->
      {{ date.substring(4, 6) }}.
      <!-- day -->
      {{ date.substring(6, 8) }}
    </span>

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
#date {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-weight: bold;
  color: var(--main-color);
  font-family: 'Fredoka One', sans-serif;
}
</style>
