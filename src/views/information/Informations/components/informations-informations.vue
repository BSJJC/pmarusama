<template>
  <ul class="mt-10">
    <li v-for="(i, index) in informations" :key="index" class="flex mb-4 min-w-[300px] w-[70%] m-auto md:mb-8">
      <!-- informations pubulish date -->
      <div
        class="fredoka-one flex justify-center items-center w-[30%] max-w-[140px] border-[#f60] border-x-[1px] text-[#f60] font-bold"
      >
        <div class="flex justify-center items-center flex-col text-[0.7rem]">
          <span class="w-full text-right leading-3 md:text-[1rem] md:leading-4">
            <!-- year -->
            {{ i.date.toString().substring(0, 4) }}
            <br />
            <!-- month -->
            {{ i.date.toString().substring(4, 6) }}
          </span>
        </div>

        <span class="text-[2rem] md:text-[2.5rem]">
          <!-- day -->
          {{ i.date.toString().substring(6, 8) }}
        </span>
      </div>

      <!-- news title -->
      <div
        class="m-plus-rounded-1c flex justify-start items-center w-[70%] border-r-[1px] border-[#f60] px-3 md:text-[1.3rem] md:w-full"
      >
        <a href="" class="text-[#3865e0] font-black">{{ i.title }}</a>
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
