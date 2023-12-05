<template>
  <div class="flex justify-center items-start flex-wrap w-full">
    <div
      v-for="(i, index) in props.data?.ul"
      :key="index"
      class="md:w-1/2 mt-10 transition-all duration-75 sm:w-full w-full"
    >
      <p class="font-bold">
        {{ i.label }}
      </p>

      <div v-if="i.children?.length !== 0" class="ml-[30px]">
        <ulChilde :data="{ ul: i.children! }"></ulChilde>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ulChilde from './ul-childe-component.vue';

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
  font-size: large;
}
</style>
