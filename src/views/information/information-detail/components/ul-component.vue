<template>
  <div v-for="(i, index) in props.data?.ul" :key="index">
    <p>
      {{ i.label }}
    </p>

    <div v-if="i.children?.length !== 0" class="ml-[20px]">
      <ulComponent :data="{ ul: i.children! }"></ulComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import ulComponent from './ul-component.vue';

type TTree = {
  label: string;
  children?: Array<TTree>;
};

type TData = {
  ul: Array<TTree>;
};

const props = defineProps({
  data: Object as () => TData,
});
</script>

<style scoped>
p {
  line-height: 1.8;
  color: #787878;
}
</style>
