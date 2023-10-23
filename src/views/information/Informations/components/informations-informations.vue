<template>
  <ul>
    <li
      v-for="(i, index) in informations"
      :key="index"
      class="flex justify-center items-center w-[97%] mx-3 mb-4 md:w-[90%]"
    >
      <!-- all informations -->
      <div
        class="fredoka-one flex border-x-[1px] border-[#f60] justify-center items-center w-[30%] text-[#f60] font-bold md:w-[15%]"
      >
        <div class="flex justify-center items-center flex-col text-[0.5rem] pr-2 md:text-[0.8rem]">
          <span class="w-full text-right leading-3">
            <!-- year -->
            {{ i.date.toString().substring(0, 4) }}
            <br />
            <!-- month -->
            {{ i.date.toString().substring(4, 6) }}
          </span>
        </div>

        <div>
          <span class="text-[2.5rem]">
            <!-- day -->
            {{ i.date.toString().substring(6, 8) }}
          </span>
        </div>
      </div>

      <!-- news title -->
      <div class="m-plus-rounded-1c w-[70%] border-r-[1px] border-[#f60] px-3 md:w-[85%]">
        <a href="" class="text-[#3865e0] font-bold">{{ i.title }}</a>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, Ref, onBeforeMount } from 'vue';
import { getInformation } from '@/api/information/index.ts';

type TInformation = {
  date: number;
  title: string;
};

const informations: Ref<TInformation[]> = ref([]);

onBeforeMount(async () => {
  informations.value = await getInformation();
});
</script>

<style></style>
